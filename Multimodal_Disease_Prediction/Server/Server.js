


import express from 'express';
import env from 'dotenv';
import { Connect } from './Utils/Connection.js';
import { router } from './Routes/Routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
env.config();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));
app.use(express.json());

const cookiesecret = process.env.COOKIE_SECRET;
app.use(cookieParser(cookiesecret));


const PORT = process.env.PORT || 5000;
const URL =  process.env.MONGO_URL;


Connect(URL);

app.use('/', router);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, (req, res)=>{
    console.log(`Server is running at ${PORT}`);
})