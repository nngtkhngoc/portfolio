import { motion } from "framer-motion";

interface ProjectCardProps {
  image: string;
  title: string;
  techs: string[];
  link: string;
  index: number;
}

export default function ProjectCard({
  image,
  title,
  techs,
  link,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      id="projects"
      className="bg-background relative z-20 rounded-[10px] overflow-hidden w-[350px] h-[400px] border border-side border-4 shadow-[10px_10px_0px_0px_#5e794c] font-primary hover:shadow-[0px_0px_0px_0px_#5e794c] hover:scale-[1.05] transition-all duration-500"
      key={index}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
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
        </div>
      </a>
    </motion.div>
  );
}
