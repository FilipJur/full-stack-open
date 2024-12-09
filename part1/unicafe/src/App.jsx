/* eslint-disable */
import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    const update = good + 1;
    setGood(update);
    setTotal(update + bad + neutral);
  };
  const handleBadClick = () => {
    const update = bad + 1;
    setBad(update);
    setTotal(update + neutral + good);
  };
  const handleNeutralClick = () => {
    const update = neutral + 1;
    setNeutral(update);
    setTotal(update + good + bad);
  };
  const reset = () => {
    setTotal(0)
    setBad(0)
    setGood(0)
    setNeutral(0)
  }
  const average = () => {
    return total === 0 ? 0 : (good - bad) / total;
  };
  const positive = () => {
    return total === 0 ? 0 : (good / total) * 100;
  };
  return (
    <div>
      <h1>UniCafe</h1>
      <hr />
      <h2>Feedback</h2>
      <div className="buttons">
        <Button buttonText="Good" onClick={handleGoodClick}></Button>
        <Button buttonText="Neutral" onClick={handleNeutralClick}></Button>
        <Button buttonText="Bad" onClick={handleBadClick}></Button>
        <Button buttonText="Reset" onClick={reset}></Button>
      </div>
      <hr />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        all={total}
        average={average()}
        positive={positive()}
      />
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.buttonText}</button>;
};

const Statistics = (props) => {
  return (
    <>
      <h2>Statistics</h2>
      {props.all != 0 ? (
        <table>
          <tbody>
            <StatisticsLine text={"good"} value={props.good}></StatisticsLine>
            <StatisticsLine
              text={"neutral"}
              value={props.neutral}
            ></StatisticsLine>
            <StatisticsLine text={"bad"} value={props.bad}></StatisticsLine>
            <StatisticsLine text={"total"} value={props.all}></StatisticsLine>
            <StatisticsLine
              text={"average"}
              value={props.average}
            ></StatisticsLine>
            <StatisticsLine text={"positive"} value={props.positive}>
              %
            </StatisticsLine>
          </tbody>
        </table>
      ) : (
        <div>Feedback empty</div>
      )}
    </>
  );
};

export default App;

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

