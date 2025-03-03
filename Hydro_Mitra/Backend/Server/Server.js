import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import http from 'http'; 
import cookieParser from 'cookie-parser';
import { Connect } from './Utils/Connection.js';
import { staffRouter } from './Routes/StaffRoutes.js';
import { adminRouter } from './Routes/AdminRoutes.js';
import { espRouter } from './Routes/EspRoutes.js';
import { initializeVideoServer } from './SatelliteView/Satellite.js';  
import {simulateSensor } from './Controllers/Sensors.js'
import path from 'path';
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
env.config();

app.use(cors({
    origin: true, 
    credentials: true,
}));
app.use(express.json());

const cookiesecret = process.env.COOKIE_SECRET;
app.use(cookieParser(cookiesecret));

const url = process.env.MONGOOSE_URL;
Connect(url);


app.use('/', staffRouter);
app.use('/', adminRouter);
app.use('/', espRouter);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const port = process.env.PORT || 5000;


const server = http.createServer(app);
initializeVideoServer(server);

// simulateSensor();













app.post('/esp/esp_post', (req, res) => {
    // Extract sensor data from the request body
    const { distance, airQuality, temperature } = req.body;
  
    // Print the readings on the server console
    console.log('Received sensor data:');
    console.log(`Distance: ${distance} cm`);
    console.log(`Air Quality: ${airQuality}`);
    console.log(`Temperature: ${temperature} °C`);
  
    // Respond back to the ESP8266 with a success message
    res.status(200).send('Data received and printed to console!');
  });










server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
