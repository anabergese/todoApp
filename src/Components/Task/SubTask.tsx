import { useState } from "react";
const SubTask = () => {
  const [inputSubTask, setInputSubTask] = useState("");
  const [myArray, setMyArray] = useState([]);

  const handleSubmit = (inputSubTask) => {
    const newSubTask = {
      subtask: inputSubTask,
      id: Math.random(),
    };
    setMyArray([...myArray, newSubTask]);
    setInputSubTask("");
    return myArray;
  };

  return (
    <>
      <div>
        {!myArray.length ? (
          <p>no substasks</p>
        ) : (
          <ol>
            {myArray.map((step) => {
              return <li key={step.id}>{step.subtask}</li>;
            })}
          </ol>
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(inputSubTask);
        }}
      >
        <label htmlFor="subtask">
          <input
            type="text"
            name="subtask"
            value={inputSubTask}
            className="subtask__input"
            placeholder="Add Subtask..."
            onChange={(e) => {
              setInputSubTask(e.target.value);
            }}
          />
        </label>
        <button>+</button>
      </form>
    </>
  );
};

export default SubTask;
