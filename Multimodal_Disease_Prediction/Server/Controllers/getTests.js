import { User } from "../Models/UserModel.js";



const getAllTests = async (req, res) => {

  try {
    const email = res.locals.jwtData.email;
    const user = await User.findOne({ email });

    
    if (user) {
      return res.status(200).json({ message: "Authenticated", tests: user.Tests });
      
    } 
    
    else {
      return res.status(404).json({ message: "User not found" });
    }
  } 
  
  catch (error) {
    console.error('Error in fetching tests:', error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};



export {getAllTests};














// const getTumorTest = async (req, res) => {
//   try {
//     const email = res.locals.jwtData.email;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).send({
//         message: "User not found",
//       });
//     }

//     const test = user.Tests.find((test) => test.testName === "tumor");

//     if (!test) {
//       return res.status(404).send({
//         message: "Tumor test not found",
//       });
//     }

//     res.send(test);
//   } 
  
  
//   catch (error) {
//     console.error("Error retrieving tumor test:", error);
//     res.status(500).send({
//       message: "Error retrieving tumor test",
//     });
//   }
// };







// const getPneumoniaTest = async (req, res) => {
//   try {
//     const email = res.locals.jwtData.email;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).send({
//         message: "User not found",
//       });
//     }

//     const test = user.Tests.find((test) => test.testName === "pneumonia");

//     if (!test) {
//       return res.status(404).send({
//         message: "Pneumonia test not found",
//       });
//     }

//     res.send(test);
//   }
  
  
//   catch (error) {
//     console.error("Error retrieving pneumonia test:", error);
//     res.status(500).send({
//       message: "Error retrieving pneumonia test",
//     });
//   }
// };

















// const getAlzheimerTest = async (req, res) => {
//   try {
//     const email = res.locals.jwtData.email;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).send({
//         message: "User not found",
//       });
//     }

//     const test = user.Tests.find((test) => test.testName === "alzheimer");

//     if (!test) {
//       return res.status(404).send({
//         message: "Alzheimer test not found",
//       });
//     }

//     res.send(test);
//   } 
  
//   catch (error) {
//     console.error("Error retrieving alzheimer test:", error);
//     res.status(500).send({
//       message: "Error retrieving alzheimer test",
//     });
//   }
// };











// const getCovidTest = async (req, res) => {
//   try {
//     const email = res.locals.jwtData.email;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).send({
//         message: "User not found",
//       });
//     }

//     const test = user.Tests.find((test) => test.testName === "covid");

//     if (!test) {
//       return res.status(404).send({
//         message: "Covid test not found",
//       });
//     }

//     res.send(test);
//   } 
  
//   catch (error) {
//     console.error("Error retrieving covid test:", error);
//     res.status(500).send({
//       message: "Error retrieving covid test",
//     });
//   }
// };














// const getTumorSegmentationTest = async (req, res) => {
//   try {
//     const email = res.locals.jwtData.email;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).send({
//         message: "User not found",
//       });
//     }

//     const test = user.Tests.find((test) => test.testName === "tumorSegmentation");

//     if (!test) {
//       return res.status(404).send({
//         message: "Tumor Segmentation test not found",
//       });
//     }

//     res.send(test);
//   } 
//   catch (error) {
//     console.error("Error retrieving tumor segmentation test:", error);
//     res.status(500).send({
//       message: "Error retrieving tumor segmentation test",
//     });
//   }
// };










// const getHeartDiseaseTest = async (req, res) => {
//   try {
//     const email = res.locals.jwtData.email;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).send({
//         message: "User not found",
//       });
//     }

//     const test = user.Tests.find((test) => test.testName === "heartDisease");

//     if (!test) {
//       return res.status(404).send({
//         message: "Heart Disease test not found",
//       });
//     }

//     res.send(test);
//   } 
  
//   catch (error) {
//     console.error("Error retrieving heart disease test:", error);
//     res.status(500).send({
//       message: "Error retrieving heart disease test",
//     });
//   }
// };



// export {
//   getTumorTest,
//   getPneumoniaTest,
//   getAlzheimerTest,
//   getCovidTest,
//   getTumorSegmentationTest,
//   getHeartDiseaseTest,
// };
