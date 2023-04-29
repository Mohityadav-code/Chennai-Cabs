import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { doc, getDoc, setDoc } from "firebase/firestore";

const EditEmpl = () => {     
  const [employeeName, setEmployeeName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const {id} = useParams();

  useEffect(()=>{
    const docRef = doc(db, "employees", id);
    getDoc(docRef).then((docSnap)=>{
      if (docSnap.exists()) {
        const empdata = docSnap.data();
        setEmployeeName(empdata.name)
        setDob(empdata.dateOfBirth)
        setEmail(empdata.email)
        setMobile(empdata.mobile)
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    })
  },[id])

  let navigate = useNavigate();

  const handleSubmit = async (event)=>{
    event.preventDefault();
    await setDoc(doc(db,"employees",id), {
      dateOfBirth:dob,
      email:email,
      mobile:mobile,
      name:employeeName
    });    
    navigate('/employees');
  }

  return (
    <div className="flex items-center min-h-screen bg-393E46">
      <div className="w-full max-w-md p-8 mx-auto rounded-lg shadow-lg bg-222831">
        <div className="text-xl font-bold text-center text-EEEEEE">
          Edit Employee
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-00ADB5"
              htmlFor="employeeName"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded bg-393E46 text-EEEEEE border-00ADB5"
              id="employeeName"
              type="text"
              placeholder="Name"
              value={employeeName}
              onChange={(event) => setEmployeeName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-00ADB5" htmlFor="dob">
              Date of Birth
            </label>
            <input
              className="w-full px-3 py-2 border rounded bg-393E46 text-EEEEEE border-00ADB5"
              id="dob"
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-00ADB5" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded bg-393E46 text-EEEEEE border-00ADB5"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-00ADB5"
              htmlFor   ="name"           type="text"
              placeholder="Name"
              value={employeeName}
              onChange={(event) => setEmployeeName(event.target.value)}
            />
          </div>
       
        
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-00ADB5"
              htmlFor="mobile"
            >
              Mobile Number
            </label>
            <input
              className="w-full px-3 py-2 border rounded bg-393E46 text-EEEEEE border-00ADB5"
              id="mobile"
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="px-4 py-2 font-bold text-white transition-colors duration-300 ease-in-out rounded bg-[#00ADB5] hover:bg-[#116d72] focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Employee
            </button>
          </div>
        </form>
      </div>
      </div>
      );
};

export default EditEmpl;




    