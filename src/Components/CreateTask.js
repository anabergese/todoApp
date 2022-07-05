import { useState, useEffect, useContext } from "react";
import AlltasksContext from "../Contexts/AlltasksContext";

import nextId from "react-id-generator";

const CreateTask = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPhoto, setInputPhoto] = useState("");
  const [inputVideo, setInputVideo] = useState("");
  const [inputDeadline, setInputDeadline] = useState("");
  const [alltasks, setAlltasks] = useContext(AlltasksContext);
  // const [task, setTask] = useState({});

  const submitTaskHandler = (e) => {
    e.preventDefault();

    // sincrono
    const newTask = {
      // creas nuevo objeto con estructura Task
      title: inputTitle,
      description: inputDescription,
      photo: inputPhoto,
      video: inputVideo,
      deadline: inputDeadline,
      status: "uncompleted",
      key: nextId("key-"),
      id: nextId("task-"),
    };

    // alltasks -> [{ title: '....' }]
    setAlltasks([...alltasks, newTask]);
    localStorage.setItem("allTasks", JSON.stringify([...alltasks, newTask]));

    setInputTitle("");
    setInputDescription("");
    setInputPhoto("");
    setInputVideo("");
    setInputDeadline("");
    // navigate(`/details/${task.id}`, { state: { taskProps: task } }); // creo que no
  };

  useEffect(() => {
    console.log(alltasks);
  }, [alltasks]);

  return (
    <div className="container">
      <header>
        <h1>Create a new task</h1>
      </header>
      <form
        className="form-create"
        onSubmit={(e) => {
          submitTaskHandler(e);
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
            // value={inputPhoto.filename}
            onChange={(e) => {
              // e.target.value === C:\....nombre_de_la_foto
              console.log(e.target.files[0]);
              setInputPhoto(e.target.files[0]);
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

        <button type="submit">I AM DONE</button>
      </form>
    </div>
  );
};

export default CreateTask;
