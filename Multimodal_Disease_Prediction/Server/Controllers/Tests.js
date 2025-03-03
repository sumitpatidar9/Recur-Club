import { User } from "../Models/UserModel.js";



import path from "path";
import FormData from 'form-data';
import fs from 'fs';
import axios from "axios";




function checkCondition(condition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (condition) {
          resolve("Yes");
        } else {
          reject("No");
        }
      }, 2000); 
    });
}





const tumor = async (req, res) => {
  
  try {
    const email = res.locals.jwtData.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');


    const formData = new FormData();
    formData.append('file', fs.createReadStream(imagePath));

    
    const flaskResponse = await axios.post('http://127.0.0.1:8080/tumor', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });


    var result = flaskResponse;
    console.log( result.data.result);


    const newUserTest = {
      Test_Name: "Tumor",
      imageUrl: imagePath,
      Test_Result: result.data.result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    await res.send({
      message: "Image uploaded and path stored successfully",
      Test_Name: "Tumor",
      imagePath: imagePath,
      Test_Result: result.data.result,
    });
  } 
  
  
  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};






const pneumonia = async (req, res) => {
  try {
    const email = res.locals.jwtData.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');
    const formData = new FormData();
    formData.append('file', fs.createReadStream(imagePath));

    
    const flaskResponse = await axios.post('http://127.0.0.1:8080/pneumonia', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    var result = flaskResponse;
    console.log( result.data.result);


    const newUserTest = {
      Test_Name: "Pneumonia",
      imageUrl: imagePath,
      Test_Result: result.data.result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    await res.send({
      message: "Image uploaded and path stored successfully",
      Test_Name: "Pneumonia",
      imagePath: imagePath,
      Test_Result: result.data.result,
    });
  } 
  
  
  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};






const alzheimer = async (req, res) => {
  
  try {
    const email = res.locals.jwtData.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');

    const formData = new FormData();
    formData.append('file', fs.createReadStream(imagePath));

    
    const flaskResponse = await axios.post('http://127.0.0.1:8080/alzheimer', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    var result = flaskResponse;
    console.log( result.data.result);


    const newUserTest = {
      Test_Name: "Alzheimer",
      imageUrl: imagePath,
      Test_Result: result.data.result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    await res.send({
      message: "Image uploaded and path stored successfully",
      Test_Name: "Alzheimer",
      imagePath: imagePath,
      Test_Result: result.data.result,
    });
  } 
  
  
  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};







const tumorSegmentation = async (req, res) => {
  try {
    const email = res.locals.jwtData.email;
    const user = await User.findOne({ email });

    if(!user){
      return res.status(404).send({
        message: "User not found",
      });
    }

    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');
    const formData = new FormData();
    formData.append('file', fs.createReadStream(imagePath));

    const flaskResponse = await axios.post( 'http://127.0.0.1:8080/tumor_segmentation', formData, {
      headers: {
        ...formData.getHeaders(),
      },
      responseType: 'arraybuffer', 
    });


    if (flaskResponse.status !== 200) {
      throw new Error("Failed to process the image on Flask server");
    }

    const resultData = flaskResponse.data;
    const testResult = JSON.parse(flaskResponse.headers['test-result']); 
    const imageName = `result_${Date.now()}.jpg`; 
    const resultImagePath = path.join("uploads", imageName);

    
    fs.writeFileSync(resultImagePath, resultData);

    const newUserTest = {
      Test_Name: "Tumor Segmentation",
      imageUrl: imagePath,
      resultImageUrl: resultImagePath.replace(/\\/g, '/'),
      testResult: 'Segmentation Successful',
    };

    user.Tests.push(newUserTest);
    await user.save();

    res.send({
      message: "Image uploaded, processed, and results stored successfully",
      Test_Name: "Tumor Segmentation",
      imagePath: imagePath,
      resultImageUrl: resultImagePath.replace(/\\/g, '/'),
      Test_Result: testResult,
    });
  }

  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};







const covid = async (req, res) => {
  try {
    const email = res.locals.jwtData.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');
    //Flask promise
    const result = await checkCondition(true);

    const newUserTest = {
      testName: "Covid",
      imageUrl: imagePath,
      diseaseType: result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    await res.send({
      message: "Image uploaded and path stored successfully",
      testName: "Covid",
      imagePath: imagePath,
      diseaseType: result,
    });
  } 
  
  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};







const heartDisease = async (req, res) => {
  try {
    const email = res.locals.jwtData.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');

    //Flask promise
    const result = await checkCondition(true);

    const newUserTest = {
      testName: "Heart Disease",
      imageUrl: imagePath,
      diseaseType: result,
    };

    user.Tests.push(newUserTest);

    await user.save();
    await res.send({
      message: "Image uploaded and path stored successfully",
      testName: "Heart Disease",
      imagePath: imagePath,
      diseaseType: result,
    });

  } 

  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};









export { tumor, pneumonia, alzheimer, covid, tumorSegmentation, heartDisease };
