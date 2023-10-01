import React from "react";

function Child(props) {
  //const { name, age, isStudent } = props;

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Is student? {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default function Example3() {
  const name = "Maria";
  const age = 50;
  const isStudents = true;

  const person = {
    name: "David",
    age: 29,
    isStudent: false,
  };

  const students = {
    name: "David",
    age: 29,
    isStudent: false,
  };

  return (
    <>
      <Child
        name={students.name}
        age={students.age}
        isStudent={students.isStudent}
      />
      <Child name={name} age={age} isStudent={isStudents} />
      <Child {...person} />
    </>
  );
}
