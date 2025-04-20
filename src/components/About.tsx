import Timeline from "./Timeline";
import { motion } from "framer-motion";
import Skills from "./Skills";

export default function About() {
  return (
    <div className="px-2 pt-7 pb-5 md:pb-0 font-primary" id="about">
      {/* title */}
      <div className="w-full flex flex-row justify-center items-center md:pl-5 gap-1 lg:pl-10 lg:pr-3 ">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "ease-in-out", duration: "1.2" }}
          viewport={{ amount: 0.2 }}
          className="font-secondary text-secondary text-[50px] md:text-[70px] xl:text-[90px] xl:pl-4 text-shadow-lg"
        >
          about.
        </motion.div>
        <div className="w-full border-dashed border-side my-2 border-2 ml-4"></div>
      </div>

      {/* education */}
      <div className="flex flex-col justify-center items-start md:place-items-start md:grid md:grid-cols-3  lg:grid-cols-2 md:grid-rows-2 gap-6 md:gap-0 pt-6 md:pt-0 md:pl-10 lg:pl-14  lg:pr-14">
        <div className="md:row-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex flex-row w-full items-start xl:w-3/4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "ease-in-out", delay: 0.1, duration: "0.8" }}
              className="text-primary text-[30px] xl:text-[40px] font-bold px-2 mb-7 relative w-max z-10 after:absolute after:-z-5 after:bg-side after:w-full after:h-1/4 after:bottom-2 after:left-0"
            >
              EDUCATION
            </motion.div>
          </div>
          <Timeline />
        </div>

        <div className="hidden md:block row-span-1 col-span-1 bg-yellow-200">
          {" "}
        </div>
        <div className=" hidden md:block row-span-1 col-span-1 bg-yellow-200"></div>

        {/* skills */}
        <div className="md:row-span-1  md:col-span-2 lg:col-span-1 w-full place-self-start">
          <div className="flex flex-col w-full justify-start ">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "ease-in-out", delay: 0.1, duration: "0.8" }}
              className="text-primary text-[30px] xl:text-[40px]  font-bold px-2 mb-7 relative w-max z-10 after:absolute after:-z-5 after:bg-side after:w-full after:h-1/4 after:bottom-2 after:left-0"
            >
              SKILLS
            </motion.div>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
