

import { Router } from "express";
import { Home, Signin, Signup, verifyToken, sendUser } from "../Controllers/User.js";





import path from 'path';
import multer from 'multer';
import {tumor, pneumonia, alzheimer, covid, tumorSegmentation, heartDisease } from "../Controllers/Tests.js";
import { getAllTests } from "../Controllers/getTests.js";


const router = Router();




router.get('/home', Home);
router.post('/signup', Signup);
router.post('/signin', Signin);
router.get('/auth', verifyToken, sendUser);









const storage = multer.diskStorage({
  
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },

    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); 
    },
  });
  

  const upload = multer({ storage: storage });
  


  router.post("/tumor", upload.single('image'), verifyToken, tumor);
  router.post("/pneumonia", upload.single('image'), verifyToken, pneumonia);
  router.post("/alzheimer", upload.single('image'), verifyToken, alzheimer);
  router.post("/covid", upload.single('image'), verifyToken, covid);
  router.post(
    "/tumor_segmentation",
    upload.single('image'),
    verifyToken,
    tumorSegmentation
  );
  router.post("/heart", upload.single('image'), verifyToken, heartDisease);


  router.get("/get_all_tests", verifyToken, getAllTests);

export {router}