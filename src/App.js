import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addOne = () => {
    return setCounter(counter + 1);
  };
  const minOne = () => {
    return setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={addOne}>+</button>
      <h1>{counter}</h1>
      <button onClick={minOne}>-</button>
    </div>
  );
}

export default App;
