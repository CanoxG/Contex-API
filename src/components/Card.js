import React from "react";
import "./App.css";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      {props.name && <p>Age: {props.age}</p>}
      <p>{props.powers}</p>
      <p>{props.secretIdentity}</p>
      <hr />
    </div>
  );
}

export default Card;
