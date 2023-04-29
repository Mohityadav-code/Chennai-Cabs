import React, { useState } from "react";

const TripManagement = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  return (
    <div className="flex items-center min-h-screen bg-393E46">
      <div className="w-full max-w-md p-8 mx-auto rounded-lg shadow-lg bg-222831">
        <h1 className="mb-6 text-3xl font-bold text-center text-EEEEEE">Trip Planner</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="destination" className="block mb-2 font-bold text-00ADB5">
              Destination:
            </label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={handleDestinationChange}
              className="w-full px-3 py-2 border rounded bg-393E46 text-EEEEEE border-00ADB5"
            />
          </div>
          <div>
            <label htmlFor="start-date" className="block mb-2 font-bold text-00ADB5">
              Start Date:
            </label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={handleStartDateChange}
              className="w-full px-3 py-2 border rounded bg-393E46 text-EEEEEE border-00ADB5"
            />
          </div>
          <div>
            <label htmlFor="end-date" className="block mb-2 font-bold text-00ADB5">
              End Date:
            </label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              onChange={handleEndDateChange}
              className="w-full px-3 py-2 border rounded bg-393E46 text-EEEEEE border-00ADB5"
            />
          </div>
          <div>
            <label htmlFor="budget" className="block mb-2 font-bold text-00ADB5">
              Budget:
            </label>
            <input
              type="number"
              id="budget"
              value={budget}
              onChange={handleBudgetChange}
              className="w-full px-3 py-2 border rounded bg-393E46 text-EEEEEE border-00ADB5"
            />
          </div>
        </form>
        <h1 className="mt-8 mb-4 text-2xl font-bold text-center text-EEEEEE">Trip Information</h1>
        <div className="p-4 border rounded bg-393E46 text-EEEEEE border-00ADB5">
          <p className="font-semibold">Destination: {destination}</p>
          <p className="font-semibold">Start Date: {startDate}</p>
          <p className="font-semibold">End Date: {endDate}</p>
          <p className="font-semibold">Budget: {budget}</p>
        </div>
      </div>
    </div>
  );
};

export default TripManagement;
