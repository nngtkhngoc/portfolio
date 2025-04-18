import About from "../components/About";
import FloatingElements from "../components/FloatingElements";
import Header from "../components/Header";
import Home from "../components/Home";
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";
export default function Main() {
  return (
    <div className="bg-background relative">
      <Header />
      <FloatingElements />
      <Home />
      <About />
      <Projects />
      <ScrollToTop />
    </div>
  );
}
