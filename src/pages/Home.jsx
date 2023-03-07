import { Player } from "@lottiefiles/react-lottie-player";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 600);
  }, []);

  return (
    <section
      id="#"
      className="min-h-[80vh] md:min-h-screen max-w-2xl flex flex-col justify-center items-center md:items-start gap-8 md:gap-16 font-roboto overflow-hidden"
    >
      <h1
        className={`text-secondary font-sourceCodePro text-2xl ml-2 transition duration-500 delay-150 ${
          loaded ? "opacity-0 translate-y-4" : "translate-y-0"
        }`}
      >
        Hi, I'm
      </h1>
      <div
        className={`text-4xl md:text-8xl font-bold  transition duration-500 delay-300 font-roboto ${
          loaded ? "opacity-0 translate-y-4" : "translate-y-0"
        }`}
      >
        <h2>ANSELME</h2>
        <h2>ANSELME</h2>
        <h2>ANSELME</h2>
      </div>

      <h3
        className={`text-gray-400 text-center md:text-left md:text-xl transition duration-500 delay-[450ms] ${
          loaded ? "opacity-0 translate-y-4" : "translate-y-0"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
        dignissimos eum nostrum nemo libero, cupiditate, quae, debitis obcaecati
        vitae dolorum neque voluptatibus excepturi eveniet magni laboriosam
        rerum. A eveniet totam, neque perspiciatis saepe enim, quasi porro,
        veritatis maxime tempora corporis.
      </h3>

      <div
        className={` text-secondary transition duration-500  font-sourceCodePro delay-[600ms]  ${
          loaded ? "opacity-0 translate-y-4 " : "translate-y-0"
        }`}
      >
        <Link
          to={"/resume"}
          className="px-6 md:px-12 py-4 hover:bg-secondary/10 transition duration-300 delay-[0] border border-secondary"
        >
          check out my resume
        </Link>
      </div>

      <div className={`hidden lg:block absolute max-w-sm right-0`}>
        <Parallax speed={-30}>
          <Player autoplay loop src="/assets/LaptopLottie.json" />
        </Parallax>
      </div>
    </section>
  );
}
