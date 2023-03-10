import React from "react";

export default function Card({ title, link, firstTag, secondTag }) {
  return (
    <a
      href={link}
      target="_blank"
      className="relative text-white  font-sourceCodePro"
    >
      <p className="absolute left-5 top-2 text-primary font-medium bg-secondary px-4 py-2 rounded-lg">
        {firstTag}
      </p>

      <p className="absolute right-5 top-2 text-primary font-medium bg-secondary px-4 py-2 rounded-lg">
        {secondTag}
      </p>
      <div className="relative h-72 xl:h-80 w-56 bg-primary border border-secondary transition duration-300 cursor-pointer flex justify-center items-center hover:translate-y-16">
        <p className="text-center">{title}</p>
      </div>
    </a>
  );
}
