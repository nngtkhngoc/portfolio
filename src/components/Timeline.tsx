import lqd from "../assets/lqd.png";
import uit from "../assets/uit.png";
import schneider from "../assets/schneider.png";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

interface event {
  timestamp: string;
  title: string;
  logo: string;
  description: string;
}
export default function Timeline() {
  const events = [
    {
      timestamp: "06/2025 - Now",
      title: "Schneider Electric (SEMV)",
      logo: schneider,
      description: "Digital Transformation Intern",
    },
    {
      timestamp: "09/2023 - Now",
      title: "University of Information Technology",
      logo: uit,
      description: "Software Engineering | GPA: 8.96",
    },
    {
      timestamp: "2020 - 2023",
      title: "Le Quy Don High School for the Gifted",
      logo: lqd,
      description: "English Major ",
    },
  ];

  const renderEvents = (events: event[]) => {
    return events.map((event) => (
      <motion.li className=" ms-5 mb-5 md:mb-7">
        <div className="absolute w-4 h-4 bg-secondary rounded-full mt-1.5 -start-2 border border-secondary"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "ease-in-out", delay: 0.2, duration: "0.8" }}
          viewport={{ amount: 0.9 }}
          className="mb-1 text-sm font-normal leading-none font-secondary text-secondary text-[23px] xl:text-[25px] xl:mb-5"
        >
          {event.timestamp}
        </motion.div>
        <div className="flex flex-row gap-4 mt-2 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "ease-in-out", delay: 0.1, duration: "0.8" }}
            viewport={{ amount: 0.9 }}
            className="mt-2"
          >
            <img src={event.logo} className="w-15 h-14 object-cover " />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "ease-in-out", delay: 0.1, duration: "0.8" }}
            viewport={{ amount: 0.9 }}
            className="flex flex-col w-full gap-1 justify-center"
          >
            <div className="font-bold text-primary text-[16px] md:text-[20px] xl:text-[25px] md:whitespace-nowrap">
              {event.title}
            </div>
            <div className="mb-4 font-primary text-primary italic text-[14px]">
              {event.description}
            </div>
          </motion.div>
        </div>
      </motion.li>
    ));
  };

  const targetRef = useRef(null); // 👈 tạo ref cho vùng theo dõi scroll
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"], // 👈 chính xác hơn
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={targetRef} className="relative ms-2">
      <motion.div
        style={{
          scaleY,
          originY: 0,
          backgroundColor: "#5e794c",
        }}
        className="absolute left-1.5 top-2 w-[3px] h-full bg-secondary rounded"
      />
      <ol className="relative ms-2">{renderEvents(events)}</ol>
    </div>
  );
}
