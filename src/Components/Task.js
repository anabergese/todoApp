import { Link } from "react-router-dom";
import { useContext } from "react";

import AlltasksContext from "../Contexts/AlltasksContext";

const Task = () => {
  const [alltasks, setAlltasks] = useContext(AlltasksContext);

  const completeHandler = (task, alltasks) => {
    const taskIndex = alltasks.findIndex((item) => item.id === task.id)
    const copy = [...alltasks]
    copy[taskIndex].status = "completed"
    setAlltasks(copy)
    localStorage.setItem("allTasks", JSON.stringify(copy))
    const completedTasks = alltasks.filter((t) =>
      t.status === "completed" ? t : null
    );
    const storedCompletedTasks = JSON.parse(localStorage.getItem("allcompletedTasks")) || [];
    localStorage.setItem("allcompletedTasks", JSON.stringify([...storedCompletedTasks, ...completedTasks]));

    // const currentTask = task;
    // currentTask.status = "completed";

    // const completedTasks = alltasks.filter((t) =>
    //   t.status === "completed" ? t : null
    // );

    // const allCompletedTasks =
    // localStorage.setItem("allcompletedTasks", allCompletedTasks);
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
              <p>Photo: {task.photo ? <img src={URL.createObjectURL(task.photo)} alt="file.name"/> : null}</p>
              <p>Video: {task.video}</p>
            </div>
            <div>
              <h2>Deadline: </h2>
              <p>{task.deadline}</p>
              <p>ID: {task.id}</p>
            </div>

            {/* <img src={URL.createObjectURL(task.photo)} alt="file.name" /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Task;
