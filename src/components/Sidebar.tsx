import { useState } from "react";
import { FloatButton } from "antd";
import { House, User, FolderOpenDot, Phone } from "lucide-react";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      <FloatButton
        key={index}
        icon={option.icon}
        tooltip={<div className="font-primary ">{option.text}</div>}
        style={{ backgroundColor: "#edc5c8" }}
      />
    ));
  };

  return (
    <div className="font-primary">
      <label className="flex flex-col gap-2 w-8 z-50 absolute right-4 top-7">
        <input
          className="peer hidden "
          type="checkbox"
          onChange={() => {
            setOpenSidebar(!openSidebar);
            console.log(openSidebar);
          }}
        />
        <div className="rounded-2xl h-[3px] w-1/2 bg-primary duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
        <div className="rounded-2xl h-[3px] w-full bg-primary duration-500 peer-checked:-rotate-45"></div>
        <div className="rounded-2xl h-[3px] w-1/2 bg-primary duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
      </label>

      <AnimatePresence initial={false}>
        {openSidebar ? (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: 100,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              x: 100,
            }}
            transition={{ duration: 0.6 }}
            className="fixed right-0 top-72 h-max w-max"
          >
            <FloatButton.Group
              shape="circle"
              style={{ top: "-20px", right: "10px" }}
              placement="right"
            >
              {renderOptions(options)}
            </FloatButton.Group>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
