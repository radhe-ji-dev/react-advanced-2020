import React, { useState } from "react";
//use state return an array

const UseStateBasics = () => {
  const [text, setText] = useState("Random Title");
  const clickhandel = () => {
    if (text === "Random Title") {
      setText("change to name");
    } else {
      setText("Random Title");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button onClick={clickhandel}>click me</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
