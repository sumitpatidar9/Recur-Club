import jwt from 'jsonwebtoken';
import env from 'dotenv';


env.config();


const cookieName = process.env.COOKIE_NAME;
const jwtsecret = process.env.JWT_SECRET;



const verifyToken = async (req, res, next) => {
    const token = await req.signedCookies[cookieName];

    console.log("for image ML");
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




export {verifyToken};
