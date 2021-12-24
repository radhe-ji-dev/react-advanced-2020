import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 27,
    title: "random title",
  });

  const changeTitle = () => {
    setPerson({ ...person, title: "titile is change on click" });
  };
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.title}</h2>
      <button className="btn" onClick={changeTitle}>
        clcik me
      </button>
    </>
  );
};

export default UseStateObject;
