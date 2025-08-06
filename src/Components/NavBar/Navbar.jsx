import { IoSearchOutline } from "react-icons/io5";
import { href, useLocation } from "react-router-dom";
import { IoAddCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState, useEffect } from "react";

function Navbar() {
  const navlinks = [
    {
      name: "Home",
      href: "/home",
    },
    {
      name: "Important",
      href: "/important",
    },
    {
      name: "Completed",
      href: "/completed",
    },
    {
      name: "AllTasks",
      href: "/alltasks",
    },
  ];

  const location = useLocation();

  return (
    <div className="flex flex-row justify-between items-center ml-76 bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-50">
      <span className="font-bold text-xl text-[#c9cbd8]">
        {navlinks.find((link) => link.href === location.pathname)?.name || ""}
      </span>

      <div className="relative bg-[#f2f8f8] border border-gray-300 rounded-md w-1/2">
        <IoSearchOutline className="text-gray-600 text-xl absolute top-3 left-2" />
        <input
          type="text"
          placeholder="Search..."
          className=" rounded-md p-2 w-1/2 pl-10"
        />
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/addtask">
          <IoAddCircleSharp className="text-gray-600 text-xl" />
        </Link>
        <IoIosNotificationsOutline className="text-gray-600 text-xl" />
      </div>
    </div>
  );
}

export function handleAddTask() {
  console.log("Add Task button clicked");
}

export default Navbar;
