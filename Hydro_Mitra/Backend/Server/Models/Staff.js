import mongoose from "mongoose";
import { Location } from "./Location.js";






const StaffTestSchema = new mongoose.Schema({
    TestName: {
        type: String,
        required: true,
    },
    Params: [
        {
            name: { type: String, required: true },
            value: { type: String, required: true },
        },
    ],
    Location: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Location', 
    },
});





const StaffTestSchema2 = new mongoose.Schema({
    TestName: {
        type: String,
        required: true,
    },
    Params: [
        {
            name: { type: String, required: true },
            value: { type: Number, required: true },
        },
    ],
    Location: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Location', 
    },
});




const StaffSchema = new mongoose.Schema({
    Org_name: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    PhoneNumber: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Tests: [StaffTestSchema],
    Tests2: [StaffTestSchema2]
});


const Staff = mongoose.model('Staff', StaffSchema);
export {Staff};
