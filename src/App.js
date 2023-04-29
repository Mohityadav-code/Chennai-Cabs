import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import EmployeeManagement from './components/EmployeeManagement';
import TripManagement from './components/TripManagement';
import DriverManagement from './components/DriverManagement';
import Employee from './components/Employee';
import EditEmpl from './components/EditEmpl';
import AddDriver from './components/AddDriver';
import DriverTable from './components/DriverTable';
import EditDriver from './components/EditDriver';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="flex h-auto bg-[#393E46] ">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <div className="p-4">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/employees" element={<EmployeeManagement />} />
              <Route path="/trips" element={<TripManagement />} />
              <Route path="/drivers" element={<DriverManagement />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/edit-employee/:id" element={<EditEmpl />} />
              <Route path="/add-driver" element={<AddDriver/>} />
              <Route path="/driver-table" element={<DriverTable />} />
              <Route path="/edit-driver/:id" element={<EditDriver />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
