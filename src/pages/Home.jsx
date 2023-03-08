import { Player } from "@lottiefiles/react-lottie-player";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 600);
  }, []);

  return (
    <section
      id="#"
      className="min-h-screen max-w-2xl flex flex-col justify-center items-center sm:items-start gap-16 font-roboto overflow-hidden"
    >
      <h1
        className={`text-secondary font-sourceCodePro text-2xl ml-2 transition duration-500 delay-150 ${
          loaded ? "translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Hi, I'm
      </h1>
      <div
        className={`text-4xl sm:text-8xl font-bold  transition duration-500 delay-300 font-sourceCodePro ${
          loaded ? "translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2>ANSELME</h2>
        <h2>ANSELME</h2>
        <h2>ANSELME</h2>
      </div>

      <h3
        className={`text-gray-400 text-center sm:text-left sm:text-xl transition duration-500 delay-[450ms] ${
          loaded ? "translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Welcome to my portfolio!
        <br />I am a fullstack web developer specialized in JavaScript, React,
        and Node.js. My aim is to deliver efficient and user-friendly web
        applications with attractive designs. I am passionate about what I do
        and am always looking for new and innovative ways to improve myself.
      </h3>
      <div
        className={`transition duration-500 delay-[600ms] ${
          loaded ? "translate-y-0" : "opacity-0 translate-y-4 "
        }`}
      >
        <div
          className={` py-4 text-secondary border border-secondary  font-sourceCodePro  btn__home`}
          id="btn"
        >
          <Link
            to={"/resume"}
            className="px-6 sm:px-12 py-4 transition duration-500 hover:text-primary"
          >
            check out my resume
          </Link>
        </div>
      </div>

      <div
        className={`hidden lg:block absolute max-w-sm right-0 transition duration-150 ${
          loaded ? "opacity-1" : "opacity-0"
        }`}
      >
        <Parallax speed={-35}>
          <Player autoplay loop src="/assets/LaptopLottie.json" />
        </Parallax>
      </div>
    </section>
  );
}
