import React from "react";

export default function Navigation() {
  return (
    <nav className="flex justify-center items-center py-4 ">
      <div className="hover-underline-animation-nav animate-pulse">
        <a href="/" className="text-xl flex justify-center items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          back to the portfolio
        </a>
      </div>
    </nav>
  );
}
