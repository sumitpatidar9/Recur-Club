
import React from 'react';
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
}

from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'mdbreact/dist/css/mdb.css';



import './SignUp.css';
import { toast } from 'react-hot-toast';
import {useAuth} from '../Auth/AuthContext';



import { useState, useEffect } from 'react';

const Signin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const auth = useAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await auth.signin(email, password);
    }

    catch (error) {
        console.log('Error login');
    }
}



useEffect(() => {
    if (auth.isLoggedIn && auth.user) {
        return navigate("/home");
    }
}, [auth]);



  return (
    <div className='main-container'>
      <MDBContainer fluid className='bg-dark outer'>

        <MDBRow className='d-flex justify-content-center align-items-center h-100 inner'>
          <MDBCol>

            <MDBCard className='my-4 inner-card'>

              <MDBRow className='g-0'>

                <MDBCol md='6' className="d-none d-md-block">
                  <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid />
                </MDBCol>

                <MDBCol md='6'>

                  <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                    <h3 className="mb-5 text-uppercase fw-bold">Sign In</h3>


                    <div className='space-maker'>
                        
                    </div>

                    <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form3' type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

                    <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    

                    <div className="d-flex justify-content-end pt-3">
                      <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                      <MDBBtn className='ms-2' color='warning' size='lg' onClick={handleSubmit}>Submit form</MDBBtn>
                    </div>

                  </MDBCardBody>

                </MDBCol>
              </MDBRow>

            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div>

  )
}


export { Signin }