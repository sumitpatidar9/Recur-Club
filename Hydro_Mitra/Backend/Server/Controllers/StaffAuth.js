

import { Staff } from '../Models/Staff.js';
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import env from 'dotenv';


env.config();
const cookieName = process.env.COOKIE_NAME;
const jwtsecret = process.env.JWT_SECRET;




const Signup = async (req, res) => {
    const {org_name, name, lastName, phoneNumber, email, password} = req.body;
    
    try {
        const staff = await Staff.findOne({ Email:email });
        if (staff) {
            return res.status(200).json({ message: 'Staff already exist!' });
        }

        else {
            const hashedPassword = await hash(password, 10);
            const newStaff= new Staff({Org_name: org_name, Name: name, LastName: lastName, PhoneNumber:phoneNumber, Email: email, Password: hashedPassword});
            newStaff.save();


            const id = newStaff._id.toString();
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
            return res.status(200).json({ message: "Signup successful", name: newStaff.Name, email: newStaff.Email });
        }
    }

    catch (error) {
        console.log(error);
        return res.status(404).json({ message: 'Error Signup!' });
    }
}









const Login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    try {
        const staff = await Staff.findOne({ Email: email });
        if (!staff) {
            return res.status(401).json({ message: "Staff not registered" });
        }

        const isPasswordCorrect = await compare(password, staff.Password);
        if (!isPasswordCorrect){
            return res.status(403).json({ message: "Incorrect Password" });
        }

        const id = staff._id.toString();
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

     return res.status(200).json({ message: "Login successful", name: staff.Name, email: staff.Email ,lastName:staff.LastName , role: "staff" }); 
    }

    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
}




const sendStaff = async (req, res) => {
    try{
        console.log("Staff Auth Check");
        const email = res.locals.jwtData.email;
        const staff = await Staff.findOne({Email: email});
        return res.status(200).json({ message: "Authenticated", staff: staff, role: "staff"});
    }

    catch(error){
        console.log('Error in auth');
    }
}




const Logout = async (req, res) => {
    try {
        console.log(res.locals.jwtData);
        console.log("staff logged out");
        const staff = await Staff.findById(res.locals.jwtData.id);

        console.log(staff);

        if (!staff){
            return res.status(401).send("Staff not registered OR Token malfunctioned");
        }

        if (staff._id.toString() !== res.locals.jwtData.id) {
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
            .json({ message: "OK", name: staff.Name, email: Staff.Email });

    }

    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
}



export { Signup, Login, Logout , sendStaff};
