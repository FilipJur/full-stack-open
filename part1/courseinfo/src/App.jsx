/* eslint-disable */
const App = () => {
  const test = "AHOOOOOOOOJ";
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Pozdrav pozdrav={test} />
      <Header course={course.course}></Header>
      <Content
        part1={course.parts[0].exercises}
        exercises1={course.parts[0].exercises}
        part2={course.parts[1].name}
        exercises2={course.parts[1].exercises}
        part3={course.parts[2].name}
        exercises3={course.parts[2].exercises}
      ></Content>
      <Total
        total={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      ></Total>
    </div>
  );
};
const Pozdrav = (props) => {
  return (
    <>
      <h1 style={{ color: "red" }}>{props.pozdrav}</h1>
    </>
  );
};
const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercise={props.exercises1}></Part>
      <Part part={props.part2} exercise={props.exercises2}></Part>
      <Part part={props.part3} exercise={props.exercises3}></Part>
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Total = (props) => {
  return <p>Total number of exercises: {props.total}</p>;
};

export default App;

