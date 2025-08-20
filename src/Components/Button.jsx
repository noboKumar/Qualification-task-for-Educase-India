import React from "react";

const Button = ({ text, bgColor, textColor }) => {
  return (
    <button
      className={`${bgColor} ${textColor} py-3 font-medium rounded-[6px] cursor-pointer w-full hover:bg-[#CBCBCB]`}
    >
      {text}
    </button>
  );
};

export default Button;
