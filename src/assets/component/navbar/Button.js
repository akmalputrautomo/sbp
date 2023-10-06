import React from "react";

const Button = ({ variant, children, ...props }) => {
  let ButtonName = "px-4 py-2 rounded-full";
  if (variant === "primary") {
    ButtonName += " bg-red-500 text-white font-normal outline-1 outline-red-500 outline ";
  } else if (variant === "secondary") {
    ButtonName += " bg-transparent text-red-500 font-normal outline-1 outline-red-500 outline";
  }
  return (
    <button className={ButtonName} {...props}>
      {children}
    </button>
  );
};
export default Button;
