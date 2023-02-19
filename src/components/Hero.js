import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w- [780px] mt-40 w-full h-screen mx-auto text-center flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 md:text-4xl">
          MERN Stack Developer
        </p>
        <h1 className="md:text-4xl sml:text-2xl text-4xl font-bold md:py-3 ">
          Dynamic Web Application, or a Custom Software Solution,
        </h1>
        <div>
          <p className="md:text-2xl sm:2xl text-xl font-bold flex justify-center items-center text-[#00df9a] py-2">
            PSD and FIGMA to React
          </p>
          <Typed
            className="md:text5xl sm:4xl text-xl font-bold md:pl-2 pl-2"
            strings={["WebDevelopment", "ReactJs", "NodeJs", "MERN Stack"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className=" text-xl font-bold text-gray-500">
          Let's work together to bring your vision to life.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md my-6 py-3 mx-auto text-black cursor-pointer">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Hero;
