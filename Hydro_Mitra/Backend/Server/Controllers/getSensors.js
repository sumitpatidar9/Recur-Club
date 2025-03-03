import { Sensor } from "../Models/Sensor.js";
import { Location } from "../Models/Location.js"; 
import {ObjectId } from 'mongodb';



const getSensorData = async (req, res) => {
    const { range } = req.params;  // Range will be the number of data points to return
    const { location_id } = req.query;  // Getting id from the request body



    // console.log("Request Made");

    try {
        const location = await Location.findOne({ _id: new ObjectId(location_id) });
        if (!location) {
            return res.status(404).json({ message: "Location not found." });
        }

        const sensorData = await Sensor.findOne({ Location: location._id });
        if (!sensorData) {
            return res.status(404).json({ message: "Sensor data not found for the given location." });
        }

        let latestData = {};

        // If range is 0, return all data points
        if (parseInt(range) === 0) {
            return res.status(200).json(sensorData);
        } else {
            // Slice last 'range' number of entries from each array in the sensor data
            latestData = Object.entries(sensorData.toObject()).reduce((acc, [key, value]) => {
                if (Array.isArray(value) && value.length > 0) {
                    acc[key] = value.slice(-parseInt(range));  // Slicing the last 'range' elements
                }
                return acc;
            }, {});
        }

      
        res.status(200).json(latestData);  // Return the latest data
    } catch (error) {
        console.error("Error retrieving sensor data:", error);
        res.status(500).json({ message: "Error retrieving sensor data", error: error.message });
    }
};





const getAllSensorData = async (req, res) => {
    
    try {
        const sensors = await Sensor.find().populate('Location');
        if (!sensors || sensors.length === 0) {
            return res.status(404).json({ message: "No sensor data found." });
        }
        res.status(200).json(sensors);
    } 
    
    catch (error) {
        console.error("Error retrieving all sensor data:", error);
        res.status(500).json({ message: "Error retrieving sensor data", error: error.message });
    }
};





export { getSensorData,  getAllSensorData};
