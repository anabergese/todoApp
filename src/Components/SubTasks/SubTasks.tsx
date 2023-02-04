import { useState, useEffect, FunctionComponent, FormEvent } from "react";
import { getSubTaskRequest, updateSubtasks } from "../API Requests/Requests";
import nextId from "react-id-generator";
import SubTask from "../SubTask/SubTask";
import { ISubtask } from "../../Types";

const SubTasks: FunctionComponent<{ taskID: string }> = ({ taskID }) => {
  const [inputSubtask, setInputSubtask] = useState("");
  const [allSubTasks, setAllSubTasks] = useState<ISubtask[]>([]);

  useEffect(() => {
    getSubTaskRequest(taskID)
      .then((result) => {
        const resultParsed = JSON.parse(result.subtasks) as ISubtask[];
        setAllSubTasks(resultParsed);
        return allSubTasks;
      })
      .catch((error) => console.log("error", error));
  }, []);

  const submitSubtaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newSubtask = {
      name: inputSubtask.charAt(0).toUpperCase() + inputSubtask.slice(1),
      id: nextId("id-"),
      key: nextId("key-"),
      taskId: taskID,
    };

    setAllSubTasks([...allSubTasks, newSubtask]);
    const allnewSubtasks = [...allSubTasks, newSubtask] as ISubtask[];
    console.log("allsubtask:", allnewSubtasks);

    const raws = JSON.stringify(allnewSubtasks);
    updateSubtasks(raws, taskID)
      .then((result) => {
        console.log("resultAdd", result);
        return result;
      })
      .catch((error) => console.log("error", error));

    setInputSubtask("");
  };

  return (
    <>
      {!allSubTasks.length ? (
        <p>You dont have subtasks</p>
      ) : (
        <ol>
          {allSubTasks.map((subtask) => {
            return (
              <li key={Math.random()}>
                <SubTask
                  subtaskProp={subtask}
                  allsubtasksProp={allSubTasks}
                  setAllSubtasksProp={setAllSubTasks}
                />
              </li>
            );
          })}
        </ol>
      )}

      <form
        onSubmit={(e) => {
          submitSubtaskHandler(e);
        }}
      >
        <input
          value={inputSubtask}
          onChange={(e) => setInputSubtask(e.target.value)}
          placeholder="Add subtask..."
        />
        <button>+</button>
      </form>
    </>
  );
};

export default SubTasks;
