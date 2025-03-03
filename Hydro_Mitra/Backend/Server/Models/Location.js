



import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
    State: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    PinCode: {
        type: String,
        required: true,
    },
    Landmark: {
        type: String,
        required: true,
    },
});


const Location = mongoose.model('Location', LocationSchema);
export { Location };
