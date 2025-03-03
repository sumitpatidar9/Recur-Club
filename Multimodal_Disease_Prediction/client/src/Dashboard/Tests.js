import React, { useEffect, useState } from 'react';
import axios from 'axios';


import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

import { useNavigate } from 'react-router-dom';


const Tests = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();


  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get_all_tests', { withCredentials: true });
        setTests(response.data.tests);
      } 

      catch (error) {
        setError('Failed to fetch tests');
        console.error('Error fetching tests:', error);
      } 
      
      finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);


  
 
  console.log(tests);

  

  
  const sendToReport = (data) => {
    navigate('/report', { state: { data } });
}

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;




  return (
    <>

    <div className='main-container-tests'>
      {tests.map(test => (
       <div className='test-cards-tests' key={test._id}>
       <MDBCard className='test-card-tests' style = {{overflow: 'hidden'}}>
        <MDBCardImage src={`http://localhost:5000/${test.imageUrl}`}  position='top' alt='...' 
        style={{ width: '35vw', height: '40vh', objectFit: 'cover'}}/>
          <MDBCardBody>
            <MDBCardTitle>{test.testName}</MDBCardTitle>
            <MDBCardText>
              {test.diseaseType}
            </MDBCardText>
          <MDBBtn onClick={() => sendToReport(test)}>Get Report</MDBBtn>
         </MDBCardBody>
      </MDBCard>
      </div>
      ))}
    </div>
    </>

  );
};

export {Tests};
