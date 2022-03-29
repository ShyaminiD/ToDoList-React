import "./App.css";
export default function Todorow({
  id,
  taskName,
  isCompleted,
  handleCheckBox,
  checked,
}) {
  console.log(id, taskName, isCompleted, checked);
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
      <div className={isCompleted ? "strike" : ""}>
        <p style={styles2}>
          <input
            value={taskName}
            type="checkbox"
            defaultChecked={isCompleted}
            onChange={handleCheckBox}
          />
          <span>{taskName}</span>
        </p>
      </div>
    </div>
  );
}
