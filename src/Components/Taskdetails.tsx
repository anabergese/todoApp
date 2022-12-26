import { StyledTask, TitleTask, ContentTask } from "./Styles/Task.styled";
import { StyledButton } from "./Styles/Buttons.styled";
import { ITask, TaskStatus } from "../Types/index";
import { permanentDeleteRequest, updateRequest } from "./API Requests/Requests";
import { useNavigate } from "react-router-dom";

export const Taskdetails = (props) => {
  const navigate = useNavigate();

  const tasksHandler = (status: TaskStatus, task: ITask) => {
    console.log("entered task handler:", status);
    setPropstatus(status);

    updateRequest(status, task)
      .then((result) => {
        const resultstatus = result;
        return resultstatus;
      })
      .catch((error) => console.log("error", error));
  };

  const completeHandler = (task: ITask) => {
    console.log(task.status);
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
    <StyledTask>
      <TitleTask theme={props.themes}>
        <h2>{props.title}</h2>
        <div>
          <StyledButton
            onClick={() => routeChange(`/details/${props.id}`, props.task)}
            theme={props.themes}
          >
            See details
          </StyledButton>
          <StyledButton
            onClick={() => {
              props.filter === "deleted" || props.status === "Deleted"
                ? permanentDeleteHandler(props.task)
                : deleteHandler(props.task);
            }}
            theme={props.themes}
          >
            {props.filter === "deleted" || props.status === "Deleted"
              ? "Permanent Delete"
              : "Delete"}
          </StyledButton>
          <StyledButton
            onClick={() => {
              console.log("onclik:", props);
              completeHandler(props);
            }}
            theme={props.themes}
          >
            {props.filter === "deleted" ||
            props.filter === "completed" ||
            props.status === "Deleted" ||
            props.status === "Completed"
              ? "Redo"
              : "Complete"}
          </StyledButton>
        </div>
      </TitleTask>
      <ContentTask theme={props.themes}>
        <p>
          <strong>Deadline:</strong> {props.deadline}
        </p>
        <p
          className={
            props.status === "Deleted" || props.status === "Completed"
              ? "highlight"
              : ""
          }
        >
          <strong>Status: </strong>
          {props.status}
        </p>
      </ContentTask>
    </StyledTask>
  );
};
