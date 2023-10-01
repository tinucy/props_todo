import React from "react";

function Tasks(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <li>
          {item.id} | {item.name}
        </li>
      ))}

      <h2>Returing only one element of the array</h2>

      {items.map((item) => (
        <li>{item.name}</li>
      ))}

      <h2>Intoducing a unique key for each child</h2>

      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default function Example7() {
  const itemsArray = [
    { id: 1, name: "go shopping" },
    { id: 2, name: "go to the gym" },
    { id: 3, name: "go to the movies" },
  ];

  return <Tasks items={itemsArray} />;
}
