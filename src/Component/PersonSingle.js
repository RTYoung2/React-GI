import React from "react";

// props == basicInfo

const PersonSingle = (props) => {
  return (
    <div>
      <p>{props.fullName}</p>

      <p>{props.email}</p>

      <p>{props.number}</p>
    </div>
  );
};
export default PersonSingle;
