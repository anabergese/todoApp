import { useLocation } from "react-router-dom";
import { useContext } from "react";
import AlltasksContext from "../Contexts/AlltasksContext";
import { StyledTask, TitleTask, ContentTask } from "./Styles/Task.styled";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledButton, StyledLink } from "./Styles/Buttons.styled";

const Task = () => {
  const [allTasks, setAllTasks] = useContext(AlltasksContext);
  const location = useLocation();
  const [themes] = useContext(ThemeContext);
  const filter = (
    new URLSearchParams(location.search).get("filter") || ""
  ).toLowerCase();

  const allFilteredTask = () => {
    switch (filter) {
      case "deleted":
        return allTasks.filter((task) => task.status === "Deleted");
      case "completed":
        return allTasks.filter((task) => task.status === "Completed");
      case "uncompleted":
        return allTasks.filter((task) => task.status === "Uncompleted");
      default:
        return allTasks;
    }
  };

  const tasksHandler = (status, task) => {
    const taskIndex = allTasks.findIndex((item) => item.id === task.id);
    const copy = [...allTasks];
    copy[taskIndex].status = status;
    setAllTasks(copy);
    // localStorage.setItem("allTasks", JSON.stringify(alltasks));
  };

  const completeHandler = (task) => {
    if (task.status == "Uncompleted") tasksHandler("Completed", task);
    else if (task.status == "Completed") tasksHandler("Uncompleted", task);
  };

  const deleteHandler = (task) => {
    tasksHandler("Deleted", task);
  };

  const permanentDeleteHandler = (task) => {
    const copy = allTasks.filter((item) => item.id !== task.id);
    setAllTasks(copy);
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
  };

  return (
    <>
      <h1>All your tasks</h1>
      {!allTasks.length ? (
        <h1 data-testid="h1task">You don&apos;t have tasks yet</h1>
      ) : (
        allFilteredTask().map((task) => {
          return (
            <StyledTask key={task.key}>
              <TitleTask theme={themes}>
                <h2>{task.title}</h2>
                <div>
                  <StyledLink to={`/details/${task.id}`} state={task}>
                    <StyledButton theme={themes}>See details</StyledButton>
                  </StyledLink>
                  <StyledButton
                    theme={themes}
                    onClick={() => {
                      filter === "deleted" || task.status === "Deleted"
                        ? permanentDeleteHandler(task)
                        : deleteHandler(task);
                    }}
                  >
                    {filter === "deleted" || task.status === "Deleted"
                      ? "Permanent Delete"
                      : "Delete"}
                  </StyledButton>
                  <StyledButton
                    theme={themes}
                    onClick={() => {
                      completeHandler(task);
                    }}
                  >
                    {filter === "deleted" ||
                    filter === "completed" ||
                    task.status === "Deleted" ||
                    task.status === "Completed"
                      ? "Redo"
                      : "Complete"}
                  </StyledButton>
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
        })
      )}
    </>
  );
};

export default Task;
