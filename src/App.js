import "./App.css";
import Todorow from "./Todorow.js";
import AddTask from "./AddTask.js";
import { useState } from "react";

const initial_tasks = [
  { id: 1, taskName: "complete assignment", isCompleted: false },
  { id: 2, taskName: "groceries", isCompleted: false },
  { id: 3, taskName: "painting", isCompleted: false },
];
const completedTasks = [];

function App() {
  const [userInput, setuserInput] = useState("");
  const [displaylist, setDisplaylist] = useState(initial_tasks);
  const activeTasks = displaylist;

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setuserInput(event.target.value);
  };

  const handlebuttonOnClick = () => {
    if (userInput === "") {
      alert("please input the task");
    } else {
      console.log("task is", userInput);
      let afterAddTaskList = [
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
    console.log(event.target.value);
    console.log(displaylist);
    displaylist.map((t) =>
      t.taskName === event.target.value
        ? (t.isCompleted = true)
        : (t.isCompleted = false)
    );
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
        <button>All</button>
        <button>Active</button>

        <button>Completed</button>
      </div>
      {displaylist.map((m) => (
        <Todorow
          key={m.id}
          id={m.id}
          taskName={m.taskName}
          isCompleted={m.isCompleted}
          handleCheckBox={handleCheckBox}
          checked={checked}
        />
      ))}
    </div>
  );
}

export default App;
