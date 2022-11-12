import { useLocation, useNavigate } from "react-router-dom";
import { useState, useContext, FunctionComponent } from "react";
import { FocusScope } from "react-aria";
import Modal from "./Modal";
import AlltasksContext, { TaskStatus } from "../Contexts/AlltasksContext";
import { StyledTask, TitleTask, ContentTask } from "./Styles/Task.styled";
import { StyledModal } from "./Styles/Modal.styled";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledButton } from "./Styles/Buttons.styled";

const Details: FunctionComponent = () => {
  type IphotoProp = {
    lastModified?: number;
    lastModifiedDate?: Date;
    name?: string;
    size?: number;
    type?: string;
    webkitRelativePath?: string;
  };

  type ITaskProps = {
    title: string;
    description: string;
    photo?: IphotoProp;
    deadline: string;
    status: string;
    key: string;
    id: string;
  };

  const [showModal, setShowModal] = useState(false);
  const [allTasks, setAllTasks] = useContext(AlltasksContext);
  const location = useLocation();
  const taskProps = location.state as ITaskProps;
  const toggleModal = () => setShowModal(!showModal);
  const [themes] = useContext(ThemeContext);
  const navigate = useNavigate();
  console.log(taskProps.photo);

  const tasksHandler = (status: TaskStatus) => {
    const taskIndex = allTasks.findIndex((item) => item.id === taskProps.id);
    const copy = [...allTasks];
    copy[taskIndex].status = status;
    taskProps.status = status;
    setAllTasks(copy);
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
  };

  const deleteHandler = () => {
    tasksHandler("Deleted");
    toggleModal();
  };

  const permanentDeleteHandler = () => {
    const copy = allTasks.filter((item) => item.id !== taskProps.id);
    setAllTasks(copy);
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
    navigate(`/tasks`);
  };

  const completeHandler = () => {
    if (taskProps.status == "Uncompleted") tasksHandler("Completed");
    else if (taskProps.status == "Completed") tasksHandler("Uncompleted");
  };

  return (
    <>
      <h1>Details Page</h1>
      <StyledTask data-testid="task-container">
        <TitleTask theme={themes}>
          <h2>{taskProps.title}</h2>
          <div>
            <StyledButton theme={themes}>Edit</StyledButton>
            <StyledButton
              onClick={
                taskProps.status === "Deleted"
                  ? permanentDeleteHandler
                  : toggleModal
              }
              theme={themes}
            >
              {taskProps.status === "Deleted" ? "Permanent Delete" : "Delete"}
            </StyledButton>
            <StyledButton
              theme={themes}
              onClick={() => {
                completeHandler();
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
          </div>
        </ContentTask>
      </StyledTask>
    </>
  );
};

export default Details;