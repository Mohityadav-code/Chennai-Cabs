import React from "react";
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';

function Header() {
  return (
    <header className="bg-[#00ADB5]">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        <div className="flex items-center">
          <img className="h-8 mr-2" src={logo} alt="Logo" />
          <span className="text-xl font-bold text-EEEEEE">Chennai Cabs</span>
        </div>
        <div className="flex items-center">
          <span className="p-2 text-EEEEEE">Mohit</span>
          <img className="h-8 mr-2 rounded-full" src={profile} alt="Profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
