import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import AlltasksContext from "../Contexts/AlltasksContext";
import { StyledTask, TitleTask, ContentTask } from "./Styles/Task.styled";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledButton } from "./Styles/Buttons.styled";
import { ITask, TaskStatus } from "../Types/index";
import {
  getAllRequest,
  permanentDeleteRequest,
  updateRequest,
} from "./API Requests/Requests";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const [allTasks, setAllTasks] = useContext(AlltasksContext);
  const location = useLocation();
  const [themes] = useContext(ThemeContext);
  const filter = (
    new URLSearchParams(location.search).get("filter") || ""
  ).toLowerCase();
  const navigate = useNavigate();

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

  useEffect(() => {
    getAllRequest()
      .then((result) => {
        setAllTasks(result as ITask[]);
      })
      .catch((error) => console.log("error", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tasksHandler = (status: TaskStatus, task: ITask) => {
    const taskIndex = allTasks.findIndex((item) => item.id === task.id);
    const copy = [...allTasks];
    copy[taskIndex].status = status;
    setAllTasks(copy);
    console.log("entered task handler");

    updateRequest(status, task)
      .then((result) => {
        result;
      })
      .catch((error) => console.log("error", error));
  };

  const completeHandler = (task: ITask) => {
    console.log(task, "redo");
    task.status == "Uncompleted"
      ? void tasksHandler("Completed", task)
      : void tasksHandler("Uncompleted", task);
  };

  const deleteHandler = (task: ITask) => {
    console.log("delete button pressed");
    void tasksHandler("Deleted", task);
  };

  const permanentDeleteHandler = (task: ITask) => {
    const copy = allTasks.filter((item) => item.id !== task.id);
    setAllTasks(copy);

    permanentDeleteRequest(task)
      .then((result) => result as null)
      .catch((error) => console.log("error", error));
  };

  const routeChange = (route: string, task: ITask) => {
    navigate(route, { state: task });
  };

  return (
    <>
      <h1>All your tasks</h1>
      {!allTasks.length ? (
        <h1 data-testid="h1task">You don&apos;t have tasks yet</h1>
      ) : (
        allFilteredTask().map((task, index) => {
          return (
            <StyledTask key={index}>
              <TitleTask theme={themes}>
                <h2>{task.title}</h2>
                <div>
                  <StyledButton
                    theme={themes}
                    onClick={() => routeChange(`/details/${task.id}`, task)}
                  >
                    Details
                  </StyledButton>
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
