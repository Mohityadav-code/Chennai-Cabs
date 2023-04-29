import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";

const EditDriver = () => {
  const [name, setName] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [mobile, setMobile] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "drivers", id);
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        const driverData = docSnap.data();
        setName(driverData.name);
        setLicenseNumber(driverData.licenseNumber);
        setMobile(driverData.mobile);
      } else {
        console.log("No such document!");
      }
    });
  }, [id]);

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const ref = doc(db, "drivers", id);
    await setDoc(ref, {
      name,
      licenseNumber,
      mobile,
    });
    navigate("/drivers");
  };

  return (
    <div className="flex items-center min-h-screen bg-gray-100" style={{ backgroundColor: "#222831" }}>
      <div className="w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="mb-10 text-4xl font-bold text-center" style={{ color: "#00ADB5" }}>Edit Driver</h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold" style={{ color: "#393E46" }}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="license-number" className="block mb-2 font-bold" style={{ color: "#393E46" }}>
              License Number:
            </label>
            <input
              type="text"
              id="license-number"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter License Number"
              value={licenseNumber}
              onChange={(event) => setLicenseNumber(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block mb-2 font-bold" style={{ color: "#393E46" }}>
              Mobile Number:
            </label>
            <input
              type="tel"
              id="mobile"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white transition-colors duration-300 ease-in-out bg-blue-500 rounded-md hover:bg-blue-600" style={{ backgroundColor: "#00ADB5" }}>
            Update Driver
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditDriver;
