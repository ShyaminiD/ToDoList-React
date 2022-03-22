import "./App.css";

import { useState } from "react";

function App() {
  // for capturing input value from input box;
  const [task, setTasks] = useState([]);

  const onchangeInput = (event) => {
    setTasks(event.target.value);
  };
  //for capturing task on Click of button;

  const [taskAdding, setTaskAdding] = useState([]);
  console.log("taskadding", taskAdding);

  const onclickButton = () => {
    setTaskAdding([...taskAdding, task]);
  };
  const buttonStyles = { width: "100px" };
  return (
    <div className="App">
      <div className="container">
        <div className="inputrow">
          <input
            className="taskInput"
            type="text"
            onChange={onchangeInput}
            placeholder="New Task..."
          />

          <button
            variant="primary"
            style={buttonStyles}
            onClick={onclickButton}
          >
            Add Task
          </button>
        </div>
        <div className="filter-contents">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        {taskAdding.map((tas) => (
          <Taskadd t={tas} />
        ))}

        {/* {taskAdding.map((tas) => (
          <Taskadd t={tas} />
        ))} */}
      </div>
    </div>
  );
}

function Taskadd({ t }) {
  console.log("t", t);
  const styles = {
    backgroundColor: "pink",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    margin: "8px",
  };
  const styles2 = {
    display: "flex",
    flexDirection: "row",
  };
  return (
    <div style={styles}>
      <div style={styles2}>
        <p>
          <input type="checkbox" value={t} />
          {t}
        </p>
      </div>
    </div>
  );
}

export default App;
