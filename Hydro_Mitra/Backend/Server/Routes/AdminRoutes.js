import { Router } from "express";
import { Signup, Login, sendAdmin, Logout} from "../Controllers/AdminAuth.js"; 
import { verifyToken } from "../Controllers/VerifyToken.js";

const adminRouter = Router(); 

adminRouter.post("/admin/signup", Signup); 
adminRouter.post("/admin/login", Login);
adminRouter.get("/admin/getUser", verifyToken, sendAdmin);
adminRouter.get("/admin/getOut", verifyToken, Logout);  


export { adminRouter }; 
