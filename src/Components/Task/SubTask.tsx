import { useState, useEffect } from "react";
import { updateSubtasks, getSubTaskRequest } from "../API Requests/Requests";

let nextId = 0;

const SubTask = ({ taskID }) => {
  const [subTask, setSubTask] = useState("");
  const [allSubTasks, setAllSubTasks] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  /// hay que hacer lista de subtasks y subtasks, igual que tasks y task component
  useEffect(() => {
    if (shouldUpdate) {
      getSubTaskRequest(taskID)
        .then((result) => {
          console.log("getSubTaskRequest:", result.subtasks);
          setAllSubTasks(result.subtasks);
          return allSubTasks;
        })
        .catch((error) => console.log("error", error));
      setShouldUpdate(false);
    }
  }, [shouldUpdate, subTask]);

  const addSubTasks = (allSubTasks, newsubtask) => {
    allnewsubtasks = [...allSubTasks, newsubtask];
    const raws = JSON.stringify(allnewsubtasks);
    updateSubtasks(raws, taskID)
      .then((result) => {
        console.log("resultAdd", result);
        setShouldUpdate(true);
        return result;
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <p>{console.log("dd", allSubTasks)}</p>
      <ol>
        {allSubTasks.map((subtask) => (
          <li key={subtask.id}>
            {subtask.name}
            {taskID}
            <button
              onClick={() => {
                setAllSubTasks(allSubTasks.filter((s) => s.id !== subtask.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
      <input
        value={subTask}
        onChange={(e) => setSubTask(e.target.value)}
        placeholder="Add subtask..."
      />
      <button
        onClick={() => {
          setSubTask("");
          setAllSubTasks([...allSubTasks, { id: nextId++, name: subTask }]);
          const newsubtask = { id: nextId++, name: subTask };
          console.log("beforeadd:", newsubtask);
          addSubTasks(allSubTasks, newsubtask);
        }}
      >
        +
      </button>
    </>
  );
};

export default SubTask;
