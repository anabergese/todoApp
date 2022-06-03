import { useState, useEffect, useContext } from "react";
import AlltasksContext from "../Contexts/AlltasksContext";

import nextId from "react-id-generator";
import Task from "./Task";

const CreateTask = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPhoto, setInputPhoto] = useState("");
  const [inputVideo, setInputVideo] = useState("");
  const [inputDeadline, setInputDeadline] = useState("");
  const [alltasks, setAlltasks] = useContext(AlltasksContext);
  const [task, setTask] = useState({});

  useEffect(() => {
    if (localStorage.getItem("allTasks")) {
      const storedTasks = JSON.parse(localStorage.getItem("allTasks"));
      setAlltasks(storedTasks);
    }
  }, []);

  const submitTaskHandler = () => {
    setTask({
      title: inputTitle,
      description: inputDescription,
      photo: inputPhoto,
      video: inputVideo,
      deadline: inputDeadline,
      status: "uncompleted",
      key: nextId("key-"),
      id: nextId("task-"),
    });
    setAlltasks([...alltasks, task]);
    localStorage.setItem("allTasks", JSON.stringify([...alltasks, task]));

    setInputTitle("");
    setInputDescription("");
    setInputPhoto("");
    setInputVideo("");
    setInputDeadline("");
    // navigate(`/details/${task.id}`, { state: { taskProps: task } }); // creo que no
  };

  return (
    <div>
      <header>
        <h1>Create a new task</h1>
      </header>
      <form
        className="form-create"
        onSubmit={(e) => {
          e.preventDefault();
          submitTaskHandler();
        }}
      >
        <label>
          <p>Title:</p>
          <input
            value={inputTitle}
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
            type="text"
          />
        </label>
        <label>
          <p>Description:</p>
          <input
            value={inputDescription}
            onChange={(e) => {
              setInputDescription(e.target.value);
            }}
            type="textarea"
          />
        </label>
        <label>
          <p>Photo:</p>
          <input
            value={inputPhoto}
            onChange={(e) => {
              setInputPhoto(e.target.value);
            }}
            type="file"
            name="file"
          />
        </label>
        <label>
          <p>Video:</p>
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
          <p>Deadline:</p>
          <input
            value={inputDeadline}
            onChange={(e) => {
              setInputDeadline(e.target.value);
            }}
            type="date"
            name="deadline"
          />
        </label>

        <button>I AM DONE</button>
      </form>

      <Task />
    </div>
  );
};

export default CreateTask;
