import React from "react";
import Brand from "./Brand";
import Search from "./Search";
import Button from "./Button";

const Headers = () => {
  return (
    <div className="flex bg-transparent fixed z-10 justify-between items-center w-full p-4">
      <Brand />
      <Search />
      <div className="flex gap-2">
        <Button variant="secondary">Login</Button>
        <Button variant="primary">Register</Button>
      </div>
    </div>
  );
};
export default Headers;
