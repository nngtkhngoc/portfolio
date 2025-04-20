import About from "../components/About";
import FloatingElements from "../components/FloatingElements";
import Header from "../components/Header";
import Home from "../components/Home";
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import BubbleCursor from "../components/Cursor";
import { useScroll, motion } from "framer-motion";
import Slider from "../components/Slider";
import Contact from "../components/Contact";

export default function Main() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-background relative overflow-x-hidden pb-10">
      <AnimatePresence>
        <BubbleCursor />
        <Header />
        <FloatingElements />
        <Home />
        <Slider />
        <About />
        <Projects />
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: 5,
            originX: 0,
            backgroundColor: "#5e794c",
          }}
        />
        <ScrollToTop />
        <Contact />
        <Slider />
      </AnimatePresence>
    </div>
  );
}
