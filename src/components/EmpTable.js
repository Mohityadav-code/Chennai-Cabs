// EmpTable.js
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";

const EmpTable = ({ employees }) => {
  const handleDeleteEmployee = async (id) => {
    const ref = doc(db, "employees", id);
    await deleteDoc(ref);
  };

  return (
    <div className="mb-8">
        <div className="flex justify-between p-2">
      <h2 className="mb-4 text-xl font-bold text-00ADB5">Employees</h2>
      <Link to="/employee">
        <button className="px-4 py-2 font-bold text-white transition-colors duration-300 ease-in-out rounded-md bg-[#00ADB5] hover:bg-[rgb(10,123,129)]">
          Add Employee
        </button>
      </Link>
        </div>
      <table className="w-full border-collapse table-auto">
        <thead className="bg-222831 text-EEEEEE">
          <tr>
            <th className="px-4 py-2 text-left border border-393E46">Employee ID</th>
            <th className="px-4 py-2 text-left border border-393E46">Name</th>
            <th className="px-4 py-2 text-left border border-393E46">Date of Birth</th>
            <th className="px-4 py-2 text-left border border-393E46">Email</th>
            <th className="px-4 py-2 text-left border border-393E46">Mobile Number</th>
            <th className="px-4 py-2 text-left border border-393E46">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="bg-393E46 text-EEEEEE">
              <td className="px-4 py-2 border">{employee.id}</td>
              <td className="px-4 py-2 border">{employee.name}</td>
              <td className="px-4 py-2 border">{employee.dateOfBirth}</td>
              <td className="px-4 py-2 border">{employee.email}</td>
              <td className="px-4 py-2 border">{employee.mobile}</td>
              <td className="px-4 py-2 border">
                <Link to={`/edit-employee/${employee.id}`}>
                  <button className="px-4 py-2 m-1 font-bold text-white rounded bg-00ADB5 hover:bg-[#00ADB5]">Edit</button>
                </Link>
                <button onClick={() => handleDeleteEmployee(employee.id)} className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpTable;
