export default function AddTask({
  userInput,
  handleInputChange,
  handlebuttonOnClick
}) {
  return (
    <div>
      <input type="text" value={userInput} onChange={handleInputChange} />
      <button onClick={handlebuttonOnClick}>AddTask</button>
    </div>
  );
}
