import React from "react";

// props == basicInfo

const PersonObject = (props) => {
  return (
    <div>
      <p>{props.person.fullName}</p>

      <p>{props.person.email}</p>

      <p>{props.person.number}</p>

      <p>{props.person.food}</p>

      <p>{props.person.car}</p>
    </div>
  );
};
export default PersonObject;
