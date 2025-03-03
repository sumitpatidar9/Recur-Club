

import { Location } from "../Models/Location.js";



const getAllLocation = async (req, res) => {
     try {
        const location = await Location.find({}); 
        if (!location) {
            return res.status(404).json({ message: "Location not found." });
        }
        res.status(200).json({location});
    } 
    
    catch (error) {
        console.error("Error retrieving location data:", error);
        res.status(500).json({ message: "Error retrieving location data", error: error.message });
    }
};


export{getAllLocation};