import React from "react";
function Dog(props) {
  return (
    <div>
      <p>Dog Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default function Example2() {
  return (
    <>
      <div>
        <Dog name="Bingo" age={3} />
        <Dog name="Fufu" age={1} />
      </div>
    </>
  );
}
