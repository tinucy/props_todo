import React from "react";

function Child(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Is student? {props.isStudent ? "Yes" : "No"}</p>
      <p></p>
    </div>
  );
}

export default function Example3() {
  const person = {
    name: "David",
    age: 29,
    isStudent: false,
  };
  return <Child {...person} />;
}
