


import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import { useState } from 'react';


const Navabar = ()=>{
     const navigate = useNavigate();
     const auth = useAuth();


     //auth.isLoggedIn && auth.user

     const handleSignin  = ()=>{
          navigate('/signin');
     }

     const handleSignup = ()=>{
          navigate('/signup');
     }

     const handleHome = ()=>{
          navigate('/home');
     }

     const handleAboutus = ()=>{
          navigate('/about_us');
     }

     const handleContactus = ()=>{
          navigate('/contact_us');
     }

     const handleDashboard = () =>{
          navigate('/dashboard');
     }

     const handleLogout = () =>{
          auth.logout();
     }

     console.log(auth.user)

     

     return(
     <>
     <div className='main-container-nav'>
        <div className='name'>
                Asdf &
        </div>
       <div className = 'Items'>
           
            <button className='item' onClick={handleHome}>Home</button>
            <button className='item' onClick={handleContactus}>Contact Us</button>
            <button className='item' onClick={handleAboutus}>About Us</button>
            <button className='item' onClick={handleDashboard}>Dashboard</button>

            {auth.isLoggedIn ? ( <button className='item' onClick={handleLogout}>Logout</button>) : (<>
             <button className='item' onClick={handleSignin}>Singin</button>
             <button className='item'onClick={handleSignup}>Signup</button>
             <button className='item'>{auth.user.name}</button> </>)}
            
       </div>
     </div>

     </>
     
    )
}


export {Navabar}