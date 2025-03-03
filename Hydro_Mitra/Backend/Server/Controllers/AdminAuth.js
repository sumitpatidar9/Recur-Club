import { Admin } from '../Models/Admin.js';
import { Location } from "../Models/Location.js"; 
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import env from 'dotenv';


env.config();
const cookieName = process.env.COOKIE_NAME;
const jwtsecret = process.env.JWT_SECRET;








const Signup = async (req, res) => {
    const { org_name, name, lastName, phoneNumber, email, password, state, city, pincode, landmark } = req.body;


    try {
        const admin = await Admin.findOne({ Email: email }); 
        if (admin) {
            return res.status(200).json({ message: 'Admin already exists!' });
        } 
        
        else {
                       
            const location = await Location.findOne({ Landmark: landmark});
            if (!location) {
                return res.status(404).json({ message: "Location not found." });
            }
    
            const hashedPassword = await hash(password, 10);
            const newAdmin = new Admin({ Org_name: org_name, Name: name, LastName: lastName, PhoneNumber: phoneNumber, Email: email, Password: hashedPassword, Location: location._id}); 
            newAdmin.save();
           

            const id = newAdmin._id.toString();
            const payload = { id, email };
            const token = jwt.sign(payload, jwtsecret, { expiresIn: '7d' });

            const expires = new Date();
            expires.setDate(expires.getDate() + 7);

            res.cookie(cookieName, token, {
                path: "/",
                domain: req.hostname,
                expires,
                httpOnly: true,
                signed: true,
            });

            console.log('signed up ');
            return res.status(200).json({
                message: "SignUp successful",
                name: newAdmin.Name,
                email: newAdmin.Email,
                lastName: newAdmin.LastName
            });
            
        }
    } 
    
    catch (error) {
        console.log(error);
        return res.status(404).json({ message: 'Error Signup!' });
    }
}






const Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ Email: email }); 
        if (!admin) {
            return res.status(401).json({ message: "Admin not registered" }); 
        }

        const isPasswordCorrect = await compare(password, admin.Password);
        if (!isPasswordCorrect) {
            return res.status(403).json({ message: "Incorrect Password" });
        }

        const id = admin._id.toString();
        const payload = { id, email };
        const token = jwt.sign(payload, jwtsecret, { expiresIn: '7d' });


        const expires = new Date();
        expires.setDate(expires.getDate() + 7);

 
        res.cookie(cookieName, token, {
            path: "/",
            domain: req.hostname,
            expires,
            httpOnly: false,
            signed: true,
            sameSite: 'none',
        });
           
        return res.status(200).json({ message: "Login successful", name: admin.Name, email: admin.Email, lastName: admin.LastName, role:"admin"}); 
    }
    

    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
}




const sendAdmin = async (req, res) => {
    try {
        console.log("Admin Auth Check");
        const email = res.locals.jwtData.email;
        const admin = await Admin.findOne({ Email: email }); 
        return res.status(200).json({ message: "Authenticated", admin: admin, role: "admin"}); 
    } 
    
    catch (error) {
        console.log('Error in auth');
    }
}



const Logout = async (req, res) => {
    try {
        console.log("Admin logged out");
        const admin = await Admin.findById(res.locals.jwtData.id); 

        if (!admin) {
            return res.status(401).send("Admin not registered OR Token malfunctioned"); 
        }

        if (admin._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions didn't match");
        }

        res.clearCookie(cookieName, {
            httpOnly: true,
            domain: req.hostname,
            signed: true,
            path: "/",
            sameSite: 'none',
        });

        return res
            .status(200)
            .json({ message: "OK", name: admin.Name, email: admin.Email }); 
    } 

    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
}



export { Signup, Login, Logout, sendAdmin }; 


