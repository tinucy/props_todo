import React from "react";

//function Greetings({ name, prof, title } ) {
//same as below for the first two lines

function Greetings(props) {
  const { name, prof, title } = props; //Destructuring
  return (
    <div>
      Hello, {name} I am a {prof}. My title is {title}.
    </div>
  );
}

export default function Example1() {
  return (
    <div>
      <Greetings name="Tinuola" prof="software engineer" title="Mr" />
      <Greetings name="Glory" prof="Doctor" title="Miss" />
    </div>
  );
}
