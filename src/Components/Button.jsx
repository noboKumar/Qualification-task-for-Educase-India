import React from "react";

const Button = ({ text, bgColor, textColor }) => {
  return (
    <button
      className={`bg-[${bgColor}] text-${textColor} py-3 rounded-[6px] cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default Button;
