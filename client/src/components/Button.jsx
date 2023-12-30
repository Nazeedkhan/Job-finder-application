import React from "react";

const Button = ({ handleSelectedButtonChange, value, title }) => {
  return (
    <button
      onClick={handleSelectedButtonChange}
      value={value}
      className="px-4 py-1 border text-base hover:bg-secondary hover:text-white"
    >
      {title}
    </button>
  );
};

export default Button;
