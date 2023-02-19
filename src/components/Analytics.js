import React from "react";
import Laptop from "../components/assets/laptop.png";
const Analytics = () => {
  return (
    <div className="w-full bg-[#3B7381] px-4 py-6">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-2">
        <img src={Laptop} alt="/" className="mx-w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl">Ready to work with M33R</h1>
          <p>
            Get a comprehensive product development experience from delivery to
            maintenance with reduced development costs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
