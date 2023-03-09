import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function SocialLinks({ size }) {
  return (
    <>
      <a href="https://github.com/LeAnsman" target="_blank">
        <BsGithub
          size={size}
          className="transition duration-300 hover:fill-secondary"
        />
      </a>
      <a href="https://www.linkedin.com/in/anselme-dor/" target="_blank">
        <BsLinkedin
          size={size}
          className="transition duration-300 hover:fill-secondary"
        />
      </a>
    </>
  );
}
