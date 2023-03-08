import { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";

export default function Layout() {
  const [scrollP, setScrollP] = useState(0);

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };
  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);
    setScrollP(scrollPostion);
  };

  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        // Calculates the scroll distance
        calculateScrollDistance();
      });
    });
  };

  useEffect(() => {
    listenToScrollEvent();
  }, []);

  return (
    <ParallaxProvider>
      <div className="bg-gradient-to-tr from-primary to-[#25354d]">
        <header>
          <ProgressBar scroll={scrollP} />
          <Navigation />
        </header>
        <main className="overflow-hidden max-w-5xl mx-10 xl:mx-auto">
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </main>
      </div>
    </ParallaxProvider>
  );
}
