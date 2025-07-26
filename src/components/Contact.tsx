import RollingGallery from "./MenuCards";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Instagram } from "lucide-react";
import { ReactElement } from "react";

interface contact {
  name: string;
  icon: ReactElement;
  link: string;
}

export default function Contact() {
  const contacts = [
    { name: "github", icon: <Github />, link: "https://github.com/nngtkhngoc" },
    {
      name: "linkedin",
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/khanh-ngoc/",
    },
    {
      name: "nngtkhngoc05@gmail.com",
      icon: <Mail />,
      link: "/",
    },
    {
      name: "nngtkhngoc",
      icon: <Instagram />,
      link: "https://www.instagram.com/nngtkhngoc/",
    },
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

  const renderContacts = (contacts: contact[]) => {
    return contacts.map((contact, idx) => (
      <motion.div
        variants={item}
        key={idx}
        className="bg-secondary cursor-pointer flex flex-row gap-2  px-5 py-3 rounded-[20px] font-bold text-side shadow-[5px_5px_0px_0px_#EDC5C8] hover:bg-side hover:shadow-md hover:text-secondary transition-all duration-500 items-center justify-center"
        onClick={() => {
          window.open(contact.link, "_blank");
        }}
      >
        <div>{contact.icon}</div>
        <div>{contact.name}</div>
      </motion.div>
    ));
  };

  return (
    <div className=" pb-10" id="contact">
      <div className="w-full flex flex-row justify-center items-center md:pl-5 gap-1 lg:pl-10 lg:pr-3 mb-5 pl-3">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "ease-in-out", duration: 1.2 }}
          viewport={{ amount: 0.2 }}
          className="font-secondary text-secondary text-[50px] md:text-[70px] xl:text-[90px] xl:pl-4 text-shadow-lg"
        >
          contact.
        </motion.div>
        <div className="w-full border-dashed border-side my-2 border-2 ml-4"></div>
      </div>

      <div className="w-full flex flex-col items-center justify-center  mobile:flex-row px-4 lg:px-0 lg:-ml-6 ">
        <RollingGallery autoplay={true} pauseOnHover={true} />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          className="flex flex-wrap gap-4 justify-center items-center font-primary xl:w-2/3 mt-5"
        >
          {renderContacts(contacts)}
        </motion.div>{" "}
      </div>
    </div>
  );
}
