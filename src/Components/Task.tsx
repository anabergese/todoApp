/* eslint-disable jsx-a11y/no-autofocus */
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext, FunctionComponent } from "react";
import { FocusScope } from "react-aria";
import Modal from "./Modal";
import { TaskStatus, ITask } from "../Types/index";
import { StyledTask, TitleTask, ContentTask } from "./Styles/Task.styled";
import { StyledModal } from "./Styles/Modal.styled";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledButton } from "./Styles/Buttons.styled";
import {
  permanentDeleteRequest,
  updateRequest,
  getTaskRequest,
} from "./API Requests/Requests";

const Task: FunctionComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const [themes] = useContext(ThemeContext);
  const navigate = useNavigate();
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const location = useLocation();
  const [task, setTask] = useState(location.state as ITask);

  useEffect(() => {
    if (shouldUpdate) {
      getTaskRequest(task)
        .then((result) => {
          return setTask(result);
        })
        .catch((error) => console.log("error", error));

      setShouldUpdate(false);
    }
  }, [shouldUpdate, task]);

  const tasksHandler = (status: TaskStatus, task: ITask) => {
    updateRequest(status, task)
      .then((result) => {
        setShouldUpdate(true);
        return result;
      })
      .catch((error) => console.log("error", error));
  };

  const deleteHandler = (task: ITask) => {
    tasksHandler("Deleted", task);
    toggleModal();
  };

  const permanentDeleteHandler = (task: ITask) => {
    permanentDeleteRequest(task)
      .then((result) => {
        result;
        navigate(`/tasks`);
      })
      .catch((error) => console.log("error", error));
  };

  const completeHandler = (task: ITask) => {
    if (task.status == "Uncompleted") tasksHandler("Completed", task);
    else if (task.status == "Completed") tasksHandler("Uncompleted", task);
  };

  return (
    <>
      <h1 data-testid="h1Details">Details Page</h1>
      <StyledTask data-testid="task-container">
        <TitleTask theme={themes}>
          <h2>{task.title}</h2>
          <div>
            <StyledButton theme={themes}>Edit</StyledButton>
            <StyledButton
              onClick={
                task.status === "Deleted"
                  ? () => {
                      permanentDeleteHandler(task);
                    }
                  : toggleModal
              }
              theme={themes}
            >
              {task.status === "Deleted" ? "Permanent Delete" : "Delete"}
            </StyledButton>
            <StyledButton
              theme={themes}
              onClick={() => {
                completeHandler(task);
              }}
            >
              {task.status === "Completed" || task.status === "Deleted"
                ? "Redo"
                : "Complete"}
            </StyledButton>

            {showModal ? (
              <Modal>
                <StyledModal theme={themes}>
                  <FocusScope contain restoreFocus autoFocus>
                    <h1> Are you sure you want to delete this task?</h1>
                    <p>{task.title}</p>
                    <div>
                      <StyledButton
                        theme={themes}
                        onClick={() => {
                          deleteHandler(task);
                        }}
                      >
                        Yes
                      </StyledButton>
                      <StyledButton theme={themes} onClick={toggleModal}>
                        No
                      </StyledButton>
                    </div>
                  </FocusScope>
                </StyledModal>
              </Modal>
            ) : null}
          </div>
        </TitleTask>
        <ContentTask theme={themes} detail>
          <div>
            <p>{task.description}</p>
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
              <strong>Status:</strong>
              {task.status}
            </p>
          </div>
          <div>
            {task.photo ? <img src={task.photo} alt={`${task.title}`} /> : null}
          </div>
        </ContentTask>
      </StyledTask>
    </>
  );
};

export default Task;
