/* eslint-disable jsx-a11y/no-autofocus */
import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { FocusScope } from "react-aria";

import Modal from "./Modal";
import AlltasksContext from "../Contexts/AlltasksContext";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const [alltasks, setAlltasks] = useContext(AlltasksContext);
  const location = useLocation();
  const { taskProps } = location.state;
  const toggleModal = () => setShowModal(!showModal);

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
    <div className="task">
      <div className="task-title">
        <h4>{taskProps.title}</h4>
        <div className="task-buttons">
          <button className="buttons btn-left">Edit</button>
          <button className="buttons btn-center" onClick={toggleModal}>
            {taskProps.status === "Deleted"
              ? "Permanent Delete"
              : "Delete Task"}
          </button>
          {taskProps.status === "Completed" ||
          taskProps.status === "Deleted" ? (
            <button
              className="buttons btn-right"
              onClick={() => {
                completeHandler(taskProps, alltasks);
              }}
            >
              Redo
            </button>
          ) : (
            <button
              className="buttons btn-right"
              onClick={() => {
                completeHandler(taskProps, alltasks);
              }}
            >
              Mark as Complete
            </button>
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
                    <button
                      className="buttons"
                      onClick={() => {
                        deleteHandler(taskProps, alltasks);
                      }}
                    >
                      Yes
                    </button>
                    <button className="buttons" onClick={toggleModal}>
                      No
                    </button>
                  </div>
                </div>
              </FocusScope>
            </Modal>
          ) : null}
        </div>
      </div>

      <div className="task-content">
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
      </div>
    </div>
  );
};

export default Details;
