//Reusable button component
import React from "react";

const Button = ({ children, submit, className }) => {
  return (
    <button
      className={`${className} text-xs md:text-base rounded px-3 py-2`}
      onClick={submit}
    >
      {children}
    </button>
  );
};

export default Button;
