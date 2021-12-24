import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("k");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h2>{firstValue}</h2>
      <h2>{secondValue}</h2>
    </>
  );
};

export default ShortCircuit;
