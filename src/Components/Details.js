import { useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { FocusScope } from "react-aria";
import Modal from "./Modal";
import AlltasksContext from "../Contexts/AlltasksContext";
import { StyledTask, TitleTask, ContentTask } from "./Styles/Task.styled";
import { StyledModal } from "./Styles/Modal.styled";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledButton } from "./Styles/Buttons.styled";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const [alltasks, setAlltasks] = useContext(AlltasksContext);
  const location = useLocation();
  const taskProps = location.state;
  const toggleModal = () => setShowModal(!showModal);
  const { themes } = useContext(ThemeContext);
  const navigate = useNavigate();

  const tasksHandler = (status) => {
    const taskIndex = alltasks.findIndex((item) => item.id === taskProps.id);
    const copy = [...alltasks];
    copy[taskIndex].status = status;
    taskProps.status = status;
    setAlltasks(copy);
    localStorage.setItem("allTasks", JSON.stringify(alltasks));
  };

  const deleteHandler = () => {
    tasksHandler("Deleted");
    toggleModal();
  };

  const permanentDeleteHandler = () => {
    const copy = alltasks.filter((item) => item.id !== taskProps.id);
    setAlltasks(copy);
    localStorage.setItem("allTasks", JSON.stringify(alltasks));
    navigate(`/tasks`);
  };

  const completeHandler = () => {
    tasksHandler("Completed");
  };

  const redoHandler = () => {
    tasksHandler("Uncompleted");
  };

  return (
    <>
      <h1>Details Page</h1>

      <StyledTask>
        <TitleTask theme={themes}>
          <h2>{taskProps.title}</h2>
          <div>
            <StyledButton theme={themes}>Edit</StyledButton>
            {taskProps.status === "Deleted" ? (
              <StyledButton onClick={permanentDeleteHandler} theme={themes}>
                Permanent Delete
              </StyledButton>
            ) : (
              <StyledButton onClick={toggleModal} theme={themes}>
                Delete
              </StyledButton>
            )}

            {taskProps.status === "Completed" ||
            taskProps.status === "Deleted" ? (
              <StyledButton
                theme={themes}
                onClick={() => {
                  redoHandler();
                }}
              >
                Redo
              </StyledButton>
            ) : (
              <StyledButton
                theme={themes}
                onClick={() => {
                  completeHandler();
                }}
              >
                Complete
              </StyledButton>
            )}

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
                          deleteHandler();
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
              <strong> Status: </strong>
              {taskProps.status}
            </p>
          </div>
          <div>
            {taskProps.photo ? (
              <img
                src={URL.createObjectURL(taskProps.photo)}
                alt={taskProps.photo.name}
              />
            ) : null}
            {taskProps.video ? (
              <video src={video} width="750" height="500" controls></video>
            ) : null}
          </div>
        </ContentTask>
      </StyledTask>
    </>
  );
};

export default Details;
