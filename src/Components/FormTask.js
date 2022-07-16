import { useState, useEffect, useContext } from "react";
import AlltasksContext from "../Contexts/AlltasksContext";

import nextId from "react-id-generator";

const FormTask = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPhoto, setInputPhoto] = useState("");
  const [inputVideo, setInputVideo] = useState("");
  const [inputDeadline, setInputDeadline] = useState("");
  const [alltasks, setAlltasks] = useContext(AlltasksContext);

  const submitTaskHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title: inputTitle.charAt(0).toUpperCase() + inputTitle.slice(1),
      description:
        inputDescription.charAt(0).toUpperCase() + inputDescription.slice(1),
      photo: inputPhoto,
      video: inputVideo,
      deadline: inputDeadline,
      status: "uncompleted",
      key: nextId("key-"),
      id: nextId("task-"),
    };

    setAlltasks([...alltasks, newTask]);
    localStorage.setItem("allTasks", JSON.stringify([...alltasks, newTask]));

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
    <div className="center">
      <form
        onSubmit={(e) => {
          submitTaskHandler(e);
        }}
      >
        <div className="form-create">
          <h1>Create a new task</h1>
          <label>
            <h4>Title:</h4>
            <input
              value={inputTitle}
              onChange={(e) => {
                setInputTitle(e.target.value);
              }}
              type="text"
            />
          </label>
          <label>
            <h4>Description:</h4>
            <input
              value={inputDescription}
              onChange={(e) => {
                setInputDescription(e.target.value);
              }}
              type="textarea"
            />
          </label>
          <label>
            <h4>Photo:</h4>
            <input
              onChange={(e) => {
                setInputPhoto(e.target.files[0]);
              }}
              type="file"
              name="file"
            />
          </label>
          <label>
            <h4>Video:</h4>
            <input
              value={inputVideo}
              onChange={(e) => {
                setInputVideo(e.target.value);
              }}
              type="file"
              name="video"
            />
          </label>
          <label>
            <h4>Deadline:</h4>
            <input
              value={inputDeadline}
              onChange={(e) => {
                setInputDeadline(e.target.value);
              }}
              type="date"
              name="deadline"
            />
          </label>
        </div>
        <button type="submit" className="center">
          I AM DONE
        </button>
      </form>
    </div>
  );
};

export default FormTask;
