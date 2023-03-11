import React from "react";
import SocialLinks from "./SocialLinks";

export default function ContactLinks() {
  return (
    <div data-aos="fade-left" data-aos-anchor-placement="top-bottom">
      <p className="font-sourceCodePro text-xl text-white text-center">
        you can also{" "}
        <span className="font-bold text-secondary">take a look</span> at my{" "}
        <span className="font-bold text-secondary">socials</span>
      </p>
      <div className="flex justify-center gap-20 sm:gap-40 py-12 text-white">
        <SocialLinks size={48} />
      </div>
    </div>
  );
}
