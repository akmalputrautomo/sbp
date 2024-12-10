import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import PageSearch from "../pages/PageSearch";
import DetailMovie from "../pages/DetailMovie";
import { SeAllMovie } from "../pages/SeAllMovie";
import { Register } from "../pages/auth/Register";
import { Loginpage } from "../pages/auth/Loginpage";
import { Dashboard } from "../pages/auth/Dashboard";

export const Routerlist = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/" element={<Register />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/" element={<Loginpage />} /> */}
        <Route path="/:nameadat" element={<PageSearch />} />
        <Route path="/allmovie" element={<SeAllMovie />} />
        <Route path="/detail/:gambarid" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
};
