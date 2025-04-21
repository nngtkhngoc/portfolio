import ProjectCard from "./ProjectCards";
import quickeat from "../assets/quickeat.png";
import moviebox from "../assets/moviebox.png";
import { motion } from "framer-motion";
import road from "../assets/road.png";
interface project {
  image: string;
  title: string;
  techs: string[];
  link: string;
}

export default function Projects() {
  const projects = [
    {
      image: quickeat,
      title: "QuickEat",
      techs: [
        "Reactjs",
        " Zustand",
        "TailwindCSS",
        "Nodejs",
        " Prisma",
        "OAuth2.0",
      ],
      link: "https://quick-eat-one.vercel.app/",
    },
    {
      image: moviebox,
      title: "MovieBox",
      techs: ["Reactjs", "ContextAPI", "TailwindCSS", "Nodejs", "MongoDB"],
      link: "",
    },
  ];

  const renderProjects = (projects: project[]) => {
    return projects.map((project, indx) => (
      <div className="w-full h-full flex flex-row items-center justify-center md:grid md:grid-cols-3 ">
        {indx % 2 != 0 && <div className="hidden md:block md:col-span-1"></div>}
        <div className="md:col-span-2 flex flex-row items-center justify-center">
          <ProjectCard
            image={project.image}
            title={project.title}
            techs={project.techs}
            link={project.link}
          />
        </div>

        {indx % 2 == 0 && (
          <div className="hidden md:block  md:col-span-1"></div>
        )}
      </div>
    ));
  };
  return (
    <div className="w-full mb-10 relative">
      <div className="w-full flex flex-row justify-center items-center gap-1 pr-2">
        <div className="w-full border-dashed border-side my-2 border-2 "></div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "ease-in-out", duration: "0.8" }}
          viewport={{ amount: 0.8 }}
          className="font-secondary text-secondary text-[50px] md:text-[70px] xl:text-[90px]  text-shadow-lg md:pr-8"
        >
          projects.
        </motion.div>
      </div>
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "ease-in-out", duration: "0.8" }}
        viewport={{ amount: 0.1 }}
        src={road}
        className="absolute left-20 bottom-10 lg:left-50 xl:left-120 xl:-rotate-5 rotate-2 hidden md:block scale-[0.8]"
      />
      <div className="flex flex-col gap-15 items-center justify-center mt-10 md:px-10">
        {renderProjects(projects)}
      </div>
    </div>
  );
}
