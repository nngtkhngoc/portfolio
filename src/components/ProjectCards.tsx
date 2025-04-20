import { motion } from "framer-motion";

interface ProjectCardProps {
  image: string;
  title: string;
  techs: string[];
  link: string;
}

export default function ProjectCard({
  image,
  title,
  techs,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ amount: 0.2 }}
      transition={{ type: "ease-in-out", duration: 0.1 }}
      whileTap={{ scale: 0.98 }}
      id="projects"
      className="bg-background relative z-20 rounded-[10px] overflow-hidden w-9/10 lg:w-2/3 xl:w-1/2 border border-side border-4 shadow-[10px_10px_0px_0px_#5e794c] font-primary hover:shadow-[0px_0px_0px_0px_#5e794c] hover:scale-[1.05] transition-all duration-500"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <div className="text-xl font-bold text-primary">{title}</div>

        <div className="flex flex-wrap gap-2">
          {techs.map((tech, idx) => (
            <span
              key={idx}
              className="bg-secondary text-side opacity-80 px-3 py-2 text-sm rounded-full font-medium shadow-sm"
            >
              #{tech}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-center bg-side text-secondary hover:shadow-[7px_7px_0px_0px_#5e794c] transition-all duration-500 px-4 py-2 rounded-xl font-medium hover:bg-opacity-90 transition"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
}
