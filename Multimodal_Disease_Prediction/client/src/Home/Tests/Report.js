import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { checkAuthStatus } from '../../Auth/HandleAPI';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Report = () => {
    const [userData, setUserData] = useState({
        name: 'user',
        lastname: 'user',
        username: 'user',
        email: 'user',
        password: 'user',
        gender: 'user',
        dob: 'user',
        address: 'user',
        contact: 'user',
    });

    const location = useLocation();
    const additionalData = location.state?.data;

    const reportRef = useRef();

    useEffect(() => {
        const checkStatus = async () => {
            try {
                const data = await checkAuthStatus();
                if (data) {
                    setUserData({
                        name: data.user.name,
                        lastname: data.user.lastname,
                        username: data.user.username,
                        email: data.user.email,
                        password: data.user.password,
                        gender: data.user.gender,
                        dob: data.user.dob,
                        address: data.user.address,
                        contact: data.user.contact,
                    });
                }
            } catch (error) {
                console.log('Error fetching user dashboard');
            }
        };

        checkStatus();
    }, []);

    const combinedData = {
        ...userData,
        ...additionalData,
    };

    const displayData = { ...combinedData };
    delete displayData.password;
    delete displayData.message;
    delete displayData.imagePath;

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text('Medical Report', 14, 22);
        doc.setFontSize(14);

        const tableData = Object.entries(displayData)
            .filter(([key]) => !['password', 'message', 'imagePath'].includes(key))
            .map(([key, value]) => [key.charAt(0).toUpperCase() + key.slice(1) + ':', value]);

        doc.autoTable({
            head: [['Field', 'Information']],
            body: tableData,
            startY: 30,
        });

        doc.text('Doctor\'s Notes', 14, doc.autoTable.previous.finalY + 10);
        doc.setFontSize(12);
        doc.text(
            "This report summarizes the patient's basic information and contact details. Further assessments and diagnostics may be required to provide a comprehensive health evaluation. Please consult with your healthcare provider for additional guidance.",
            14,
            doc.autoTable.previous.finalY + 20
        );

        doc.text('Conclusion', 14, doc.autoTable.previous.finalY + 60);
        doc.setFontSize(12);
        doc.text(
            "The patient is advised to follow the prescribed treatment plan and attend regular follow-ups as scheduled. If there are any changes in symptoms or new concerns, it is important to contact the healthcare provider immediately.",
            14,
            doc.autoTable.previous.finalY + 70
        );

        doc.text('________________________', 14, doc.autoTable.previous.finalY + 110);
        doc.text('Dr. AI Peterson', 14, doc.autoTable.previous.finalY + 120);
        doc.text('Chief Medical Officer', 14, doc.autoTable.previous.finalY + 130);

        doc.save('Medical_Report.pdf');
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', width: '80%', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Medical Report</h1>
            
            <h2>Patient Information</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }} border="1" cellPadding="10">
                <tbody>
                    <tr>
                        <td style={{ fontWeight: 'bold', width: '30%' }}>Name:</td>
                        <td>{`${displayData.name} ${displayData.lastname}`}</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>Username:</td>
                        <td>{displayData.username}</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>Date of Birth:</td>
                        <td>{displayData.dob}</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>Gender:</td>
                        <td>{displayData.gender}</td>
                    </tr>
                </tbody>
            </table>

            <h2>Contact Details</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }} border="1" cellPadding="10">
                <tbody>
                    <tr>
                        <td style={{ fontWeight: 'bold', width: '30%' }}>Email:</td>
                        <td>{displayData.email}</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>Address:</td>
                        <td>{displayData.address}</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>Contact Number:</td>
                        <td>{displayData.contact}</td>
                    </tr>
                </tbody>
            </table>

            <h2>Diagnosis Information</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }} border="1" cellPadding="10">
                <tbody>
                    {Object.entries(displayData).map(([key, value]) => (
                        !['name', 'lastname', 'username', 'email', 'dob', 'gender', 'address', 'contact'].includes(key) && (
                            <tr key={key}>
                                <td style={{ fontWeight: 'bold', width: '30%' }}>{key.charAt(0).toUpperCase() + key.slice(1)}:</td>
                                <td>{value}</td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>

            <h2>Doctor's Notes</h2>
            <p>
                This report summarizes the patient's basic information and contact details. Further assessments and diagnostics may be required to provide a comprehensive health evaluation. Please consult with your healthcare provider for additional guidance.
            </p>

            <h2>Conclusion</h2>
            <p>
                The patient is advised to follow the prescribed treatment plan and attend regular follow-ups as scheduled. If there are any changes in symptoms or new concerns, it is important to contact the healthcare provider immediately.
            </p>

            <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <p>________________________</p>
                <p>Dr. AI Peterson </p>
                <p>Chief Medical Officer</p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button onClick={generatePDF} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                    Download Report
                </button>
            </div>
        </div>
    );
};

export { Report };
