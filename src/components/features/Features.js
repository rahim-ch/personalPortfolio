import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full  py-20  border-b-[1px] border-b-black
"
    >
      <Title title="Features" des="what i do" />
      <div className=" grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="business strategy "
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sollicitudin orci. Nunc ultricies purus auctor,  
        "
          icon={<FaBars />}
        />
        <Card
          title="app development "
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sollicitudin orci. Nunc ultricies purus auctor,  
        "
          icon={<AiFillAppstore />}
        />
        <Card
          title="seo optimization "
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sollicitudin orci. Nunc ultricies purus auctor,  
        "
          icon={<SiProgress />}
        />
        <Card
          title="mobile development "
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sollicitudin orci. Nunc ultricies purus auctor,  
        "
          icon={<FaMobile />}
        />
        <Card
          title="ux design "
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sollicitudin orci. Nunc ultricies purus auctor,  
        "
          icon={<SiAntdesign />}
        />
        <Card
          title="hosting websites "
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sollicitudin orci. Nunc ultricies purus auctor,  
        "
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
