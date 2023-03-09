import React from "react";
import { bannerImg } from "../../assets/index";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    <section
      id="home"
      className="width-full  gap-10 xl:gap-0 p-10 pb-20 flex flex-col lgl:flex-row items-center border-b-[1px] border-b-black font-titleFont
  "
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner; 
