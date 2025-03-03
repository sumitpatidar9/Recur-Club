import { Sensor } from '../Models/Sensor.js';
import { Location } from '../Models/Location.js'; 

const generateRandomValue = (min, max) => Math.random() * (max - min) + min;

let ids = [];


const findOrCreateLocation = async (locationData) => {
    try {   
        const existingLocation = await Location.findOne(locationData);
        if (existingLocation) {
            return existingLocation;
        } 
        else {
           
            const newLocation = new Location(locationData);
            return await newLocation.save();
        }
    } catch (error) {
        console.error('Error finding or creating location:', error.message);
        throw error;
    }
};


const findOrCreateSensor = async (locationId) => {
    try {      
        const existingSensor = await Sensor.findOne({ Location: locationId });
        if (existingSensor) {
            return existingSensor;
        } else {
           
            const newSensor = new Sensor({
                Turbidity: [],
                PH: [],
                Temperature: [],
                Conductivity: [],
                Flow: [],
                Ammonia: [],
                WaterLevel: [],
                TDS: [],
                Location: locationId,
            });
            return await newSensor.save();
        }
    } 
    
    catch (error) {
        console.error('Error finding or creating sensor:', error.message);
        throw error;
    }
};



const createOrUpdateSensor = async (locationData) => {
    try {
        const location = await findOrCreateLocation(locationData);
        const sensor = await findOrCreateSensor(location._id);

        console.log('Sensor found or created:', sensor._id);
        ids.push(sensor._id); // Store the sensor ID
    } catch (error) {
        console.error('Error creating or updating sensor:', error.message);
    }
};


const updateSensorData = async (sensorId) => {
    try {
        const sensor = await Sensor.findById(sensorId);
        
        if (sensor) {
            const currentTime = new Date();

            sensor.Turbidity.push({ value: generateRandomValue(0, 1000), timestamp: currentTime }); // Turbidity in NTU
            sensor.PH.push({ value: generateRandomValue(6, 8.5), timestamp: currentTime }); // pH
            sensor.Temperature.push({ value: generateRandomValue(0, 40), timestamp: currentTime }); // Temperature in °C
            sensor.Conductivity.push({ value: generateRandomValue(50, 1500), timestamp: currentTime }); // Conductivity in μS/cm
            sensor.Flow.push({ value: generateRandomValue(0, 500), timestamp: currentTime }); // Flow in L/s
            sensor.Ammonia.push({ value: generateRandomValue(0, 3), timestamp: currentTime }); // Ammonia in mg/L
            sensor.WaterLevel.push({ value: generateRandomValue(0, 10), timestamp: currentTime }); // Water level in meters
            sensor.TDS.push({ value: generateRandomValue(50, 500), timestamp: currentTime }); // TDS in mg/L

            await sensor.save(); 
            console.log(`Sensor data updated successfully for sensor ${sensorId}.`);
        } else {
            console.log('Sensor not found for ID:', sensorId);
        }
    } catch (error) {
        console.error('Error updating sensor data:', error.message);
    }
};


const startUpdatingSensorData = (sensorId) => {
    setInterval(() => {
        updateSensorData(sensorId); 
    }, 3000); 
};


const simulateSensor = async (req, res) => {
    try {
        await createOrUpdateSensor({
            State: "Punjab",
            City: "Jalandhar",
            PinCode: "14401",
            Landmark: "Jalandhar Cantt"
        });
        await createOrUpdateSensor({
            State: "Haryana",
            City: "Ambala",
            PinCode: "133001",
            Landmark: "Ambala Cantt"
        });
        await createOrUpdateSensor({
            State: "Haryana",
            City: "Gurugram",
            PinCode: "110038",
            Landmark: "Gurugram sector 4"
        });
        await createOrUpdateSensor({
            State: "Uttar Pradesh",
            City: "Noida",
            PinCode: "110438",
            Landmark: "Noida sector 3"
        });

        console.log('Sensor IDs:', ids);

        ids.forEach(startUpdatingSensorData);
        
        // res.status(200).json({ message: 'Sensor simulation started', sensorIds: ids });
    } 
    catch (error) {
        console.error('Error simulating sensor:', error.message);
        // res.status(500).json({ error: 'Failed to simulate sensor' });
    }
};



export { simulateSensor };
