import Logo from "./Logo";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

export default function Header() {
  const options = ["Home", "About", "Projects", "Contact"];
  const renderOptions = (options: string[]) => {
    return options.map((option) => (
      <a
        href={`#${option.toLowerCase()}`}
        className="text-primary font-primary text-[18px] font-medium hover:font-semibold w-[98px] text-center"
      >
        {option}
      </a>
    ));
  };
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky w-full top-0 z-40 text-side h-[80px] flex flex-row px-10 font-primary bg-background items-center ${
        isScrolled && "bg-white/30 backdrop-blur-xl"
      }`}
    >
      <div className="w-full h-full flex flex-row items-center justify-center md:justify-start md:grid md:grid-cols-10">
        <div className="col-span-1">
          <Logo />
        </div>
        <div className="hidden md:block md:col-span-9 md:flex md:flex-row md:justify-center md:items-center md:gap-7">
          <div className="hidden lg:block w-full border border-dashed border-2  ml-6">
            {" "}
          </div>
          {renderOptions(options)}
          <div className="hidden lg:block w-full border border-dashed border-2  ml-6">
            {" "}
          </div>
        </div>
      </div>

      <div className="h-full flex flex-row items-center justify-center md:hidden ">
        <Sidebar />
      </div>
    </div>
  );
}
