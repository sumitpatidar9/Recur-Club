




import mongoose from "mongoose";
import { Location } from "./Location";


const UserFeedbackSchema = new mongoose.Schema({

    Name:{
        tyepe: String,
        required: true,
    },

    LastName:{
        type: String,
        required: true,
    },

    Mobile: {
        type: String,
        required: true,
    },

    Complaint: {
        type: String,
        required: true,
    }, 

    Location: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Location', 
        required: true,
    },
});


const UserFeedback = mongoose.model('UserFeedback', UserFeedbackSchema);
export { UserFeedback};


