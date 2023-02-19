import React, { useState } from "react";
import "../index.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1180px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">M33R.</h1>
      <ul className=" hidden md:flex">
        <li className="p-4 cursor-pointer ">Home</li>
        <li className="p-4 cursor-pointer ">About</li>
        <li className="p-4 cursor-pointer ">Recourses</li>
        <li className="p-4 cursor-pointer ">Contact</li>
      </ul>
      <div onClick={handleNav} className="cursor-pointer block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[40%] border-r border-r-gray-900 h-full bg-[#00df9a] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Recourses</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
