import React from "react";

export default function Example6() {
  const hobbies = ["movies", "music", "sports", "cooking"];

  const todos = [
    {
      id: 1,
      text: "Take out trash",
      isCompleted: true,
    },

    {
      id: 2,
      text: "Meeting with boss",
      isCompleted: true,
    },

    {
      id: 3,
      text: "Dentist appt",
      isCompleted: false,
    },
  ];

  return (
    <div>
      {hobbies.map((h) => (
        <li>I love {h}</li>
      ))}

      <h3>"-------------------------------"</h3>

      {todos.map((todo) => (
        <li>{todo.text}</li>
      ))}
      <h3>"-------------------------------"</h3>
      {todos.map((todo, index) => (
        <li>
          {index} {"|  "}
          {todo.text}
        </li>
      ))}
    </div>
  );
}
