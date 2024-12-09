/* eslint-disable */
import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(
    Object.fromEntries(anecdotes.map((_, index) => [index, 0]))
  );

  const generateRandom = (array) => {
    const random = Math.floor(Math.random() * array.length);
    setSelected(random);
  };

  const handleVote = () => {
    const newVotes = {
      ...votes,
      [selected]: votes[selected] + 1,
    };
    setVotes(newVotes);
  };

  const showMaxVotes = () => {
    const valueNumbers = Object.entries(votes).map(([_, value]) => value);
    const highestVote = Math.max(...valueNumbers);
    const winningEntry = Object.entries(votes).find(
      ([index, voteCount]) => voteCount === highestVote
    );
    console.log(winningEntry);

  };
  showMaxVotes()
  return (
    <>
      <Anecdote
        array={anecdotes}
        index={selected}
        votes={votes[selected]}
      ></Anecdote>
      <button onClick={() => generateRandom(anecdotes)}>Show Anectode</button>
      <button onClick={handleVote}>Vote</button>
    </>
  );
};
const Anecdote = ({ array, index, votes }) => {
  return (
    <>
      <div>{array[index]}</div>
      <div>has {votes} votes</div>
    </>
  );
};

export default App;

