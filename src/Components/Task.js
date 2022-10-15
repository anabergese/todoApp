import { useLocation } from "react-router-dom";
import { useContext } from "react";
import AlltasksContext from "../Contexts/AlltasksContext";
import { StyledTask, TitleTask, ContentTask } from "./Styles/Task.styled";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledButton, StyledLink } from "./Styles/Buttons.styled";

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

  const tasksHandler = (status, task) => {
    console.log("task", task);
    const taskIndex = alltasks.findIndex((item) => item.id === task.id);
    const copy = [...alltasks];
    copy[taskIndex].status = status;
    setAlltasks(copy);
    // localStorage.setItem("allTasks", JSON.stringify(alltasks));
  };

  const completeHandler = (task) => {
    tasksHandler("Completed", task);
  };

  const deleteHandler = (task) => {
    tasksHandler("Deleted", task);
  };

  const redoHandler = (task) => {
    tasksHandler("Uncompleted", task);
  };

  const permanentDeleteHandler = (task) => {
    const copy = alltasks.filter((item) => item.id !== task.id);
    setAlltasks(copy);
    localStorage.setItem("allTasks", JSON.stringify(alltasks));
  };

  return (
    <>
      <h1>All your tasks</h1>
      {allFilteredTask().map((task) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <StyledTask>
            <TitleTask theme={themes}>
              <h2>{task.title}</h2>
              <div>
                <StyledLink to={`/details/${task.id}`} state={task}>
                  <StyledButton theme={themes}>See details</StyledButton>
                </StyledLink>
                {filter === "deleted" || task.status === "Deleted" ? (
                  <StyledButton
                    theme={themes}
                    onClick={() => {
                      permanentDeleteHandler(task);
                    }}
                  >
                    Permanent Delete
                  </StyledButton>
                ) : (
                  <StyledButton
                    theme={themes}
                    onClick={() => {
                      deleteHandler(task);
                    }}
                  >
                    Delete
                  </StyledButton>
                )}
                {filter === "deleted" ||
                filter === "completed" ||
                task.status === "Deleted" ||
                task.status === "Completed" ? (
                  <StyledButton
                    theme={themes}
                    onClick={() => {
                      redoHandler(task);
                    }}
                  >
                    Redo
                  </StyledButton>
                ) : (
                  <StyledButton
                    theme={themes}
                    onClick={() => {
                      completeHandler(task);
                    }}
                  >
                    Complete
                  </StyledButton>
                )}
              </div>
            </TitleTask>
            <ContentTask theme={themes}>
              <p>
                <strong>Deadline:</strong> {task.deadline}
              </p>
              <p
                className={
                  task.status === "Deleted" || task.status === "Completed"
                    ? "highlight"
                    : ""
                }
              >
                <strong>Status: </strong>
                {task.status}
              </p>
            </ContentTask>
          </StyledTask>
        );
      })}
    </>
  );
};

export default Task;
