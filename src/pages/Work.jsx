import React from "react";
import Card from "../components/Card";

export default function Work() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center"
      id="work"
    >
      <div className="mb-20 text-4xl" data-aos="fade-up">
        <h4 className="glitch">MY WORK</h4>
        <h4 className="glitch">MY WORK</h4>
        <h4 className="glitch">MY WORK</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
        <Card
          title={"school helper"}
          link={"https://school-helper-app-tsdr7.ondigitalocean.app/"}
          firstTag={"react"}
          secondTag={"front"}
        />
        <Card
          title={"r3f landing page"}
          link={"/"}
          firstTag={"r3f"}
          secondTag={"front"}
        />
        <Card
          title={"aircnc"}
          link={"https://airc-n-c.vercel.app/"}
          firstTag={"js"}
          secondTag={"full"}
        />
        <Card
          title={"stockz"}
          link={"https://stockz.vercel.app/"}
          firstTag={"js"}
          secondTag={"full"}
        />
      </div>
    </section>
  );
}
