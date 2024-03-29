import {
  useState,
  useEffect,
  FunctionComponent,
  FormEvent,
  useContext,
} from "react";
import { getSubTaskRequest, updateSubtasks } from "../API Requests/Requests";
import nextId from "react-id-generator";
import SubTask from "../SubTask/SubTask";
import { ISubtask } from "../../Types";
import { SubTaskForm } from "./SubTasks.styled";
import ThemeContext from "../../Contexts/ThemeContext";

const SubTasks: FunctionComponent<{
  task_id: string;
  subtasks: ISubtask[];
}> = ({ task_id, subtasks }) => {
  const [inputSubtask, setInputSubtask] = useState("");
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [allSubTasks, setAllSubTasks] = useState<ISubtask[]>(subtasks);
  const [themes] = useContext(ThemeContext);

  useEffect(() => {
    if (shouldUpdate) {
      getSubTaskRequest(task_id)
        .then((result) => {
          const taskUpdated: { subtasks: ISubtask[] } = result;
          setAllSubTasks(taskUpdated.subtasks);
          return allSubTasks;
        })
        .catch((error) => console.log("error", error));
      setShouldUpdate(false);
    }
  }, [shouldUpdate]);

  const submitSubtaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newSubtask = {
      name: inputSubtask.charAt(0).toUpperCase() + inputSubtask.slice(1),
      id: nextId(),
      key: nextId(),
      task_id: task_id,
    };

    const allnewSubtasks = [...allSubTasks, newSubtask] as ISubtask[];
    updateSubtasks(allnewSubtasks, task_id)
      .then((result) => {
        if (
          typeof result === "object" &&
          result !== null &&
          "subtasks" in result
        ) {
          const taskUpdated = result;
          setAllSubTasks(taskUpdated.subtasks);
          return allSubTasks;
        } else {
          throw new Error("Invalid task update");
        }
      })
      .catch((error) => console.log("error", error));

    setShouldUpdate(true);
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
                  subtask={subtask}
                  allSubTasks={allSubTasks}
                  setAllSubTasks={setAllSubTasks}
                />
              </li>
            );
          })}
        </ol>
      )}

      <SubTaskForm
        theme={themes}
        onSubmit={(e) => {
          submitSubtaskHandler(e);
        }}
      >
        <input
          value={inputSubtask}
          onChange={(e) => setInputSubtask(e.target.value)}
          placeholder="Add subtask..."
        />
        <button type="submit">+</button>
      </SubTaskForm>
    </>
  );
};

export default SubTasks;
