import { Link } from "react-router-dom";
import { useContext } from "react";

import AlltasksContext from "../AlltasksContext";

const Task = () => {
  const [alltasks, setAlltasks] = useContext(AlltasksContext);

  const completeHandler = () => {
    console.log("Mark as complete...");
  };
  const deleteHandler = (task, alltasks) => {
    // Creating all tasks with less the current task:
    const currentTask = task;
    console.log("before", alltasks);
    const deleted = alltasks.filter((t) => t.id !== currentTask.id);
    setAlltasks(deleted);
    localStorage.setItem("allTasks", JSON.stringify(deleted));
    console.log("after", alltasks);
  };
  return (
    <div className="task">
      {alltasks?.map((task) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="task">
            <h1>Title: {task.title}</h1>
            <p>Description: {task.description}</p>
            <p>{task.key}</p>
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
            </div>
          </div>
        );
      })}

      <button onClick={completeHandler} className="button">
        Mark as Complete
      </button>

      <Link to="/tasks" className="button">
        See alltasks
      </Link>
    </div>
  );
};

export default Task;
