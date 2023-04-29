import React, { useState } from 'react';
import DriverTable from './DriverTable';
import { useCollection } from '../../hooks/useCollection';

const DriverManagement = () => {
  const { documents: drivers } = useCollection('drivers');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDrivers =
    drivers &&
    drivers.filter((driver) => {
      return driver.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <div className="min-h-screen p-4 bg-EEEEEE">
      <h1 className="mb-4 text-4xl font-bold text-center text-00ADB5">
        Driver Management
      </h1>
     
      <div>
        <input
          type="text"
          placeholder="Search drivers"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-[#EEEEEE]"
        />
        {filteredDrivers && <DriverTable drivers={filteredDrivers} />}
        {filteredDrivers && filteredDrivers.length === 0 && (
          <p>No drivers found</p>
        )}
      </div>
    </div>
  );
};

export default DriverManagement;
