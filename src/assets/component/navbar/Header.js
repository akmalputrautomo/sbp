import React from "react";
import Brand from "./Brand";
import Search from "./Search";
import Button from "./Button";

const Headers = () => {
  return (
    <div className="flex bg-transparent fixed z-10 justify-between items-center w-full p-4">
      {/* Brand Section */}
      <div className="flex items-center">
        <Brand />
      </div>

      {/* Search Section */}
      <div className="hidden md:flex flex-1 justify-center">
        <Search />
      </div>

      {/* Button Section */}
      <div className="flex gap-2">
        {/* Tambahkan kembali tombol jika dibutuhkan */}
        {/* <Button variant="secondary">Login</Button>
        <Button variant="primary">Register</Button> */}
      </div>
    </div>
  );
};

export default Headers;
