import { Link } from "react-router-dom";
import Modal from "../Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Task = ({ task, tasks, setTasks }) => {
  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();

  const toggleModal = () => setShowModal(!showModal);

  const deleteHandler = (task) => {
    console.log("Deleting...");
    // Creating all tasks with less the current task:
    const deleted = tasks.filter((t) => t.id !== task.id);
    setTasks(deleted);
    localStorage.setItem("allTasks", JSON.stringify(deleted));

    navigate("/tasks/delete", { replace: true });
  };

  const completeHandler = () => {
    console.log("Mark as complete...");
  };

  return (
    <div className="task">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>{task.photo}</p>
      <p>{task.video}</p>
      <p>{task.deadline}</p>
      <p>{task.id}</p>

      <Link
        to={`/details/${task.id}`}
        state={{ taskProps: task }}
        className="button"
      >
        See details
      </Link>
      <button className="button" onClick={toggleModal}>
        Delete Task
      </button>
      <button onClick={completeHandler} className="button">
        Mark as Complete
      </button>
      <Link to="/tasks" state={{ taskProps: task }} className="button">
        See alltasks
      </Link>
      {showModal ? (
        <Modal>
          <div style={{ backgroundColor: "blue" }}>
            <h1>Are you sure you want to delete this task: {task.title}?</h1>
            <div>
              <button onClick={deleteHandler(task)}>Yes</button>
              <button onClick={toggleModal}>No</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Task;
