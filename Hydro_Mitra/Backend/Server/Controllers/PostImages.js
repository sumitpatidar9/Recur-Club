
import { Location } from "../Models/Location.js";
import { Staff } from "../Models/Staff.js";
import path from "path";
import FormData from 'form-data';
import fs from 'fs';
import axios from "axios";
import multer from 'multer';




// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); 
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname); 
//   },
// });
// const upload = multer({ storage: storage }).single('file');




const Microplastics = async (req, res) => {
  
  try {
    const location_id  = req.body.location; 
    console.log(location_id);
    const location = await Location.findOne({ _id: location_id });
    if (!location) {
        return res.status(404).json({ message: "Location not found." });
    }
    
    const email = res.locals.jwtData.email;
    console.log(email);
    const staff = await Staff.findOne({ Email: email });
    if (!staff) {
          return res.status(404).json({ message: "Staff not found." });
      }


    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');
    console.log(imagePath);

    const formData = new FormData();
    formData.append('file', fs.createReadStream(imagePath));

    const flaskResponse = await axios.post('http://localhost:5001/microplastics', formData, {
      headers: {
        ...formData.getHeaders(), 
      },
    });


    const processedImagePath = flaskResponse.data.processedImagePath;
    const finalImagePath = path.join('uploads', `processed_${req.file.filename}`).replace(/\\/g, '/');
    const finalImagePathnew = `${finalImagePath}`

    const newTest = {
            TestName: "Microplastics",
            Params: [
                { name: 'input_image', value: imagePath },
                { name: 'output_image', value: finalImagePathnew }
            ],
            Location: location._id,
    };


    staff.Tests.push(newTest);
    await staff.save();
    return res.status(200).json({ message: 'Test added successfully!' });
} 

  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};







const Algae = async (req, res) => {
  
  try {
    const location_id  = req.body.location; 
    console.log(location_id);
    const location = await Location.findOne({ _id: location_id });
    if (!location) {
        return res.status(404).json({ message: "Location not found." });
    }
    
    const email = res.locals.jwtData.email;
    console.log(email);
    const staff = await Staff.findOne({ Email: email });
    if (!staff) {
          return res.status(404).json({ message: "Staff not found." });
      }


    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');
    console.log(imagePath);

    const formData = new FormData();
    formData.append('file', fs.createReadStream(imagePath));

    const flaskResponse = await axios.post('http://localhost:5001/algae', formData, {
      headers: {
        ...formData.getHeaders(), 
      },
    });


    const processedImagePath = flaskResponse.data.processedImagePath;
    const finalImagePath = path.join('uploads', `processed_${req.file.filename}`).replace(/\\/g, '/');
    const finalImagePathnew = `${finalImagePath}`
    

    const newTest = {
            TestName: "Algae",
            Params: [
                { name: 'input_image', value: imagePath },
                { name: 'output_image', value: finalImagePathnew }
            ],
            Location: location._id,
    };


    staff.Tests.push(newTest);
    await staff.save();
    return res.status(200).json({ message: 'Test added successfully!' });
} 

  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};









const Polythene = async (req, res) => {
  
  try {
    const location_id  = req.body.location; 
    console.log(location_id);
    const location = await Location.findOne({ _id: location_id });
    if (!location) {
        return res.status(404).json({ message: "Location not found." });
    }
    
    const email = res.locals.jwtData.email;
    console.log(email);
    const staff = await Staff.findOne({ Email: email });
    if (!staff) {
          return res.status(404).json({ message: "Staff not found." });
      }


    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');
    console.log(imagePath);

    const formData = new FormData();
    formData.append('file', fs.createReadStream(imagePath));

    const flaskResponse = await axios.post('http://localhost:5001/polythene', formData, {
      headers: {
        ...formData.getHeaders(), 
      },
    });


    const processedImagePath = flaskResponse.data.processedImagePath;
    const finalImagePath = path.join('uploads', `processed_${req.file.filename}`).replace(/\\/g, '/');
    const finalImagePathnew = `${finalImagePath}`
    

    const newTest = {
            TestName: "Polythene",
            Params: [
                { name: 'input_image', value: imagePath },
                { name: 'output_image', value: finalImagePathnew }
            ],
            Location: location._id,
    };


    staff.Tests.push(newTest);
    await staff.save();
    return res.status(200).json({ message: 'Test added successfully!' });
} 

  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};











const Species = async (req, res) => {
  
  try {
    const location_id  = req.body.location; 
    console.log(location_id);
    const location = await Location.findOne({ _id: location_id });
    if (!location) {
        return res.status(404).json({ message: "Location not found." });
    }
    
    const email = res.locals.jwtData.email;
    console.log(email);
    const staff = await Staff.findOne({ Email: email });
    if (!staff) {
          return res.status(404).json({ message: "Staff not found." });
      }


    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');
    console.log(imagePath);

    const formData = new FormData();
    formData.append('file', fs.createReadStream(imagePath));

    const flaskResponse = await axios.post('http://localhost:5001/species', formData, {
      headers: {
        ...formData.getHeaders(), 
      },
    });


    const processedImagePath = flaskResponse.data.processedImagePath;
    const finalImagePath = path.join('uploads', `processed_${req.file.filename}`).replace(/\\/g, '/');
    const finalImagePathnew = `${finalImagePath}`
    

    const newTest = {
            TestName: "Species",
            Params: [
                { name: 'input_image', value: imagePath },
                { name: 'output_image', value: finalImagePathnew }
            ],
            Location: location._id,
    };


    staff.Tests.push(newTest);
    await staff.save();
    return res.status(200).json({ message: 'Test added successfully!' });
} 

  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};





export {Microplastics, Algae, Polythene, Species}


