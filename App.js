import React, { useState } from "react";
import "./App.css";

const App = () => {
  //const [state, setState] = useState({ count: 4, theme: "blue" });
  //const count = state.count;
  //const theme = state.theme;
  //  const countInitial = () => {
  //    console.log("run function");
  //    return 4;
  //  };
  //function good for heavy tasks, renders once
  //const [count, setCount] = useState(() => countInitial());
  //count = current state
  //setCount = updates state
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
    //setState((prevState) => {
    //without ...prevState old (theme) state is overwritten
    //return { ...prevState, count: prevState.count - 1 };
    // });
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
  };

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default App;
