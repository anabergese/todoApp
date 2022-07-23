import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import AlltasksContext from "../Contexts/AlltasksContext";

const Button = ({ onClick, children, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

const Task = () => {
  const [alltasks, setAlltasks] = useContext(AlltasksContext);
  const location = useLocation();
  const filter = (
    new URLSearchParams(location.search).get("filter") || ""
  ).toLowerCase();

  const allFilteredTask = () => {
    switch (filter) {
      case "deleted":
        return alltasks.filter((task) => task.status === "Deleted");
      case "completed":
        return alltasks.filter((task) => task.status === "Completed");
      case "uncompleted":
        return alltasks.filter((task) => task.status === "Uncompleted");
      default:
        return alltasks;
    }
  };

  const completeHandler = (task, alltasks) => {
    const taskIndex = alltasks.findIndex((item) => item.id === task.id);
    const copy = [...alltasks];
    copy[taskIndex].status = "Completed";
    setAlltasks(copy);
    localStorage.setItem("allTasks", JSON.stringify(alltasks));
  };

  const deleteHandler = (task, alltasks) => {
    const taskIndex = alltasks.findIndex((item) => item.id === task.id);
    const copy = [...alltasks];
    copy[taskIndex].status = "Deleted";
    setAlltasks(copy);
    localStorage.setItem("allTasks", JSON.stringify(alltasks));
  };

  const permanentDeleteHandler = (task, alltasks) => {
    const copy = alltasks.filter((item) => item.id !== task.id);
    setAlltasks(copy);
    localStorage.setItem("allTasks", JSON.stringify(alltasks));
  };

  const redoHandler = (task, alltasks) => {
    const taskIndex = alltasks.findIndex((item) => item.id === task.id);
    const copy = [...alltasks];
    copy[taskIndex].status = "Uncompleted";
    setAlltasks(copy);
    localStorage.setItem("allTasks", JSON.stringify(alltasks));
  };

  return (
    <>
      {allFilteredTask().map((task) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="task">
            <div className="task-title">
              <h2>{task.title}</h2>
              <div className="task-buttons">
                <Link
                  className="buttons btn-left"
                  to={`/details/${task.id}`}
                  state={{ taskProps: task }}
                >
                  See details
                </Link>
                {filter === "deleted" || task.status === "Deleted" ? (
                  <Button
                    className={"buttons btn-center"}
                    onClick={() => {
                      permanentDeleteHandler(task, alltasks);
                    }}
                  >
                    Permanent Delete
                  </Button>
                ) : (
                  <Button
                    className={"buttons btn-center"}
                    onClick={() => {
                      deleteHandler(task, alltasks);
                    }}
                  >
                    Delete Task
                  </Button>
                )}
                {filter === "deleted" ||
                filter === "completed" ||
                task.status === "Deleted" ||
                task.status === "Completed" ? (
                  <Button
                    className={"buttons btn-right"}
                    onClick={() => {
                      redoHandler(task, alltasks);
                    }}
                  >
                    Redo
                  </Button>
                ) : (
                  <Button
                    className={"buttons btn-right"}
                    onClick={() => {
                      completeHandler(task, alltasks);
                    }}
                  >
                    Mark as Completed
                  </Button>
                )}
              </div>
            </div>
            <div className="task-content">
              <p>Deadline: {task.deadline}</p>
              <p
                className={
                  task.status === "Deleted" || task.status === "Completed"
                    ? "highlight"
                    : ""
                }
              >
                Status: {task.status}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Task;
