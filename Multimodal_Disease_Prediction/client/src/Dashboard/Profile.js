

import { useState, useEffect } from 'react';
import { checkAuthStatus } from '../Auth/HandleAPI';



const Profile = () => {


    const [name, setName] = useState('user');
    const [lastname, setLastname] = useState('user');
    const [username, setUsername] = useState('user');
    const [email, setEmail] = useState('user');
    const [password, setPassword] = useState('user');
    const [gender, setGender] = useState('user');
    const [dob, setDob] = useState('user');
    const [address, setAddress] = useState('user');
    const [contact, setContact] = useState('user');

    

    useEffect(() => {
        const checkStatus = async () => {

            try {
                const data = await checkAuthStatus();
                if (data) {
                    console.log(data.user.name);
                    setName(data.user.name);
                    setLastname(data.user.lastname);
                    setUsername(data.user.username);
                    setEmail(data.user.email);
                    setPassword(data.user.password);
                    setGender(data.user.gender);
                    setDob(data.user.dob);
                    setAddress(data.user.address);
                    setContact(data.user.contact);
                }
            }

            catch (error) {
                console.log('Error fetching user dashboard');
            }
        }
        
        checkStatus();
    }, []);



    return (
        
        <div className='right-bar'>
            <div className='card-container'>

                <div className='card-container-left'>
                    <div className='card-name'>
                        <div className='card-name-upper'>
                            Your Profile
                        </div>
                        <div className='card-name-lower'>
                            <b><span className='left-para'>Name :</span> {`${name} ${lastname}`}</b>
                            <br />
                            <b><sapn className='left-para'>Username :</sapn> {username}</b>
                        </div>
                    </div>



                    <div className='card-email'>
                        <div className='card-name-upper'>
                            Email & Phone
                        </div>
                        <div className='card-name-lower'>
                            <b><span className='left-para'>Email :</span> {email}</b>
                            <br />
                            <b><sapn className='left-para'>Phone :</sapn> {contact}</b>
                        </div>
                    </div>



                    <div className='card-gender'>
                        <div className='card-name-upper'>
                            Gender & Dob
                        </div>
                        <div className='card-name-lower'>
                            <b><span className='left-para'>Gender :</span> {gender}</b>
                            <br />
                            <b><sapn className='left-para'>Dob :</sapn>{dob}</b>
                        </div>
                    </div>
                </div>




                <div className='card-container-right'>
                    <div className='card-address'>
                        <div className='card-name-upper'>
                            Address
                        </div>
                        <div className='card-name-lower'>
                            <b><span className='left-para'>Address :</span> {address}</b>
                            <br />
                        </div>
                    </div>


                    <div className='edit-profile'>
                        <div className='card-edit-upper'>
                            Edit Profile
                        </div>
                        <div className='card-edit-lower'>
                            <div>

                            </div>
                            <button className='edit-profile-btn'>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    )
}


export{Profile}