import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const getSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("hy");
    window.addEventListener("resize", getSize);
    return () => {
      console.log("go");
      window.removeEventListener("resize", getSize);
    };
  });
  return (
    <>
      <h2>Window</h2>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
