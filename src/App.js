// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";

import VehicleData from "./Pages/VehicleData";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import VINcode from "./Pages/VINcode";
import AddNewService from "./Pages/AddNewService";
import Settings from "./Pages/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/vin" element={<VINcode/>} />
        <Route path="/service" element={<VehicleData/>} />
        <Route path="/service/addNewService" element={<AddNewService/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </>
  );
}

export default App;
