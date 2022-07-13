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
    // Creating all tasks with less the current task:
    const currentTask = taskProps;
    console.log("before", alltasks);
    const deleted = alltasks.filter((t) => t.id !== currentTask.id);
    setAlltasks(deleted);
    localStorage.setItem("allTasks", JSON.stringify(deleted));
    console.log("after", alltasks);
  };

  return (
    <div className="container">
      <div className="task">
        <div className="task-title">
          <div>
            <h2> {taskProps.title}</h2>
          </div>
          <div className="task-buttons">
            <button className="button button-1">Edit</button>
            <button className="button button-2" onClick={toggleModal}>
              Delete Task
            </button>
            <button className="button button-3">Mark as Done</button>
            {showModal ? (
              <Modal>
                <div style={{ backgroundColor: "blue" }}>
                  <h1>
                    Are you sure you want to delete this task: {taskProps.title}
                    ?
                  </h1>
                  <div>
                    <button
                      className="button"
                      onClick={() => {
                        deleteHandler(taskProps, alltasks);
                      }}
                    >
                      Yes
                    </button>
                    <button onClick={toggleModal}>No</button>
                  </div>
                </div>
              </Modal>
            ) : null}
          </div>
        </div>

        <div>
          <p>{taskProps.description}</p>
        </div>
        <div>
          {taskProps.photo ? (
            <img
              src={URL.createObjectURL(taskProps.photo)}
              className="task-image center"
              alt="file.name"
            />
          ) : null}
          <p>
            Video:{" "}
            {taskProps.video ? (
              <video src={video} width="750" height="500" controls></video>
            ) : null}{" "}
          </p>
        </div>
        <div>
          <h4>Status: </h4>
          <p>{taskProps.status}</p>
          <h4>Deadline: </h4>
          <p>{taskProps.deadline}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
