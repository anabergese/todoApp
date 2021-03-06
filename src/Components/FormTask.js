import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AlltasksContext from "../Contexts/AlltasksContext";
import nextId from "react-id-generator";

const FormTask = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPhoto, setInputPhoto] = useState("");
  const [inputVideo, setInputVideo] = useState("");
  const [inputDeadline, setInputDeadline] = useState("");
  const [alltasks, setAlltasks] = useContext(AlltasksContext);
  const navigate = useNavigate();

  // const { taskProps } = location.state;
  const submitTaskHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title: inputTitle.charAt(0).toUpperCase() + inputTitle.slice(1),
      description:
        inputDescription.charAt(0).toUpperCase() + inputDescription.slice(1),
      photo: inputPhoto,
      video: inputVideo,
      deadline: inputDeadline,
      status: "Uncompleted",
      key: nextId("key-"),
      id: nextId("task-"),
    };

    setAlltasks([...alltasks, newTask]);
    localStorage.setItem("allTasks", JSON.stringify([...alltasks, newTask]));
    navigate(`/details/${newTask.id}`, { state: { taskProps: newTask } });

    setInputTitle("");
    setInputDescription("");
    setInputPhoto("");
    setInputVideo("");
    setInputDeadline("");
  };

  useEffect(() => {
    console.log("alltasks from Form:", alltasks);
  }, [alltasks]);

  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          submitTaskHandler(e);
        }}
      >
        <div className="form-create">
          <h3>Create a new task</h3>
          <label className="form-create__label">
            <h5>Title:</h5>
            <input
              className="form-create__input"
              value={inputTitle}
              onChange={(e) => {
                setInputTitle(e.target.value);
              }}
              type="text"
            />
          </label>
          <label className="form-create__label">
            <h5>Description:</h5>
            <input
              className="form-create__input"
              value={inputDescription}
              onChange={(e) => {
                setInputDescription(e.target.value);
              }}
              type="textarea"
            />
          </label>
          <label className="form-create__label">
            <h5>Photo:</h5>
            <input
              className="form-create__input"
              onChange={(e) => {
                setInputPhoto(e.target.files[0]);
              }}
              type="file"
              name="file"
            />
          </label>
          <label className="form-create__label">
            <h5>Video:</h5>
            <input
              className="form-create__input"
              value={inputVideo}
              onChange={(e) => {
                setInputVideo(e.target.value);
              }}
              type="file"
              name="video"
            />
          </label>
          <label className="form-create__label">
            <h5>Deadline:</h5>
            <input
              className="form-create__input"
              value={inputDeadline}
              onChange={(e) => {
                setInputDeadline(e.target.value);
              }}
              type="date"
              name="deadline"
            />
          </label>
        </div>
        <button type="submit" className="buttons">
          <strong>I am done</strong>
        </button>
      </form>
    </>
  );
};

export default FormTask;
