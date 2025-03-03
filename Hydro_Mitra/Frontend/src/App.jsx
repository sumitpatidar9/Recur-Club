
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./App.css";


import Controller from './components/Auth/Controller';
import DashMain from './components/dashMain/DashMain';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar';
import MonitorReadings from './components/dashMain/MonitorReadings/MonitorReadings';
import Footer from './components/Footer/Footer';
import UserComplaints from './components/dashMain/UserComplaints/UserComplaints';

function App() {
  return (
    <>
    <Controller></Controller>
     {/* <Header></Header>
    <SideBar></SideBar> */}
    {/* <UserComplaints></UserComplaints> */}
    {/* <DashMain></DashMain> */} 
    {/* <MonitorReadings></MonitorReadings> */}
    {/* <Controller></Controller> */}
  
    </>
  );
}

export default App;
