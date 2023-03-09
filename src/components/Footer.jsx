import React from "react";
import SocialLinks from "./SocialLinks";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-secondary/10 text-white py-4"
      data-aos="fade-in"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="flex justify-between mx-10">
        <p className="text-center text-sm">© 2023 Anselme Dor.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
