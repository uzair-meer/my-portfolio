import React from "react";
import {} from "react-icons/fa";
import {
  FaTwitterSquare,
  FaLinkedinIn,
  FaInstagramSquare,
  FaGithubSquare,
  FaPhoneSquareAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1220px] mx-auto py-16 px-4 grid lg:grid-cols-3  gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">M33R.</h1>
        <p className="py-4">
          I can digitally transform your business with top-notch solutions. I
          offer Website development solutions to reinvent.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaTwitterSquare size={30} className="cursor-pointer" />
          <FaInstagramSquare size={30} className="cursor-pointer" />
          <FaGithubSquare size={30} className="cursor-pointer" />
          <FaLinkedinIn size={30} className="cursor-pointer" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Services</h6>
          <ul>
            <li className="py-2 text-sm">Frontend Development</li>
            <li className="py-2 text-sm">Backend Developent</li>
            <li className="py-2 text-sm">WebApp-Maintennace</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Technologies</h6>
          <ul>
            <li className="py-2 text-sm">HTML</li>
            <li className="py-2 text-sm">CSS3</li>
            <li className="py-2 text-sm">Tailwind CSS</li>
            <li className="py-2 text-sm">BootStrap</li>
            <li className="py-2 text-sm">ReactJs</li>
            <li className="py-2 text-sm">Nodejs</li>
            <li className="py-2 text-sm">Expressjs</li>
            <li className="py-2 text-sm">MongoDB</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Contact</h6>
          <ul>
            <li className="py-2 text-sm flex">
              <span className="mx-2">
                <FaPhoneSquareAlt size={20} />
              </span>
              +923077138700
            </li>
            <li className="py-2 text-sm flex">
              <span className="mx-2">
                <FaEnvelope size={20} />
              </span>
              uzairaltaf048@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
