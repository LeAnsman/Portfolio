import React, { useEffect, useState } from "react";

export default function ProgressBar({ scroll }) {
  return (
    <>
      <div
        className={`
       fixed w-full h-1 z-[60] bg-transparent 
      `}
      >
        <div
          className={`h-1 z-[70] bg-secondary`}
          style={{ width: scroll + "%" }}
        ></div>
      </div>
    </>
  );
}
