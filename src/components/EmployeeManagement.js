import React, { useState } from "react";
import EmpTable from "./EmpTable";
import { useCollection } from "../hooks/useCollection";
const EmployeeManagement = () => {
  const { documents: employees } = useCollection("employees");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees =
    employees &&
    employees.filter((employee) => {
      return employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <div className="min-h-screen p-4 bg-EEEEEE">
    <h1 className="mb-4 text-4xl font-bold text-center text-00ADB5">Employee Management</h1>
    <div className="mb-4">
    </div>
    <div>
      <input
        type="text"
        placeholder="Search employees"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-[#EEEEEE]"
      />
      {filteredEmployees && <EmpTable employees={filteredEmployees} />}
      {filteredEmployees && filteredEmployees.length === 0 && (
        <p>No Employee found</p>
      )}
    </div>
  </div>
  );
};

export default EmployeeManagement;
