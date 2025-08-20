import React, { useContext } from "react";
import InputField from "../Components/InputField";
import Button from "../Components/Button";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const SignIn = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col justify-between min-h-screen py-5">
      <div>
        <form onSubmit={handleSignIn} className="space-y-8">
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
              name={"email"}
              type={"email"}
              required={"required"}
            />
            <InputField
              text={"Password"}
              placeholder={"Enter password"}
              name={"password"}
              type={"password"}
              required={"required"}
            />
            <Button
              text={"Login"}
              bgColor={"bg-[#6C25FF]"}
              textColor={"text-white"}
            ></Button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default SignIn;
