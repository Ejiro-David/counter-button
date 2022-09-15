import { useState } from "react";
import "./App.css";
// import down from '../src/icons/down.png' use icons 

const Counter1 = ({display}) => {
  return (
    <div className="counter1">
        <div className="display">{display}</div>
        <button className="incr">+</button>
        <button className="decr">-</button>
      </div>
  )
}

const Counter2 = ({display}) => {
  return (
    <div className="counter2">
        <div className="display">{display}</div>
        <button className="incr">+</button>
        <button className="decr">-</button>
      </div>
  )
}

function App() {
  const [firstDisplay, setFirstDisplay] = useState(0);
  const [secondDisplay, setSecondDisplay] = useState(0);
  
  return (
    <div className="App">
      <Counter1 display={firstDisplay}/>
      <Counter2 display={secondDisplay}/>
    </div>
  );
}

export default App;
