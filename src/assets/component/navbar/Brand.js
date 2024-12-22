import React from "react";
import { useNavigate } from "react-router-dom";

const Brand = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")} className="focus:outline-none">
        <h1 className="font-bold text-red-600 text-4xl sm:text-5xl">ADAT BALI</h1>
      </button>
    </div>
  );
};

export default Brand;
