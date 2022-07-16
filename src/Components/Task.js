import { Link, useLocation } from "react-router-dom";
import { useContext, useCallback } from "react";
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
  const query = useCallback(
    () => new URLSearchParams(location.search),
    [location]
  );
  const filter = (query().get("filter") || "").toLowerCase();

  const allFilteredTask = useCallback(() => {
    switch (filter) {
      case "deleted":
        return alltasks.filter((task) => task.status === "deleted");
      case "completed":
        return alltasks.filter((task) => task.status === "completed");
      case "uncompleted":
        return alltasks.filter((task) => task.status === "uncompleted");
      default:
        return alltasks;
    }
  }, [alltasks, filter]);

  const completeHandler = (task, alltasks) => {
    const taskIndex = alltasks.findIndex((item) => item.id === task.id);
    const copy = [...alltasks];
    copy[taskIndex].status = "completed";
    setAlltasks(copy);
    localStorage.setItem("allTasks", JSON.stringify(alltasks));
  };

  const deleteHandler = (task, alltasks) => {
    const taskIndex = alltasks.findIndex((item) => item.id === task.id);
    const copy = [...alltasks];
    copy[taskIndex].status = "deleted";
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
    copy[taskIndex].status = "uncompleted";
    setAlltasks(copy);
    localStorage.setItem("allTasks", JSON.stringify(alltasks));
  };

  return (
    <div>
      {allFilteredTask().map((task) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="task">
            <div className="task-title">
              <div>
                <h2>{task.title}</h2>
              </div>
              <div className="task-buttons">
                <Link
                  className="btn btn-left"
                  to={`/details/${task.id}`}
                  state={{ taskProps: task }}
                >
                  See details
                </Link>
                {filter === "deleted" ? (
                  <Button
                    className={"btn btn-center"}
                    onClick={() => {
                      permanentDeleteHandler(task, alltasks);
                    }}
                  >
                    Permanent Delete
                  </Button>
                ) : (
                  <Button
                    className={"btn btn-center"}
                    onClick={() => {
                      deleteHandler(task, alltasks);
                    }}
                  >
                    Delete Task
                  </Button>
                )}
                {filter === "deleted" || filter === "completed" ? (
                  <Button
                    className={"btn btn-right"}
                    onClick={() => {
                      redoHandler(task, alltasks);
                    }}
                  >
                    Redo
                  </Button>
                ) : (
                  <Button
                    className={"btn btn-right"}
                    onClick={() => {
                      completeHandler(task, alltasks);
                    }}
                  >
                    Mark as complete
                  </Button>
                )}
              </div>
            </div>
            <p>Deadline: {task.deadline}</p>
            <p>Status: {task.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Task;
