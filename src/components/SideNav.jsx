import React, { useState } from "react";
import {
  FiHelpCircle,
  FiMenu,
  FiPlus,
  FiRotateCcw,
  FiSettings,
} from "react-icons/fi";

function SideNav() {
  const [sideBar, setSideBar] = useState(false);
  const handleSideBarToggle = () => {
    setSideBar(!sideBar);
  };
  return (
    <div className="flex flex-col items-start justify-between bg-zinc-800 p-2 text-white">
      <div className="flex flex-col items-start">
        <button
          className="p-3 rounded-full text-xl hover:bg-zinc-600"
          onClick={handleSideBarToggle}
        >
          <FiMenu />
        </button>
        <button className="flex items-center p-3 mt-10 rounded-full text-xl bg-zinc-900 hover:bg-zinc-700">
          <FiPlus />
          {sideBar && (
            <p className="text-[14px] ml-2 whitespace-nowrap">New Chat</p>
          )}
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <button className="flex items-center p-3 rounded-full text-xl hover:bg-zinc-600">
          <FiRotateCcw />
          {sideBar && <p className="text-[14px] ml-2">History</p>}
        </button>
        <button className="flex items-center p-3 rounded-full text-xl hover:bg-zinc-600">
          <FiHelpCircle />
          {sideBar && <p className="text-[14px] ml-2">Help</p>}
        </button>
        <button className="flex items-center p-3 mb-2 rounded-full text-xl hover:bg-zinc-600">
          <FiSettings />

          {sideBar && <p className="text-[14px] ml-2">Settings</p>}
        </button>
        {sideBar && (
          <p className="text-[13px] text-gray-300 my-2 whitespace-nowrap">
            Developed by Abhishek ❤️
          </p>
        )}
      </div>
    </div>
  );
}

export default SideNav;
