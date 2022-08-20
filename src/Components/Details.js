/* eslint-disable jsx-a11y/no-autofocus */
import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { FocusScope } from "react-aria";
import Modal from "./Modal";
import AlltasksContext from "../Contexts/AlltasksContext";
import { StyledTask, TitleTask, ContentTask } from "./Styles/Task.styled";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledButton } from "./Styles/Button.styled";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const [alltasks, setAlltasks] = useContext(AlltasksContext);
  const location = useLocation();
  const taskProps = location.state;
  console.log(location);
  const toggleModal = () => setShowModal(!showModal);
  const { themes } = useContext(ThemeContext);

  const deleteHandler = (taskProps, alltasks) => {
    const taskIndex = alltasks.findIndex((item) => item.id === taskProps.id);
    const copy = [...alltasks];
    copy[taskIndex].status = "Deleted";
    setAlltasks(copy);
    localStorage.setItem("allTasks", JSON.stringify(alltasks));
    toggleModal();
    taskProps.status = "Deleted";
  };

  const completeHandler = (taskProps, alltasks) => {
    const taskIndex = alltasks.findIndex((item) => item.id === taskProps.id);
    const copy = [...alltasks];
    copy[taskIndex].status = "Completed";
    setAlltasks(copy);
    localStorage.setItem("allTasks", JSON.stringify(alltasks));
    taskProps.status = "Completed";
  };

  return (
    <StyledTask>
      <TitleTask theme={themes}>
        <h4>{taskProps.title}</h4>
        <div className="task-buttons">
          <StyledButton theme={themes}>Edit</StyledButton>
          <StyledButton onClick={toggleModal} theme={themes}>
            {taskProps.status === "Deleted"
              ? "Permanent Delete"
              : "Delete Task"}
          </StyledButton>
          {taskProps.status === "Completed" ||
          taskProps.status === "Deleted" ? (
            <StyledButton
              theme={themes}
              onClick={() => {
                completeHandler(taskProps, alltasks);
              }}
            >
              Redo
            </StyledButton>
          ) : (
            <StyledButton
              theme={themes}
              onClick={() => {
                completeHandler(taskProps, alltasks);
              }}
            >
              Mark as Complete
            </StyledButton>
          )}

          {showModal ? (
            <Modal>
              <FocusScope contain restoreFocus autoFocus>
                <div>
                  <h1>
                    Are you sure you want to delete this task:
                    <br /> {taskProps.title}?
                  </h1>
                  <div>
                    <StyledButton
                      theme={themes}
                      onClick={() => {
                        deleteHandler(taskProps, alltasks);
                      }}
                    >
                      Yes
                    </StyledButton>
                    <StyledButton theme={themes} onClick={toggleModal}>
                      No
                    </StyledButton>
                  </div>
                </div>
              </FocusScope>
            </Modal>
          ) : null}
        </div>
      </TitleTask>
      <ContentTask theme={themes}>
        <p>{taskProps.description}</p>
        {taskProps.photo ? (
          <img
            src={URL.createObjectURL(taskProps.photo)}
            className="task-image flex-center"
            alt="file.name"
          />
        ) : null}
        <p>
          {taskProps.video ? (
            <video src={video} width="750" height="500" controls></video>
          ) : null}{" "}
        </p>
        <p>Deadline: {taskProps.deadline}</p>
        <p
          className={
            taskProps.status === "Deleted" || taskProps.status === "Completed"
              ? "highlight"
              : ""
          }
        >
          Status: {taskProps.status}
        </p>
      </ContentTask>
    </StyledTask>
  );
};

export default Details;
