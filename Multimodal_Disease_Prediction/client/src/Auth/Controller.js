

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Signin } from '../UserAuth/SignIn';
import {Signup} from '../UserAuth/SignUp';
import { Dashboard } from '../Dashboard/Dashboard';
import { Home } from '../Home/Home';
import { Navabar } from '../Navbar/Navbar';


import { Tumor } from '../Home/Tests/Tumor.js';
import { Report } from '../Home/Tests/Report.js';
import { Pneumonia } from '../Home/Tests/pneumonia.js';
import {Alzheimer} from '../Home/Tests/alzheimer.js';
import {Covid} from '../Home/Tests/covid.js';
import {TumorSegmentation} from '../Home/Tests/tumorSegmentation.js';
import {HeartDisease} from '../Home/Tests/heartDisease.js';


const Controller = () => {
    const auth = useAuth();
    return (
        <>  
            
            <BrowserRouter>
            <Navabar/>
                <Routes>
                
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path= "/home" element={<Home/>} />
                    

                    <Route path = "/tumor" element = {<Tumor/>} />
                    <Route path = "/report" element = {<Report/>}/>
                    <Route path='/pneumonia' element = {<Pneumonia/>}/>
                    <Route path = '/alzheimer' element = {<Alzheimer/>} />
                    <Route path = '/covid' element = {<Covid/>} />
                    <Route path = '/tumor_segmentation' element = {<TumorSegmentation/>} />
                    <Route path = '/heart' element = {<HeartDisease/>} />
                    


                    {auth.isLoggedIn && auth.user && (
                        <>
                        <Route path= "/dashboard" element={<Dashboard/>} />
                        </>
                    )}

                </Routes>
            </BrowserRouter>
        </>
    )
}


export { Controller };