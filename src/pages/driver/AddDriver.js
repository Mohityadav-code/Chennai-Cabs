import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const AddDriver = () => {
  const [driverName, setDriverName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [licenseNo, setLicenseNo] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const driverRef = collection(db, 'drivers');
    await addDoc(driverRef, {
      name: driverName,
      dateOfBirth: dob,
      email: email,
      mobile: mobile,
      licenseNumber: licenseNo
    });
    navigate('/drivers');
  };

  return (
    <div className="py-10 bg-gray-100">
    <form onSubmit={handleSubmit} className="max-w-lg p-8 mx-auto bg-white rounded-lg shadow-md">
    <h1 className="mb-5 text-3xl font-bold text-center">Add Driver</h1>
      <div className="mb-4">
        <label htmlFor="driver-name" className="block mb-2 font-bold text-gray-700">Name:</label>
        <input
          type="text"
          id="driver-name"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter Name"
          value={driverName}
          onChange={(event) => setDriverName(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dob" className="block mb-2 font-bold text-gray-700">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter Date of Birth"
          value={dob}
          onChange={(event) => setDob(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mobile" className="block mb-2 font-bold text-gray-700">Mobile Number:</label>
        <input
          type="tel"
          id="mobile"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="license-no" className="block mb-2 font-bold text-gray-700">License Number:</label>
        <input
          type="text"
          id="license-no"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter License Number"
          value={licenseNo}
          onChange={(event) => setLicenseNo(event.target.value)}
        />
      </div>
      <button type="submit" className="px-4 py-2 text-white transition-colors duration-300 ease-in-out bg-blue-500 rounded-md hover:bg-blue-600">Add Driver</button>
    </form>
  </div>
  

  );
};

export default AddDriver;
