import React from "react";

export default function Example5() {
  const age = 30 + 5;
  const hobbies = ["movies", "music", "sports"];
  const address1 = ["50 Main St", "Boston", "MA"];

  const address = {
    street: "50 Main St",
    city: "Boston",
    state: "MA",
  };

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
    <>
      <div>{name}</div>
      <div>{age}</div>
      <div>{hobbies[0]}</div>
      <div>{address.street}</div>
      <div>{address["street"]}</div>
      <div>{todos[0]["text"]}</div>
      <div>{todos[1]["text"]}</div>

      <div>{todos[2]["text"]}</div>
      <div>{todos[2].text}</div>
      <div>{todos[1].isCompleted}</div>
    </>
  );
}
