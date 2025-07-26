import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "TailwindCSS",
    "C++",
    "MongoDB",
    "Nodejs",
    "TypeScript",
    "ReactJS",
    "PostgreSQL",
    "JavaScript",
    "ASP.NET MVC",
  ];
  const item = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const renderSkills = (skills: string[]) => {
    return skills.map((skill, idx) => (
      <motion.div
        variants={item}
        key={idx}
        className="bg-secondary  px-5 py-3 rounded-[20px] font-bold text-side shadow-[5px_5px_0px_0px_#EDC5C8] hover:bg-side hover:shadow-md hover:text-secondary transition-all duration-500"
      >
        {skill}
      </motion.div>
    ));
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      className="flex flex-wrap gap-4 justify-center items-center font-primary xl:w-3/4 "
    >
      {renderSkills(skills)}
    </motion.div>
  );
}
