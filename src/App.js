import "./App.css";
import Todorow from "./Todorow.js";
import AddTask from "./AddTask.js";
import { useState } from "react";

const initial_tasks = [
  { id: 1, taskName: "complete assignment", isCompleted: false },
  { id: 2, taskName: "groceries", isCompleted: false },
  { id: 3, taskName: "painting", isCompleted: false },
  { id: 4, taskName: "jogging", isCompleted: true },
];

function App() {
  const [userInput, setuserInput] = useState("");
  const [displaylist, setDisplaylist] = useState(initial_tasks);

  const all = (t) => t;
  console.log(all);
  const active = (task) => task.isCompleted === false;
  console.log(active);
  const completed = (task) => task.isCompleted === true;
  const [filter, setFilter] = useState(() => all);
  console.log("filter", filter);
  // const FILTER_MAP = {
  //   All: (t) => t,
  //   Active: (task) => task.isCompleted === false,
  //   Completed: (task) => task.isCompleted === true,
  // };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setuserInput(event.target.value);
  };

  const handlebuttonOnClick = () => {
    if (userInput === "") {
      alert("please input the task");
    } else {
      console.log("task is", userInput);
      const afterAddTaskList = [
        ...displaylist,
        { id: displaylist.length + 1, taskName: userInput, isCompleted: false },
      ];
      console.log("afteradd", afterAddTaskList);
      setuserInput("");
      setDisplaylist(afterAddTaskList);
    }
  };
  const [checked, setChecked] = useState("");
  console.log(checked);

  const handleCheckBox = (event) => {
    setChecked(!checked);
    console.log(event.target.value);

    console.log(displaylist);
    displaylist.map((t) =>
      t.taskName === event.target.value ? (t.isCompleted = true) : null
    );

    console.log("after update", displaylist);
    setDisplaylist(displaylist);
  };

  return (
    <div>
      <AddTask
        userInput={userInput}
        handleInputChange={handleInputChange}
        handlebuttonOnClick={handlebuttonOnClick}
      />
      <div>
        <button onClick={() => setFilter(() => all)} value="All">
          All
        </button>
        <button onClick={() => setFilter(() => active)} value="Active">
          Active
        </button>
        <button onClick={() => setFilter(() => completed)}>Completed</button>
      </div>
      {displaylist.filter(filter).map((m) => (
        <Todorow
          key={m.id}
          id={m.id}
          taskName={m.taskName}
          isCompleted={m.isCompleted}
          handleCheckBox={handleCheckBox}
          checked={checked}
        />
      ))}
      {/* {displaylist.map((m) => (
        <Todorow
          key={m.id}
          id={m.id}
          taskName={m.taskName}
          isCompleted={m.isCompleted}
          handleCheckBox={handleCheckBox}
          checked={checked}
        />
      ))} */}
    </div>
  );
}

export default App;
