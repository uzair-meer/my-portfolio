import React from "react";
import Frontend from "../components/assets/front.png";
import Backend from "../components/assets/backend.png";
import Maintenance from "../components/assets/maintenance.png";
function Cards() {
  return (
    <div className="w-full py-[10rem] px=4 bg-white">
      <div className="max-w-[1220px] mx-auto grid md:grid-cols-3 gap-8">
        {/* first card */}
        <div className="w-full shadow-xl flex flex-col py-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img className="mx-auto mt-[-3rem] " alt="#" src={Frontend} />
          <h3 className="text-2xl font-bold text-center py-8">
            Frontend-development
          </h3>
        
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              I will convert the designs to responsive html css / react with all
              the latest web standards and technologies
            </p>
          </div>
          <button className="bg-[#00df9a] w-[150px] rounded-md my-6 py-3 mx-auto text-black cursor-pointer font-bold">
            contact me
          </button>
        </div>
        {/* 2nd card */}
        <div className="w-full  shadow-xl flex flex-col py-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img className="mx-auto mt-[-3rem] " alt="#" src={Backend} />
          <h2 className="text-2xl font-bold text-center py-8">
            Backend-development
          </h2>
    

          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              As a web application backend developer, I will provide the
              endpoints of NodeJS Rest APIs and web apps
            </p>
          </div>
          <button className="bg-black w-[150px] rounded-md my-6 py-3 mx-auto text-[#00df9a] cursor-pointer font-bold">
            contact me
          </button>
        </div>
        {/* 3rd card */}
        <div className="w-full  shadow-xl flex flex-col py-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img className="mx-auto mt-[-3rem]" alt="#" src={Maintenance} />
          <h1 className="text-2xl font-bold text-center py-8">
            web-maintenance
          </h1>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              I will fix MERN-stack issues, errors and bugs. Also can add
              additional features to your website and do customization
            </p>
          </div>
          <button className="bg-[#00df9a] w-[150px] rounded-md my-6 py-3 mx-auto text-black cursor-pointer font-bold">
            contact me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
