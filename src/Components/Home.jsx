import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen py-5">
      <div></div>
      <div className="space-y-7">
        <div>
          <h1 className="text-[28px] font-medium">Welcome to PopX</h1>
          <p className="text-lg text-black/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="flex flex-col gap-2.5 font-medium">
          <button className="bg-[#6C25FF] py-3 text-white rounded-[6px] cursor-pointer">
            Create Account
          </button>
          <button className="bg-[#6C25FF4B] py-3 rounded-[6px] cursor-pointer">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
