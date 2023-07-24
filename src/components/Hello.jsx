import React from "react";

const Hello = () => {
  const hellos = [];
  for (let i = 0; i < 50; i++) {
    hellos.push(<h1 key={i}>Hello</h1>);
  }
  return hellos;
};

export default Hello;
