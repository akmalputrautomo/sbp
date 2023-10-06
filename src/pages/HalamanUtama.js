import React from "react";

import { PopularMovie } from "../assets/component/PopularMovie";
import Headers from "../assets/component/navbar/Header";
import NowPlaying from "../assets/component/NowPlaying";

const HalamanUtama = () => {
  return (
    <div className="bg-black">
      <Headers />
      <NowPlaying />
      <PopularMovie />
    </div>
  );
};
export default HalamanUtama;
