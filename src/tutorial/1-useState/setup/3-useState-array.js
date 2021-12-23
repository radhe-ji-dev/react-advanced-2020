import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeitems = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="items">
            <h3>{name}</h3>
            <button className="rmv" onClick={() => removeitems(id)}>
              Remove item
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;
