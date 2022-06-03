import { useLocation } from "react-router-dom";
import Modal from "../Modal";
import { useState } from "react";
import { useContext } from "react";
import AlltasksContext from "../AlltasksContext";

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
    <div className="task">
      <h1>Title: {taskProps.title}</h1>
      <p>Description: {taskProps.description}</p>
      <p>Photo: {taskProps.photo}</p>
      <p>Video: {taskProps.video}</p>
      <p>Deadline: {taskProps.deadline}</p>
      <p>ID: {taskProps.id}</p>

      <img src={URL.createObjectURL(taskProps.photo)} alt={"file.name"} />
      <button className="button">Edit</button>
      <button className="button" onClick={toggleModal}>
        Delete Task
      </button>
      <button className="button">Mark as Done</button>
      {showModal ? (
        <Modal>
          <div style={{ backgroundColor: "blue" }}>
            <h1>
              Are you sure you want to delete this task: {taskProps.title}?
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
  );
};

export default Details;
