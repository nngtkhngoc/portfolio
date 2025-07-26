/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectCard from "./ProjectCards";
import quickeat from "../assets/quickeat.png";
import libraryhub from "../assets/libraryhub.png";
import doctruyen from "../assets/doctruyen.png";
import jewelry from "../assets/jewelry.png";

import { Carousel } from "antd";
import { motion } from "framer-motion";
import "antd/dist/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface project {
  image: string;
  title: string;
  techs: string[];
  link: string;
}

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-25px] top-[40%] z-10 text-xl border border-border rounded-[10px] p-1 bg-secondary cursor-pointer flex flex-row font-bold text-side shadow-[5px_5px_0px_0px_#EDC5C8] hover:bg-side hover:shadow-md hover:text-secondary transition-all duration-500"
      onClick={onClick}
    >
      <ArrowRight />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-25px] top-[40%] z-10 text-xl border border-border rounded-[10px] p-1 bg-secondary cursor-pointer flex flex-row font-bold text-side shadow-[5px_5px_0px_0px_#EDC5C8] hover:bg-side hover:shadow-md hover:text-secondary transition-all duration-500"
      onClick={onClick}
    >
      <ArrowLeft />
    </div>
  );
};

export default function Projects() {
  const projects: project[] = [
    {
      image: quickeat,
      title: "QuickEat",
      techs: [
        "React",
        "Zustand",
        "TailwindCSS",
        "FramerMotion",
        "Nodejs",
        "PostgreSQL",
      ],
      link: "https://quick-eat-one.vercel.app/",
    },
    {
      image: libraryhub,
      title: "LibraryHub",
      techs: [
        "React",
        "ReactQuery",
        "TailwindCSS",
        "Java Spring Boot",
        "PostgreSQL",
      ],
      link: "https://quan-li-thu-vien-fe.vercel.app/",
    },
    {
      image: doctruyen,
      title: "Doc Truyen Vui",
      techs: [
        "React",
        "ContextAPI",
        "TailwindCSS",
        "Nodejs",
        "OpenAI API",
        "PostgreSQL",
      ],
      link: "https://doctruyenvui.id.vn/",
    },
    {
      image: jewelry,
      title: "JewelryStore",
      techs: ["React", "Nodejs", "ReactQuery", "TailwindCSS", "PostgreSQL"],
      link: "https://jewelry-store-qk81.vercel.app/",
    },
  ];

  return (
    <div className="w-full lg:-mt-50 mb-10 relative">
      {/* Title Section */}
      <div className="w-full flex flex-row justify-center items-center gap-1 pr-2">
        <div className="w-full border-dashed border-side my-2 border-2 "></div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "ease-in-out", duration: 0.8 }}
          viewport={{ amount: 0.8 }}
          className="font-secondary text-secondary text-[50px] md:text-[70px] xl:text-[90px] text-shadow-lg md:pr-8"
        >
          projects.
        </motion.div>
      </div>

      {/* Carousel Section */}
      <div className="w-full mt-10 px-2  sm:px-4 md:px-8 lg:px-12 xl:px-20">
        <Carousel
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          dots={false}
          arrows
          infinite
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1280, // xl
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768, // md
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 320, // md
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {projects.map((project, idx) => (
            <div key={idx} className="p-4 pl-11">
              <ProjectCard
                image={project.image}
                title={project.title}
                techs={project.techs}
                link={project.link}
                index={idx}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
