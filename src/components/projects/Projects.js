// import React from "react";
// import Title from "../layouts/Title";
// import { projectOne, projectTwo, projectThree } from "../../assets/index";
// import ProjectsCard from "./ProjectsCard";

// const Projects = () => {
//   return (
//     <section
//       id="projects "
//       className="w-ful py-20 border-b-[1px] border-b-black"
//     >
//       <div className="flex justify-center items-center text-center">
//         <Title
//           title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
//           des="My Projects"
//         />
//       </div>
//       <div className="grid grid-cols-3 gap-14">
//         <ProjectsCard
//           title="SOCIAL MEDIA CLONE"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectOne}
//         />
//         <ProjectsCard
//           title="E-commerce Website"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectTwo}
//         />
//         <ProjectsCard
//           title="Chatting App"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectThree}
//         />
//         <ProjectsCard
//           title="SOCIAL MEDIA CLONE"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectThree}
//         />
//         <ProjectsCard
//           title="E-commerce Website"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectOne}
//         />
//         <ProjectsCard
//           title="Chatting App"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectTwo}
//         />
//       </div>
//     </section>
//   );
// };

// export default Projects;







import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree,travelAgency } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="TRAVEL AGENCY"
          des="I created a simple React app with a clean and modern design using Tailwind CSS. "
          src={travelAgency}
          link="https://travel-agency-hazel.vercel.app/"
        />
        <ProjectsCard
          title="OpenAI Article Summarizer"
          des=" Summarizer Application using OpenAI's GPT model"
          src={projectTwo}
          link="https://taupe-naiad-5edf7d.netlify.app/"

        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
      <ProjectsCard
  title="Weather App Example"
  des="An example weather app built with React"
  src={projectOne}
  link="https://weather-app-example.vercel.app/"
/>
<ProjectsCard
  title="Todo List Example"
  des="An example todo list app built with React"
  src={projectTwo}
  link="https://todo-list-example.vercel.app/"
/>

      </div>
    </section>
  );
};

export default Projects;
