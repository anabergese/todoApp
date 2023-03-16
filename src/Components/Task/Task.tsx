/* eslint-disable jsx-a11y/no-autofocus */
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext, FunctionComponent } from "react";
import Modal from "../Modal/Modal";
import { TaskStatus, ITask } from "../../Types/index";
import { StyledTask, TitleTask } from "./Task.styled";
import ThemeContext from "../../Contexts/ThemeContext";
import { StyledButton } from "../Buttons/Buttons.styled";
import {
  permanentDeleteRequest,
  updateRequest,
  getTaskRequest,
} from "../API Requests/Requests";
import Content from "./Content";
import DeleteModal from "../Modal/DeleteModal";
import { useSWRConfig } from "swr";

const url = "https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/tasks";

const Task: FunctionComponent<{ taskProp: ITask; allTasks: ITask[] }> = ({
  taskProp,
}) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const [themes] = useContext(ThemeContext);
  const navigate = useNavigate();
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [task, setTask] = useState(taskProp);

  const { mutate } = useSWRConfig();

  useEffect(() => {
    if (shouldUpdate) {
      getTaskRequest(task)
        .then((result) => {
          return result as ITask;
        })
        .catch((error) => console.log("error", error));

      setShouldUpdate(false);
    }
  }, [shouldUpdate, task]);

  const tasksHandler = (status: TaskStatus, task: ITask) => {
    updateRequest(status, task)
      .then((result) => {
        const taskUpdated = result as ITask;
        setTask(taskUpdated);
        setShouldUpdate(true);
        return task;
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
        console.log("task deleted in DB");
        navigate(`/tasks`);
      })
      .catch((error) => console.log("error", error));
    mutate(url);
  };

  const completeHandler = (task: ITask) => {
    if (task.status == "Uncompleted") tasksHandler("Completed", task);
    else if (task.status == "Completed") tasksHandler("Uncompleted", task);
    else if (task.status == "Deleted") tasksHandler("Uncompleted", task);
  };

  return (
    <>
      <StyledTask data-testid="task-container">
        <TitleTask theme={themes}>
          <h2>{task.title}</h2>
          <div>
            <StyledButton
              onClick={() => navigate(`/details/${task.id}`, { state: task })}
              theme={themes}
            >
              View
            </StyledButton>
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
            {showModal && (
              <Modal>
                <DeleteModal
                  task={task}
                  setShowModal={setShowModal}
                  showModal={showModal}
                  deleteHandler={deleteHandler}
                />
              </Modal>
            )}
          </div>
        </TitleTask>
        <Content theme={themes} task={task} />
      </StyledTask>
    </>
  );
};

export default Task;
