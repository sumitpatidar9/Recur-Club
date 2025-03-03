

import { Router } from "express";
import {Signup, Login, sendStaff, Logout} from "../Controllers/StaffAuth.js";
import { verifyToken } from "../Controllers/VerifyToken.js";
import { MembraneFiltrationTest, SpectrophotometryTest, MultipleTubeFermentationTest, XRayFluorescenceSpectroscopy, SGasChromatographyMassSpectrometryTest, InductivelyCoupledPlasmaMassSpectrometry} from "../Controllers/StaffTest.js";




import path from 'path';
import multer from 'multer';
import { Microplastics, Algae, Polythene, Species } from "../Controllers/PostImages.js";
import { getAllTests } from "../Controllers/getImages.js";


const staffRouter = Router();

staffRouter.post("/staff/signup", Signup);
staffRouter.post("/staff/login", Login);
staffRouter.get("/staff/getUser", verifyToken, sendStaff);
staffRouter.get('/staff/getOut', verifyToken, Logout);



staffRouter.post("/staff/membraneFiltration", verifyToken, MembraneFiltrationTest);
staffRouter.post("/staff/spectro_photometry",verifyToken,SpectrophotometryTest);
staffRouter.post("/staff/multiple_tube_fermentaion",verifyToken, MultipleTubeFermentationTest);
staffRouter.post("/staff/x_ray_fluorescence",verifyToken, XRayFluorescenceSpectroscopy);
staffRouter.post("/staff/chromatography",verifyToken, SGasChromatographyMassSpectrometryTest);
staffRouter.post("/staff/plasma_mass",verifyToken, InductivelyCoupledPlasmaMassSpectrometry);







const storage = multer.diskStorage({
  
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },

    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); 
    },
  });

  
const upload = multer({ storage: storage });
staffRouter.post("/staff/microPlastics", upload.single('image'), verifyToken, Microplastics);
staffRouter.post("/staff/algae", upload.single('image'), verifyToken, Algae);
staffRouter.post("/staff/polythene", upload.single('image'), verifyToken, Polythene);
staffRouter.post("/staff/species", upload.single('image'), verifyToken, Species);



staffRouter.get('/staff/getAllTests',getAllTests);

export {staffRouter};