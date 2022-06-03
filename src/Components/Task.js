import { Link } from "react-router-dom";
import { useContext } from "react";

import AlltasksContext from "../Contexts/AlltasksContext";

const Task = () => {
  const [alltasks, setAlltasks] = useContext(AlltasksContext);

  const completeHandler = (task, alltasks) => {
    const currentTask = task;
    currentTask.status = "completed";

    const completedTasks = alltasks.filter((t) =>
      t.status === "completed" ? t : null
    );
    const storedCompletedTasks = localStorage.getItem("allcompletedTasks");

    const allCompletedTasks =
      JSON.stringify(completedTasks) + JSON.stringify(storedCompletedTasks);

    localStorage.setItem("allcompletedTasks", allCompletedTasks);
  };

  const deleteHandler = (task, alltasks) => {
    const currentTask = task;
    currentTask.status = "deleted";

    const currentAlltasks = alltasks.filter((t) => t.id !== currentTask.id);
    setAlltasks(currentAlltasks);
    localStorage.setItem("allTasks", JSON.stringify(currentAlltasks));

    const deletedTask = alltasks.filter((t) => t.id === currentTask.id);
    const storedDeletedTasks = localStorage.getItem("allDeletedTasks");

    const deletedTasks =
      JSON.stringify(deletedTask) + JSON.stringify(storedDeletedTasks);

    localStorage.setItem("allDeletedTasks", deletedTasks);
  };

  return (
    <div>
      {alltasks?.map((task) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="task">
            <h1>Title: {task.title}</h1>
            <p>Description: {task.description}</p>
            <p>{task.key}</p>
            <p>Status: {task.status}</p>
            <p>Photo: {task.photo}</p>
            <p>Video: {task.video}</p>
            <p>Deadline: {task.deadline}</p>
            <p>ID: {task.id}</p>
            {/* <img src={URL.createObjectURL(task.photo)} alt={"file.name"} /> */}

            <div>
              <Link
                to={`/details/${task.id}`}
                state={{ taskProps: task }}
                className="button"
              >
                See details
              </Link>
              <button
                className="button"
                onClick={() => {
                  deleteHandler(task, alltasks);
                }}
              >
                Delete Task
              </button>
              <button
                className="button"
                onClick={() => {
                  completeHandler(task, alltasks);
                }}
              >
                Mark as Complete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Task;
