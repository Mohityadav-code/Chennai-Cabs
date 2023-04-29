import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-222831">
      <h1 className="mb-8 text-3xl font-bold text-[#EEEEEE]">
        Welcome to Chennai to Southern Part of India Cab Booking
      </h1>
      <div className="grid grid-cols-2 gap-12">
        <div className="p-6 rounded-lg pl-2 pr-2 m-3 shadow-md bg-[#EEEEEE]">
          <h2 className="mb-4 text-2xl font-bold text-[#393E46]">Fast & Easy Booking</h2>
          <p className="text-[#393E46]">
            Avail on-time pick up & Drop with most reliable Chennai to southern
            part of India Cab Booking.
          </p>
        </div>
        <div className="p-6 rounded-lg pl-2 pr-2 m-3 shadow-md bg-[#EEEEEE]">
          <h2 className="mb-4 text-2xl font-bold text-[#393E46]">Transparent Billing</h2>
          <p className="text-[#393E46]">
            We have a completely transparent billing policy - that means no
            hidden charges!
          </p>
        </div>
        <div className="p-6 rounded-lg pl-2 pr-2 m-3 shadow-md bg-[#EEEEEE]">
          <h2 className="mb-4 text-2xl font-bold text-[#393E46]">24/7 Customer Support</h2>
          <p className="text-[#393E46]">
            Friendly & Helpful Support Team. Ride with expert chauffeurs,
            specifically trained for outstation rides.
          </p>
        </div>
        <div className="p-6 rounded-lg pl-2 pr-2 m-3 shadow-md bg-[#EEEEEE]">
          <h2 className="mb-4 text-2xl font-bold text-[#393E46]">Safe & Secure</h2>
          <p className="text-[#393E46]">
            Sanitized Cabs and Vaccinated drivers to ensure you a safe travel
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
