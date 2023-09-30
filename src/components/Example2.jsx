import React from "react";
function Dog({ name, age }) {
  return (
    <div>
      <p>Dog Name: {name}</p>
      <p>Age: {age}</p>
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
