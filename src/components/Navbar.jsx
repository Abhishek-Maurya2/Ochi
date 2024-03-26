import React from "react";
import Login from "../Pages/Login";

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-6 flex justify-between items-center backdrop-blur-sm">
      <div className="logo">
        <a className="text-[25px] font-semibold" href="#">
          Ochi
        </a>
      </div>
      <div className="links flex gap-10">
        {["Home", "About", "Services", "Contact"].map((link, index) => (
          <a key={index} href="#" className="text-md font-light">
            {link}
          </a>
        ))}
        
      </div>
    </div>
  );
}

export default Navbar;
