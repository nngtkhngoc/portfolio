import mobileprofile from "../assets/profile.png";
import green from "../assets/greenicon.png";
import pink from "../assets/pinkicon.png";
import { motion } from "framer-motion";
export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "src/assets/NguyenThiKhanhNgoc_Resume_Fullstack.pdf"; // hoặc URL động
    link.download = "NguyenThiKhanhNgoc_Resume.pdf"; // tên file sau khi tải về
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="home"
      className="w-full pb-6 items-center justify-center flex flex-col py-3 relative font-primary gap-8 md:grid md:grid-cols-2 md:px-20 xl:gap-x-10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.9 }}
        transition={{ type: "ease-in-out", duration: "0.8" }}
        className="w-full items-center justify-center flex flex-col  md:order-1 md:col-span-1 "
      >
        <motion.img
          initial={{ opacity: 1, y: 0 }}
          animate={{
            y: [0, 5, 0],
            x: [0, 10, 0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          src={pink}
          alt="icon"
          className="absolute left-5 top-10 w-[40px] z-5 h-[46px] md:left-108 xl:left-200 xl:w-[50px] xl:h-[56px]"
        />
        <motion.img
          src={green}
          alt="icon"
          className="absolute right-10 bottom-100 z-10 w-[68px] md:right-30 md:bottom-10 xl:right-75 xl:w-[88px]"
          initial={{ opacity: 1, y: 0 }}
          animate={{
            y: [0, 5, 0],
            x: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.img
          animate={{
            opacity: 1,
            x: [0, 0, 5, -10, 0],
            y: [0, -5, 0],
          }}
          initial={{ opacity: 0, translateX: 400 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            x: {
              delay: 0.8,
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
            y: {
              delay: 0.8,
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
          src={mobileprofile}
          alt="dev"
          className="w-4/5 md:w-full lg:w-4/5 xl:place-self-start"
        />
      </motion.div>
      <div className="text-primary text-[20px] flex flex-col items-center px-4 md:col-span-1 md:items-start w-full xl:pl-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.8 }}
          transition={{ type: "ease-in-out", duration: "0.8" }}
          className="lg:text-[35px] mb-2 md:mx-2 lg:mb-2 xl:mb-4 w-max animate-typing whitespace-nowrap overflow-hidden border-r-[2px] border-r-primary"
        >
          Hello, I'm
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ amount: 0.8 }}
          transition={{ type: "ease-in-out", duration: "1.2" }}
          className="xl:text-[90px]  xl:before:-bottom-7 font-secondary text-secondary text-[40px] lg:text-[60px] w-max h-max px-2 text-sm/6 md:text-sm/8 md:text-[45px] relative z-10 text-center before:absolute before:-z-5 before:w-full before:h-1/2 before:bg-side before:left-0 before:-bottom-3"
        >
          Khanh Ngoc
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.8 }}
          transition={{ type: "ease-in-out", duration: "1.5", delay: 0.2 }}
          className="text-primary text-[14px] pt-8 px-2 md:pl-2 md:pr-0 md:pt-5 lg:pt-8 text-sm/6 text-justify w-full lg:pr-20 xl:pt-13"
        >
          Second-year Software Engineering student with foundational knowledge
          in full-stack web development. Passionate about problem solving, quick
          to learn, and eager to contribute to a dynamic product team.
        </motion.div>
        <motion.button
          onClick={handleDownload}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.8 }}
          transition={{ type: "ease-in-out", duration: "0.8" }}
          className="mt-5 text-[20px] text-side bg-secondary transform rounded-[6px] px-6 py-3  relative z-10 hover:before:translate-x-0 hover:before:translate-y-0 before:transition-all before:duration-500 before:-z-5 hover:before:bg-side hover:text-secondary before:w-full before:h-full before:border-side before:border-[1px] before:top-0 before:left-0 before:border before:absolute before:rounded-[6px] before:transform before:-translate-x-[5px] before:-translate-y-[5px]"
        >
          Resume
        </motion.button>
      </div>
    </div>
  );
}
