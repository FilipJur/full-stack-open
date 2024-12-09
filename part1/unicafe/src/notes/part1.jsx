/* eslint-disable */
import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const resetToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter}></Display>
      <Button text="Plus" onClick={increaseByOne}></Button>
      <Button text="Reset" onClick={resetToZero}></Button>
      <Button text="Minus" onClick={decreaseByOne}></Button>
    </div>
  );
};

const Display = ({ counter }) => <div>{counter}</div>;
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const App2 = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updateLeft = left + 1;
    setLeft(updateLeft);
    setTotal(updateLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updateRight = right + 1;
    setRight(updateRight);
    setTotal(left + updateRight);
  };

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
      </div>
      <div>
        {right}
        <button onClick={handleRightClick}>right</button>
      </div>
      <p>Total is {total}</p>
      <History allClicks={allClicks}></History>
    </div>
  );
};
