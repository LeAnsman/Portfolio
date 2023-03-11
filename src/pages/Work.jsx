import React from "react";
import Card from "../components/Card";

export default function Work() {
  return (
    <section
      className="min-h-screen lg:min-h-[80vh] flex flex-col justify-center items-center"
      id="work"
    >
      <div className="mb-20 text-4xl" data-aos="fade-up">
        <h4 className="glitch">MY WORK</h4>
        <h4 className="glitch">MY WORK</h4>
        <h4 className="glitch">MY WORK</h4>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 mb-28 sm:mb-0"
        data-aos="fade-right"
      >
        <Card
          title={"school helper"}
          link={"https://school-helper-app-tsdr7.ondigitalocean.app/"}
          backgroundImg={"assets/images/SchoolHelper.png"}
          firstTag={"react"}
          secondTag={"ui/ux"}
          thirdTag={"learning"}
          fourthTag={"front"}
        />
        <Card
          title={"r3f landing page"}
          link={"/"}
          firstTag={"react"}
          secondTag={"r3f"}
          thirdTag={"3d"}
          fourthTag={"front"}
        />
        <Card
          title={"aircnc"}
          link={"https://airc-n-c.vercel.app/"}
          firstTag={"react"}
          secondTag={"nodejs"}
          thirdTag={"learning"}
          fourthTag={"full"}
        />
        <Card
          title={"stockz"}
          link={"https://stockz.vercel.app/"}
          backgroundImg={"assets/images/StockZ.png"}
          firstTag={"react"}
          secondTag={"redux"}
          thirdTag={"learning"}
          fourthTag={"full"}
        />
      </div>
    </section>
  );
}
