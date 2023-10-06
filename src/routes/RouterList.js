import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import PageSearch from "../pages/PageSearch";
import DetailMovie from "../pages/DetailMovie";
import { SeAllMovie } from "../pages/SeAllMovie";

export const Routerlist = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:namemovie" element={<PageSearch />} />
        <Route path="/allmovie" element={<SeAllMovie />} />
        <Route path="/detail/:movieId" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
};
