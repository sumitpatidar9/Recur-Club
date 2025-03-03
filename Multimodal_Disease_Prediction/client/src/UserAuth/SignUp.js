
import React from 'react';
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
import { useNavigate } from 'react-router-dom';


const Signup = () => {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  
  const auth = useAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await auth.signup(name, lastname, username, email, password, gender, dob, address, contact);
    }

    catch (error) {
        console.log('Error signup');
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

            <MDBCard className='my-4 inner-card' >

              <MDBRow className='g-0'>

                <MDBCol md='6' className="d-none d-md-block">
                  <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid />
                </MDBCol>

                <MDBCol md='6'>

                  <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                    <h3 className="mb-5 text-uppercase fw-bold">CREATE AN ACCOUNT</h3>

                    <MDBRow>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' value={name} onChange={(e)=>setName(e.target.value)} required/>
                      </MDBCol>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                      </MDBCol>
                      

                    </MDBRow>

                    <MDBInput wrapperClass='mb-4' label='Username' size='lg' id='form3' type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form3' type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

                    <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Confirm Password' size='lg' id='form3' type='text' />

                    <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                      <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                      <MDBRadio name='inlineRadio' id='inlineRadio1' value='female' label='Female' inline onChange={(e)=>setGender(e.target.value)} />
                      <MDBRadio name='inlineRadio' id='inlineRadio2' value='male' label='Male' inline onChange={(e)=>setGender(e.target.value)} />
                      <MDBRadio name='inlineRadio' id='inlineRadio3' value='other' label='Other' inline onChange={(e)=>setGender(e.target.value)} />
                    </div>


                    <MDBInput wrapperClass='mb-4' label='DOB' size='lg' id='form4' type='text' value={dob} onChange={(e)=>setDob(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='form5' type='text' value={address} onChange={(e)=>{ setAddress(e.target.value)}} />
                    <MDBInput wrapperClass='mb-4' label='Contact' size='lg' id='form6' type='text' value={contact} onChange={(e) => setContact(e.target.value)}/>

                    <div className="d-flex justify-content-end pt-3">
                      <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                      <MDBBtn className='ms-2' color='warning' size='lg' onClick={handleSubmit}>Sign Up</MDBBtn>
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


export { Signup }