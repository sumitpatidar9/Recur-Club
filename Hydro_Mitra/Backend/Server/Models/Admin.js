

import mongoose from "mongoose";
import { Location } from "./Location.js";


const AdminSchema = new mongoose.Schema({

    Org_name:{
        type: String,
        required: true,
    },
    Name:{
        type: String,
        required: true,
    },
    LastName:{
        type: String,
        required: true,
    },
    PhoneNumber:{
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true,
    },
    Location: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Location', 
        required: true,
    },
});



const Admin = mongoose.model('Admin', AdminSchema);
export {Admin};