import React from "react";
import InputField from "../Components/InputField";
import Button from "../Components/Button";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const phone = form.number.value;
    const email = form.email.value;
    const password = form.password.value;
    const company = form.company.value;
    const agency = form.agency.value;

    console.log({ userName, phone, email, password, company, agency });
  };
  return (
    <form
      onSubmit={handleSignUp}
      className="flex flex-col justify-between min-h-screen pt-10 pb-8"
    >
      <div>
        <div>
          <h1 className="text-[28px] font-medium">Create your PopX account</h1>
        </div>
        <div className="space-y-7">
          <InputField
            text={"Full Name"}
            placeholder={"Enter your full name"}
            type={"text"}
            required={"required"}
            name={"name"}
          ></InputField>
          <InputField
            text={"Phone number"}
            placeholder={"Enter your phone number"}
            type={"tel"}
            required={"required"}
            name={"number"}
          ></InputField>
          <InputField
            text={"Email address"}
            placeholder={"Enter your email address"}
            type={"email"}
            required={"required"}
            name={"email"}
          ></InputField>
          <InputField
            text={"Password"}
            placeholder={"Enter your password"}
            type={"password"}
            required={"required"}
            name={"password"}
          ></InputField>
          <InputField
            text={"Company name"}
            placeholder={"Enter your company name"}
            type={"text"}
            name={"company"}
          ></InputField>
          <div className="space-y-2.5">
            <h3 className="text-[13px]">Are You an Agency?</h3>

            <div className="space-x-6 flex items-center">
              <div className="space-x-3 flex items-center">
                <input
                  className="w-[22px] h-[22px] accent-[#642AF5]"
                  type="radio"
                  id="yes"
                  name="agency"
                  value="yes"
                  required={"required"}
                />
                <label htmlFor="yes">Yes</label>
              </div>

              <div className="space-x-3 flex items-center">
                <input
                  className="w-[22px] h-[22px] accent-[#642AF5]"
                  type="radio"
                  id="no"
                  name="agency"
                  value="no"
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button
          text={"Create Account"}
          bgColor={"bg-[#6C25FF]"}
          textColor={"text-white"}
        ></Button>
      </div>
    </form>
  );
};

export default SignUp;
