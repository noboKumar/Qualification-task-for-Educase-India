import React from "react";
import Button from "../Components/Button";

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
          <Button
            bgColor={"#6C25FF"}
            text={"Create Account"}
            textColor={"white"}
          ></Button>
          <Button
            bgColor={"#6C25FF4B"}
            text={"Already Registered? Login"}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
