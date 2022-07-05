import { Link } from "react-router-dom";
import { useContext } from "react";

import AlltasksContext from "../Contexts/AlltasksContext";
import AllDeletedTasksContext from "../Contexts/AllDeletedTasksContext";

const Task = () => {
  const [alltasks, setAlltasks] = useContext(AlltasksContext);
  const [allDeletedTasks] = useContext(AllDeletedTasksContext);

  const completeHandler = (task, alltasks) => {
    const taskIndex = alltasks.findIndex((item) => item.id === task.id);
    const copy = [...alltasks];
    copy[taskIndex].status = "completed";
    setAlltasks(copy);

    localStorage.setItem("allTasks", JSON.stringify(copy));
    const completedTasks = alltasks.filter((t) =>
      t.status === "completed" ? t : null
    );

    localStorage.setItem(
      "allcompletedTasks",
      JSON.stringify([...completedTasks])
    );
  };

  const deleteHandler = (task, alltasks) => {
    const currentTask = task;
    currentTask.status = "deleted";

    const currentAlltasks = alltasks.filter((t) => t.id !== currentTask.id);
    setAlltasks(currentAlltasks);
    localStorage.setItem("allTasks", JSON.stringify(currentAlltasks));

    // Hacer push de esa current task a local storage para guardarla
    // como array de alltasksdeleted

    // push the new task into the allDeletedTasksContext
    allDeletedTasks.push(currentTask);
    // save that in local storage
    localStorage.setItem(
      "allDeletedTasks",
      JSON.stringify([...allDeletedTasks])
    );
  };

  return (
    <div className="container">
      {alltasks?.map((task) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="task">
            <div className="task-title">
              <div>
                <h2>Title:</h2>
                <p> {task.title}</p>
              </div>
              <div className="task-buttons">
                <Link
                  className="button button-1"
                  to={`/details/${task.id}`}
                  state={{ taskProps: task }}
                >
                  See details
                </Link>
                <button
                  className="button button-2"
                  onClick={() => {
                    deleteHandler(task, alltasks);
                  }}
                >
                  Delete Task
                </button>
                <button
                  className="button button-3"
                  onClick={() => {
                    completeHandler(task, alltasks);
                  }}
                >
                  Mark as Complete
                </button>
              </div>
            </div>

            <div>
              <h2>Description: </h2>
              <p>{task.description}</p>
              <p>{task.key}</p>
              <p>Status: {task.status}</p>
            </div>
            <div>
              <p>
                Photo:{" "}
                {task.photo ? (
                  <img src={URL.createObjectURL(task.photo)} alt="file.name" />
                ) : null}
              </p>
              <p>
                Video:{" "}
                {task.video ? (
                  <video src={video} width="750" height="500" controls></video>
                ) : null}{" "}
              </p>
            </div>
            <div>
              <h2>Deadline: </h2>
              <p>{task.deadline}</p>
              <p>ID: {task.id}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Task;
