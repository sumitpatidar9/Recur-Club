import { Router } from "express";
import { getAllSensorData, getSensorData } from "../Controllers/getSensors.js";
import { verifyToken } from "../Controllers/VerifyToken.js";
import { getAllLocation } from "../Controllers/getAllLocation.js";
//import { postData } from "../Controllers/ESP.js";



const espRouter = Router(); 
espRouter.get('/esp/get_sensor_data/:range', getSensorData);
espRouter.get('/esp/getAll', getAllSensorData);
espRouter.get('/get_all_location', getAllLocation);

//espRouter.post('/esp/post', postData);





export { espRouter }; 

