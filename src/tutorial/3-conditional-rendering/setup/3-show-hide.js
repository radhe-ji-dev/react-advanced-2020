import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const givesize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", givesize);
  }, []);

  return (
    <div style={{ margiTop: "2rem" }}>
      <h1>{size}</h1>
    </div>
  );
};

export default ShowHide;
