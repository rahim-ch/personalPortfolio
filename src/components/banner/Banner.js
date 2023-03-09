import React from "react";
import { bannerImg } from "../../assets/index";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    <section
      id="home"
      className="width-full   p-10 pb-20 flex items-center border-b-[1px] border-b-black font-titleFont
  "
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
