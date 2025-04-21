import { useState } from "react";
import { House, User, FolderOpenDot, Phone } from "lucide-react";
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface option {
  text: string;
  icon: ReactNode;
}

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const options = [
    {
      text: "Home",
      icon: (
        <House className="flex items-center-justify-center text-primary w-5 h-5" />
      ),
    },
    {
      text: "About",
      icon: (
        <User className="flex items-center-justify-center text-primary w-5 h-5" />
      ),
    },
    {
      text: "Projects",
      icon: (
        <FolderOpenDot className="flex items-center-justify-center text-primary w-5 h-5" />
      ),
    },
    {
      text: "Contact",
      icon: (
        <Phone className="flex items-center-justify-center text-primary w-5 h-5" />
      ),
    },
  ];
  const renderOptions = (options: option[]) => {
    return options.map((option, index) => (
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        key={index}
        className="bg-white shadow-lg rounded-full w-[40px] h-[40px] flex flex-col items-center justify-center focus:bg-side"
        onClick={() => {
          setOpenSidebar(!openSidebar);
        }}
        href={`#${option.text.toLowerCase()}`}
      >
        {option.icon}
      </motion.a>
    ));
  };

  return (
    <div className="font-primary flex relative">
      <label className="flex flex-col gap-2 w-8  absolute -right-5 -top-3 ">
        <input
          className="peer hidden  absolute -right-5 -top-3"
          type="checkbox"
          onChange={() => {
            setOpenSidebar(!openSidebar);
          }}
        />
        <div className="rounded-2xl h-[3px] w-1/2 bg-primary duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
        <div className="rounded-2xl h-[3px] w-full bg-primary duration-500 peer-checked:-rotate-45"></div>
        <div className="rounded-2xl h-[3px] w-1/2 bg-primary duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
        <AnimatePresence initial={false}>
          {openSidebar && (
            <motion.div
              initial={{ opacity: 1, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ type: "spring" }}
              key="box"
              className="sticky right-0 py-20 bottom-0 h-full w-full z-2 flex flex-col gap-7 items-center justify-center z-50"
            >
              {renderOptions(options)}
            </motion.div>
          )}
        </AnimatePresence>
      </label>
    </div>
  );
}
