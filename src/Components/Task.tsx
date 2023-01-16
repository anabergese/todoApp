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
  const location = useLocation();
  const toggleModal = () => setShowModal(!showModal);
  const [themes] = useContext(ThemeContext);
  const navigate = useNavigate();
  // añades un estado que diga "toca refrescar":
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [taskProps, setTaskProps] = useState(location.state);

  useEffect(() => {
    if (shouldUpdate) {
      // en este ejemplo hace fetch de la DB, pero
      // también podrías hacer que en vez de decirle
      // al componente "toca refrescar" le digas
      // _qué_ refrescar (por evitar consultar la DB)
      getTaskRequest(taskProps)
        .then((result) => {
          setTaskProps(result);
        })
        .catch((error) => console.log("error", error));

      setShouldUpdate(false);
    }
  }, [shouldUpdate]);

  const tasksHandler = (status: TaskStatus, taskProps: ITask) => {
    updateRequest(status, taskProps)
      .then((result) => {
        setShouldUpdate(true);
        return result;
      })
      .catch((error) => console.log("error", error));
  };

  const deleteHandler = (taskProps: ITask) => {
    tasksHandler("Deleted", taskProps);
    toggleModal();
  };

  const permanentDeleteHandler = (taskProps: ITask) => {
    permanentDeleteRequest(taskProps)
      .then((result) => {
        result;
        navigate(`/tasks`);
      })
      .catch((error) => console.log("error", error));
  };

  const completeHandler = (taskProps: ITask) => {
    if (taskProps.status == "Uncompleted") tasksHandler("Completed", taskProps);
    else if (taskProps.status == "Completed")
      tasksHandler("Uncompleted", taskProps);
  };

  return (
    <>
      <h1 data-testid="h1Details">Details Page</h1>
      <StyledTask data-testid="task-container">
        <TitleTask theme={themes}>
          <h2>{taskProps.title}</h2>
          <div>
            <StyledButton theme={themes}>Edit</StyledButton>
            <StyledButton
              onClick={
                taskProps.status === "Deleted"
                  ? () => {
                      permanentDeleteHandler(taskProps);
                    }
                  : toggleModal
              }
              theme={themes}
            >
              {taskProps.status === "Deleted" ? "Permanent Delete" : "Delete"}
            </StyledButton>
            <StyledButton
              theme={themes}
              onClick={() => {
                completeHandler(taskProps);
              }}
            >
              {taskProps.status === "Completed" ||
              taskProps.status === "Deleted"
                ? "Redo"
                : "Complete"}
            </StyledButton>

            {showModal ? (
              <Modal>
                <StyledModal theme={themes}>
                  <FocusScope contain restoreFocus autoFocus>
                    <h1> Are you sure you want to delete this task?</h1>
                    <p>{taskProps.title}</p>
                    <div>
                      <StyledButton
                        theme={themes}
                        onClick={() => {
                          deleteHandler(taskProps);
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
            <p>{taskProps.description}</p>
            <p>
              <strong>Deadline:</strong> {taskProps.deadline}
            </p>
            <p
              className={
                taskProps.status === "Deleted" ||
                taskProps.status === "Completed"
                  ? "highlight"
                  : ""
              }
            >
              <strong>Status:</strong>
              {taskProps.status}
            </p>
          </div>
          <div>
            {taskProps.photo ? (
              <img src={taskProps.photo} alt={`${taskProps.title}`} />
            ) : null}
          </div>
        </ContentTask>
      </StyledTask>
    </>
  );
};

export default Task;
