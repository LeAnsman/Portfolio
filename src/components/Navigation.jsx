import React, { useEffect, useState } from "react";

export default function Navigation() {
  // hide header on scrool
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 80 && currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full bg-gradient-to-b backdrop-blur-sm from-white/5 to-black/10 shadow-lg flex items-center justify-center md:justify-between px-36 py-6 transition duration-500 z-50 ${
        visible ? "lg:translate-y-0" : "lg:-translate-y-[100px] "
      }`}
    >
      <a href="#" className="animate-fadeIn">
        <img src="/assets/Logo.png" alt="" className="w-8 h-7" />
      </a>
      <ul className="hidden md:flex gap-10 text-white font-sourceCodePro text-sm">
        <li
          className={`
            transition duration-300 ${
              loaded ? "translate-x-0" : "translate-x-10 opacity-0"
            }
          `}
        >
          <a
            href="#about"
            className="hover-underline-animation-nav transition duration-300 hover:text-secondary"
          >
            <span className="text-secondary">01.</span>
            about
          </a>
        </li>
        <li
          className={`
            transition duration-300 delay-150 ${
              loaded ? "translate-x-0" : "translate-x-10 opacity-0"
            }
          `}
        >
          <a
            href="#skills"
            className="hover-underline-animation-nav transition duration-300 hover:text-secondary"
          >
            <span className="text-secondary">02.</span>
            skills
          </a>
        </li>
        <li
          className={`
                  transition duration-300 delay-300 ${
                    loaded ? "translate-x-0" : "translate-x-10 opacity-0"
                  }
                `}
        >
          <a
            href="#work"
            className="hover-underline-animation-nav transition duration-300 hover:text-secondary"
          >
            <span className="text-secondary">03.</span>
            work
          </a>
        </li>
        <li
          className={`
            transition duration-300 delay-[450ms] ${
              loaded ? "translate-x-0" : "translate-x-10 opacity-0"
            }
          `}
        >
          <a
            href="#contact"
            className="hover-underline-animation-nav transition duration-300 hover:text-secondary"
          >
            <span className="text-secondary ">04.</span>
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
