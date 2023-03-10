import React from "react";

export default function Card({
  title,
  link,
  firstTag,
  secondTag,
  thirdTag,
  fourthTag,
  backgroundImg,
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="relative text-white font-sourceCodePro bg-cover bg-center group transition duration-300 lg:hover:translate-y-16"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <p className="absolute left-5 top-2 font-medium bg-secondary/50 px-4 py-2 rounded-lg text-sm transition duration-500 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-16">
        {firstTag}
      </p>
      <p className="absolute right-5 top-2 font-medium bg-secondary/50 px-4 py-2 rounded-lg text-sm transition duration-500 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-16">
        {secondTag}
      </p>
      <p className="absolute left-5 bottom-2 font-medium bg-secondary/50 px-4 py-2 rounded-lg text-sm transition duration-300  lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:z-10">
        {thirdTag}
      </p>
      <p className="absolute right-5 bottom-2 font-medium bg-secondary/50 px-4 py-2 rounded-lg text-sm transition duration-300  lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:z-10">
        {fourthTag}
      </p>
      <div className="lg:relative h-72 lg:h-80 w-72 sm:w-64 lg:w-56 bg-primary/50  border border-secondary cursor-pointer flex justify-center items-center">
        <p className="text-center">{title}</p>
      </div>
    </a>
  );
}
