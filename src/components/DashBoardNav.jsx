import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";

function DashBoardNav() {
  return (
    <nav className="relative flex justify-between items-cente px-6 py-2 w-full text-white">
      <p className="text-2xl font-bold">Luna</p>
      <div className="flex items-center bg-zinc-700 rounded-full pr-2">
        <input
          type="text"
          placeholder="Search"
          className="bg-zinc-700 text-white p-2 rounded-full w-60"
        />
        <FiSearch />
      </div>
      <img
        src="https:///via.placeholder.com/150"
        alt="profile"
        className="w-10 h-10 rounded-full"
      />
    </nav>
  );
}

export default DashBoardNav;
