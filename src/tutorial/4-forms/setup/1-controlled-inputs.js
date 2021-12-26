import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");

  const clickhandle = (e) => {
    e.preventDefault();
    console.log("btn clicked");
  };
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="fisrtname"> NAME</label>
            <input type="text" id="fisrtname" name="firsrname"></input>
          </div>
          <div className="form-control">
            <label htmlFor="fisrtname">Email</label>
            <input type="text" id="email" name="email"></input>
            <button type="submit" className="btn" onClick={clickhandle}>
              click me
            </button>
          </div>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
