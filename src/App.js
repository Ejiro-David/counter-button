import { useContext, useState } from "react";
import "./App.css";
import { ContextProvider } from "./context";
// import down from '../src/icons/down.png' use icons



const Counter1 = () => {
  const [display, setDisplay] = useState(0);

  const handleIncr = () => {
    setDisplay(display + 1);
  };

  const handleDecr = () => {
    setDisplay(display - 1);
  };

  return (
    <div className="counter1">
      <div className="display">{display}</div>
      <button className="incr" onClick={handleIncr}>
        +
      </button>
      <button className="decr" onClick={handleDecr}>
        -
      </button>
    </div>
  );
};

const Counter2 = () => {
  const [display, setDisplay] = useState(0);

  const handleIncr = () => {
    setDisplay(display + 1);
  };

  const handleDecr = () => {
    setDisplay(display - 1);
  };

  return (
    <div className="counter2">
      <div className="display">{display}</div>
      <button className="incr" onClick={handleIncr}>
        +
      </button>
      <button className="decr" onClick={handleDecr}>
        -
      </button>
    </div>
  );
};

function App() {
  const darkMode = useContext(ContextProvider);
  console.log(darkMode)

  return (
      <div className="App">
      <button className="darkmode" onClick={'c'}>dark--light</button>
        <Counter1 />
        <Counter2 />
      </div>

  );
}

export default App;
