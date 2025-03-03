import mongoose from "mongoose";
import { Location } from './Location.js'; 



const SensorSchema = new mongoose.Schema({
    Turbidity: {
        type: [{ value: Number, timestamp: Date }], 
        required: true,
        default: [], 
    },
    PH: {
        type: [{ value: Number, timestamp: Date }], 
        default: [],
    },
    Temperature: {
        type: [{ value: Number, timestamp: Date }], 
        required: true,
        default: [],
    },
    Conductivity: {
        type: [{ value: Number, timestamp: Date }], 
        required: true,
        default: [],
    },
    Flow: {
        type: [{ value: Number, timestamp: Date }], 
    },
    Ammonia: {
        type: [{ value: Number, timestamp: Date }], 
        required: true,
        default: [],
    },
    WaterLevel: {
        type: [{ value: Number, timestamp: Date }], 
        default: [],
    },
    TDS: {
        type: [{ value: Number, timestamp: Date }], 
        required: true,
        default: [],
    },
    Location: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Location', 
        required: true,
    },
});


const Sensor = mongoose.model('Sensor', SensorSchema);
export { Sensor };
