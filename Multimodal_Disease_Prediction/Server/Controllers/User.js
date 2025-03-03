
import { User } from "../Models/UserModel.js";
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import env from 'dotenv';

env.config();

const cookieName = process.env.COOKIE_NAME;
const jwtsecret = process.env.JWT_SECRET;




const Signup = async (req, res) => {

    const { name, lastname, username, email, password, gender, dob, address, contact } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            return res.status(200).json({ message: 'User already exist!' });
        }

        else {
            const hashedPassword = await hash(password, 10);
            const newUser = new User({ name: name, lastname: lastname, username: username, email: email, password: hashedPassword, gender: gender, dob: dob, address: address, contact: contact});
            newUser.save();
               
            const id = newUser._id.toString();
            const payload = { id, email };
            const token = jwt.sign(payload, jwtsecret, { expiresIn: '7d' });

            

            const expires = new Date();
            expires.setDate(expires.getDate() + 7);

            res.cookie(cookieName, token, {
                path: "/",
                domain: "localhost",
                expires,
                httpOnly: true,
                signed: true,
            }); 

            return res.status(200).json({ message: "Signup successful", name: newUser.name, email: newUser.email });
        }
    }

    catch (error) {
        return res.status(404).json({ message: 'Error Signup!' });
    }
}






const Signin = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User not registered" });
        }

        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).json({ message: "Incorrect Password" });
        }

        

        const id = user._id.toString();

        const payload = { id, email };
        const token = jwt.sign(payload, jwtsecret, { expiresIn: '7d' });

        const expires = new Date();
        expires.setDate(expires.getDate() + 7);

        res.cookie(cookieName, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });

        return res.status(200).json({ message: "Login successful", name: user.name, email: user.email });
    }

    catch (error) {
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
}



const verifyToken = async (req, res, next) => {
    const token = await req.signedCookies[cookieName];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, jwtsecret);
        res.locals.jwtData = decoded;
        return next();
    }

    catch (error) {
        return res.status(403).json({ message: "Invalid token" });
    }
};




const sendUser = async (req, res) => {
    
    try{
        const email = res.locals.jwtData.email;
        const user = await User.findOne({email});
        return res.status(200).json({ message: "Authenticated", user: user });
        console.log(user);
    }

    catch(error){
        console.log('Error in auth');
    }
}



const Logout = async (req, res) => {

    try {
        console.log(res.locals.jwtData);
        const user = await User.findById(res.locals.jwtData.id);

        if (!user) {
            return res.status(401).send("User not registered OR Token malfunctioned");
        }

        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions didn't match");
        }

        res.clearCookie(cookieName, {
            httpOnly: true,
            domain: "localhost",
            signed: true,
            path: "/",
        });

        return res
            .status(200)
            .json({ message: "OK", name: user.name, email: user.email });

    }

    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
}



const Home = (req, res)=>{
    res.send("This is home page");
}

export { Signup, Signin, verifyToken, Logout , sendUser, Home};


