import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import AlltasksContext from "../Contexts/AlltasksContext";
import { StyledTask, TitleTask, ContentTask } from "./Styles/Task.styled";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledButton, StyledLink } from "./Styles/Button.styled";

const Task = () => {
  const [alltasks, setAlltasks] = useContext(AlltasksContext);
  const location = useLocation();
  const { themes } = useContext(ThemeContext);

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
          <StyledTask>
            <TitleTask theme={themes}>
              <h4>{task.title}</h4>
              <div className="task-buttons">
                <StyledLink to={`/details/${task.id}`} state={task}>
                  See details
                </StyledLink>
                {filter === "deleted" || task.status === "Deleted" ? (
                  <StyledButton
                    onClick={() => {
                      permanentDeleteHandler(task, alltasks);
                    }}
                  >
                    Permanent Delete
                  </StyledButton>
                ) : (
                  <StyledButton
                    onClick={() => {
                      deleteHandler(task, alltasks);
                    }}
                  >
                    Delete Task
                  </StyledButton>
                )}
                {filter === "deleted" ||
                filter === "completed" ||
                task.status === "Deleted" ||
                task.status === "Completed" ? (
                  <StyledButton
                    onClick={() => {
                      redoHandler(task, alltasks);
                    }}
                  >
                    Redo
                  </StyledButton>
                ) : (
                  <StyledButton
                    onClick={() => {
                      completeHandler(task, alltasks);
                    }}
                  >
                    Mark as Completed
                  </StyledButton>
                )}
              </div>
            </TitleTask>
            <ContentTask>
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
            </ContentTask>
          </StyledTask>
        );
      })}
    </>
  );
};

export default Task;
