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
      className="min-h-screen max-w-2xl xl:max-w-3xl mx-auto sm:mx-0 flex flex-col justify-center items-start gap-16 font-roboto overflow-hidden"
    >
      <p
        className={`text-secondary font-sourceCodePro text-2xl ml-2 transition duration-500 delay-150 ${
          loaded ? "translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Hi, I'm
      </p>
      <div
        className={`text-4xl sm:text-8xl font-bold  transition duration-500 delay-300  ${
          loaded ? "translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="glitch">ANSELME</h1>
        <h1 className="glitch">ANSELME</h1>
        <h1 className="glitch">ANSELME</h1>
      </div>

      <div
        className={`text-gray-400  sm:text-lg transition duration-500 delay-[450ms] ${
          loaded ? "translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="font-bold text-gray-300 pb-4">Welcome to my portfolio!</p>
        <p>
          I am a junior full stack web developer specialized in JavaScript,
          React, and Node.js. My aim is to deliver efficient and user-friendly
          web applications with attractive designs. I am passionate about what I
          do and am always looking for new and innovative ways to improve my
          skills.
        </p>
      </div>
      <div
        className={`transition duration-500 delay-[600ms] ${
          loaded ? "translate-y-0" : "opacity-0 translate-y-4 "
        }`}
      >
        <div
          className="btn__home  font-sourceCodePro text-secondary border border-secondary py-4"
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
      <div className="hidden lg:block absolute max-w-sm right-0">
        <Parallax speed={-20}>
          <Player autoplay loop src="/assets/LaptopLottie.json" />
        </Parallax>
      </div>
    </section>
  );
}
