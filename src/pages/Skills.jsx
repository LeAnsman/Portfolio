import React from "react";
import CanvasContainer from "../components/CanvasContainer";

export default function Skills() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center pt-20"
      id="skills"
    >
      <div
        className="text-4xl"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h3 className="glitch">MY SKILLS</h3>
        <h3 className="glitch">MY SKILLS</h3>
        <h3 className="glitch">MY SKILLS</h3>
      </div>
      <CanvasContainer />
    </section>
  );
}
