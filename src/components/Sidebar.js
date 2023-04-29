import React from "react";
import { Link } from "react-router-dom";
import home from '../assets/home.png';
import trip from '../assets/trip.png';
import driver from '../assets/driver.png';
import employee from '../assets/employee.png';

const Sidebar = () => {
  return (
    <nav className="w-1/5 h-auto p-10 text-white bg-gray-800">
      <ul>
        <li className="mb-10 hover:bg-[#00ADB5]  rounded-md p-2">
          <Link to="/">
            <img src={home} alt="Home" className="inline h-6 mr-2" />
            Home
          </Link>
        </li>
        <li className="mb-10 hover:bg-[#00ADB5]  rounded-md p-2">
          <Link to="/trips">
            <img src={trip} alt="Trips" className="inline h-6 mr-2" />
            Trip Management
          </Link>
        </li>
        <li className="mb-10 hover:bg-[#00ADB5]  rounded-md p-2">
          <Link to="/drivers">
            <img src={driver} alt="Drivers" className="inline h-6 mr-2" />
            Driver Management
          </Link>
        </li>
        <li className="mb-10 hover:bg-[#00ADB5]  rounded-md p-2">
          <Link to="/employees">
            <img src={employee} alt="Employees" className="inline h-6 mr-2" />
            Employee Management
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar
