import { useLocation, Link } from "react-router-dom";
import Modal from "../Modal";
import { useState } from "react";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const { taskProps } = location.state;

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="task">
      <h1>Title: {taskProps.title}</h1>
      <p>Description: {taskProps.description}</p>
      <p>Photo: {taskProps.photo}</p>
      <p>Video: {taskProps.video}</p>
      <p>Deadline: {taskProps.deadline}</p>
      <p>ID: {taskProps.id}</p>

      {/* <img src={URL.createObjectURL(inputElement)} alt={"file.name"} /> */}
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
              <Link to="/">Yes</Link>
              <button onClick={toggleModal}>No</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Details;
