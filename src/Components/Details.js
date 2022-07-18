import { useLocation } from "react-router-dom";
import Modal from "../Modal";
import { useState } from "react";
import { useContext } from "react";
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
  };

  return (
    <div className="task center">
      <div className="task-title">
        <h2>{taskProps.title}</h2>
        <div className="task-buttons">
          <button className="buttons btn-left">Edit</button>
          <button className="buttons btn-center" onClick={toggleModal}>
            Delete Task
          </button>
          <button className="buttons btn-right">Mark as Done</button>
          {showModal ? (
            <Modal>
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
            </Modal>
          ) : null}
        </div>
      </div>
      <div className="task-content">
        <p>{taskProps.description}</p>
        {taskProps.photo ? (
          <img
            src={URL.createObjectURL(taskProps.photo)}
            className="task-image center"
            alt="file.name"
          />
        ) : null}
        <p>
          {taskProps.video ? (
            <video src={video} width="750" height="500" controls></video>
          ) : null}{" "}
        </p>
        <p>Deadline: {taskProps.deadline}</p>
        <p>Status: {taskProps.status}</p>
      </div>
    </div>
  );
};

export default Details;
