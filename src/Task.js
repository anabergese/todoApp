import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

const Task = (props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const deleteHandler = () => {
    console.log("Deleting...");
    // Alert are you sure you want to delete?
    //    let confirm = prompt ("are you sure you want to delete?");
    // if

    // All tasks tiene menos la current task:
    // setTasks(tasks.filter((curr) => curr.id !== task.id));
    // popup your task has been deleted!
    // Redirect al path="/tasks"
    // <Navigate to="/tasks" />; import Navigate from "react-router-dom";
  };

  const completeHandler = () => {
    console.log("Mark as complete...");
    // Alert are you sure you want to complete?
    // All tasks list queda igual
    // popup Congrats you finished your task!
    // Complete tasks van a tener una mas
    // Uncomeplete tasks van a tener una menos
    // Redirect to complete tasks list
  };

  return (
    <div className="task">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.photo}</p>
      <p>{props.video}</p>
      <p>{props.deadline}</p>
      <p>{props.id}</p>

      {/* <img src={URL.createObjectURL(props.photo)} alt={props.title} /> */}
      <Link
        to={`/details/${props.id}`}
        state={{ taskProps: props }}
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
      {showModal ? (
        <Modal>
          <div style={{ backgroundColor: "blue" }}>
            <h1>Are you sure you want to delete this task: {props.title}?</h1>
            <div>
              <Link to="/">Yes</Link>
              <button onClick={toggleModal}>No</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Task;
