

import { Staff } from "../Models/Staff.js";




const getAllTests = async (req, res) => {

    try {
      const user = await Staff.findOne({});
   
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