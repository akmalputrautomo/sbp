import React, { useEffect, useState } from "react";
import { useGetDataUser } from "../../services/auth/Get_User";
// import { toast } from "react-toastify";
// import Cookies from "universal-cookie";
import { CookieKeys, CookieStorage } from "../../utils/Cookies";

export const Dashboard = () => {
  // const [Token, setToken] = useState(localStorage.getItem("token"));
  const { data: Paijosalto, error, isError, status } = useGetDataUser({});

  // useEffect(() => {
  //   console.log(Paijosalto, status);
  // }, [Paijosalto, status]);

  // useEffect(() => {
  //   if (isError) {
  //     toast.warning("warning coy");
  //   }
  // }, [status, isError]);

  return (
    <div className="flex items-center justify-center flex-col ">
      <h1 className="text-2xl font-bold mb-4">DASHBOARD</h1>
      <button
        className="py-2 px-4 bg-red-500 text-white rounded-md"
        onClick={() => {
          CookieStorage.remove(CookieKeys.AuthToken);
        }}
      >
        Logout
      </button>
    </div>
  );
};
