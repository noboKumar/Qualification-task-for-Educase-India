import React from "react";
import InputField from "../Components/InputField";
import Button from "../Components/Button";

const SignIn = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen py-5">
      <div>
        <div className="space-y-8">
          <div>
            <h1 className="text-[28px] font-medium">
              Signin to your PopX account
            </h1>
            <p className="text-lg text-black/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <div className="space-y-6">
            <InputField
              text={"Email Address"}
              placeholder={"Enter email address"}
            />
            <InputField text={"Password"} placeholder={"Enter password"} />
            <Button
              text={"Login"}
              bgColor={"#6C25FF"}
              textColor={"white"}
            ></Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SignIn;
