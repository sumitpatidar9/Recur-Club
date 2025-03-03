

import { Staff } from "../Models/Staff.js";
import { Location } from "../Models/Location.js";
import {ObjectId } from 'mongodb';




const MembraneFiltrationTest = async (req, res) => {

    const { location_id, coliformBacteria, escherichiaColi, enterococci, fecalColiform } = req.body; 
    console.log(location_id);
    console.log(coliformBacteria, escherichiaColi, enterococci, fecalColiform);
    const email = res.locals.jwtData.email;

    try {
        const location = await Location.findOne({ _id: location_id });
        if (!location) {
            return res.status(404).json({ message: "Location not found." });
        }

        const staff = await Staff.findOne({ Email: email });
        if (!staff) {
            return res.status(404).json({ message: "Staff not found." });
        }

        const newTest = {
            TestName: "MembraneFiltrationTest",
            Params: [
                { name: 'coliformBacteria', value: coliformBacteria },
                { name: 'escherichiaColi', value: escherichiaColi },
                { name: 'enterococci', value: enterococci },
                { name: 'fecalColiform', value: fecalColiform }
            ],
            Location: location._id,
        };

        staff.Tests2.push(newTest);
        await staff.save();
        return res.status(200).json({ message: 'Test added successfully!' });
    } 
    
    catch (error) {
        console.error("Error adding test data:", error);
        res.status(500).json({ message: "Error adding test data", error: error.message });
    }
};










const MultipleTubeFermentationTest = async (req, res) => {
    const { location_id, totalColiform, fecalColiform, escherichiaColi } = req.body;

    try {
        const location = await Location.findOne({ _id: location_id });
        if (!location) {
            return res.status(404).json({ message: "Location not found." });
        }

        const staff = await Staff.findOne({});
        if (!staff) {
            return res.status(404).json({ message: "Staff not found." });
        }

        const newTest = {
            TestName: "MultipleTubeFermentationTest",
            Params: [
                { name: 'totalColiform', value: totalColiform },
                { name: 'fecalColiform', value: fecalColiform },
                { name: 'escherichiaColi', value: escherichiaColi }
            ],
            Location: location._id,
        };

        staff.Tests.push(newTest);
        await staff.save();
        return res.status(200).json({ message: 'Test added successfully!' });
    } 
    catch (error) {
        console.error("Error retrieving sensor data:", error);
        res.status(500).json({ message: "Error retrieving sensor data", error: error.message });
    }
};








const SGasChromatographyMassSpectrometryTest = async(req, res)=>{

   const {location_id, retentionTime, peakAreaHeight, massToChargeRatio, relativeAbundance, lodLoq} = req.body;
    console.log(location_id);

    try {
        const location = await Location.findOne({ _id: new ObjectId(location_id) });
        console.log(location);
        if (!location) {
            return res.status(404).json({ message: "Location not found." });
        }

        const staff = await Staff.findOne({});

        const newTest = {
            Param1: "param1",
            Param2: "param2",
            Param3: "param3",
            Param4: "param4",
            Param5: "param5",
            Location: location._id, 
        };

        staff.Tests.push(newTest);
        await staff.save();
        return res.status(200).json({ message: 'Tests added successfully!' });
    } 
    
    catch (error) {
        console.error("Error retrieving sensor data:", error);
        res.status(500).json({ message: "Error retrieving sensor data", error: error.message });
    }
}









const InductivelyCoupledPlasmaMassSpectrometry = async(req, res)=>{
    const {location_id, elementConcentration, isotopicRatios, internalStandardRecovery, signalIntensity, responseFactor} = req.body;
    console.log(location_id);

    try {
        const location = await Location.findOne({ _id: new ObjectId(location_id) });
        console.log(location);
        if (!location) {
            return res.status(404).json({ message: "Location not found." });
        }

        const staff = await Staff.findOne({});

        const newTest = {
            Param1: "param1",
            Param2: "param2",
            Param3: "param3",
            Param4: "param4",
            Param5: "param5",
            Location: location._id, 
        };

        staff.Tests.push(newTest);
        await staff.save();
        return res.status(200).json({ message: 'Tests added successfully!' });
    } 
    
    catch (error) {
        console.error("Error retrieving sensor data:", error);
        res.status(500).json({ message: "Error retrieving sensor data", error: error.message });
    }
}







const SpectrophotometryTest = async (req, res) => {
    const { location_id, absorbance, transmittance, wavelength, concentration, calibrationCurve, pathLength, molarAbsorptivity } = req.body;

    try {
        const location = await Location.findOne({ _id: location_id });
        if (!location) {
            return res.status(404).json({ message: "Location not found." });
        }

        const staff = await Staff.findOne({});
        if (!staff) {
            return res.status(404).json({ message: "Staff not found." });
        }

        const newTest = {
            TestName: "SpectrophotometryTest",
            Params: [
                { name: 'absorbance', value: absorbance },
                { name: 'transmittance', value: transmittance },
                { name: 'wavelength', value: wavelength },
                { name: 'concentration', value: concentration },
                { name: 'calibrationCurve', value: calibrationCurve },
                { name: 'pathLength', value: pathLength },
                { name: 'molarAbsorptivity', value: molarAbsorptivity }
            ],
            Location: location._id,
        };

        staff.Tests.push(newTest);
        await staff.save();
        return res.status(200).json({ message: 'Test added successfully!' });
    } 
    catch (error) {
        console.error("Error retrieving sensor data:", error);
        res.status(500).json({ message: "Error retrieving sensor data", error: error.message });
    }
};








const XRayFluorescenceSpectroscopy = async(req, res)=>{
    const {location_id, elementalComposition, fluorescenceIntensity, detectionLimits, energyXrays, countRate, peakAreaHeight, matrixEffects} = req.body;
    
    console.log(location_id);

    try {
        const location = await Location.findOne({ _id: new ObjectId(location_id) });
        console.log(location);
        if (!location) {
            return res.status(404).json({ message: "Location not found." });
        }

        const staff = await Staff.findOne({});

        const newTest = {
            Param1: "param1",
            Param2: "param2",
            Param3: "param3",
            Param4: "param4",
            Param5: "param5",
            Location: location._id, 
        };

        staff.Tests.push(newTest);
        await staff.save();
        return res.status(200).json({ message: 'Tests added successfully!' });
    } 
    
    catch (error) {
        console.error("Error retrieving sensor data:", error);
        res.status(500).json({ message: "Error retrieving sensor data", error: error.message });
    }
}
















export {MembraneFiltrationTest, SpectrophotometryTest, MultipleTubeFermentationTest, XRayFluorescenceSpectroscopy, SGasChromatographyMassSpectrometryTest, InductivelyCoupledPlasmaMassSpectrometry};