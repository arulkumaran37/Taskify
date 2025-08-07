import { IoSearchOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { IoAddCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
function Navbar() {
  const navlinks = [
    {
      name: "Tasks Home",
      href: "/home",
    },
    {
      name: "Important Tasks",
      href: "/important",
    },
    {
      name: "Completed Tasks",
      href: "/completed",
    },
    {
      name: "All Tasks",
      href: "/alltasks",
    },
  ];

  const location = useLocation();

  return (
    <div className="flex justify-between items-center bg-white shadow-sm p-4 fixed top-0 left-70 right-0 z-50">
      <span className="font-semibold text-xl text-[#696565] ml-10">
        {navlinks.find((link) => link.href === location.pathname)?.name || ""}
      </span>

      <div className="relative flex-grow max-w-xl mx-8">
        <IoSearchOutline className="text-gray-600 text-xl absolute top-3 left-3" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#E4E4E4] border border-gray-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div className="relative flex items-center space-x-4">
        <button onClick={handleAddTask} className="bg-[#546FFF] rounded-md text-white p-2 flex items-center space-x-2">
          <IoAddCircleSharp className="text-white text-xl" />
          <span>Add Tasks</span>
        </button>
        </div>
        <IoIosNotificationsOutline className="text-gray-600 text-3xl" />
          
        <CgProfile className="text-gray-600 text-3xl mr-10" />
      </div>
    
  );
}

export function handleAddTask() {
  console.log("Add Task button clicked");
}

export default Navbar;
