
import './Dashboard.css';
import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';


import { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProfileIcon from './images/Profile.png';
import ProfilePic from './images/profile-user.svg';


import { Profile } from './Profile';
import { Tests } from './Tests';



const Dashboard = () => {


    
    const [activeComponent, setActiveComponent] = useState('Profile');

    const renderComponent = () => {
        switch (activeComponent) {
          case 'Profile':
            return <Profile/>;
          case 'Tests':
            return <Tests/>;
          default:
            return <Profile />;
        }
      };


    return (

        <>
            <div className='main-container'>

                <div className='left-bar'>
                    <div className='left-bar-profile'>
                        <img src = {ProfilePic}/>

                    </div>
                    <div className='left-bar-heading'>
                        <h2>Dashboard</h2>
                    </div>


                    <div className='left-bar-button'>
                        <button className={`left-bar-button1 ${activeComponent === 'Profile' ? 'active' : ''}`} onClick={() => {setActiveComponent('Profile')}}>
                            <img src={ProfileIcon} className='left-bar-button1-icon'></img>
                            Profile
                        </button>

                        <button className={`left-bar-button2 ${activeComponent === 'Tests' ? 'active' : ''}`} onClick={() => {setActiveComponent('Tests')}}>
                            <img src={ProfileIcon} className='left-bar-button1-icon'></img>
                            Tests
                        </button>
                    </div>
                </div>

                    {renderComponent()}
                </div>
        </>
    )
}

export { Dashboard }