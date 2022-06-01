import { useState } from "react";
import Tasks from "./Tasks";
import nextId from "react-id-generator";

const CreateTask = () => {
  //const title = "Make a coffee";
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPhoto, setInputPhoto] = useState("");
  const [inputVideo, setInputVideo] = useState("");
  const [inputDeadline, setInputDeadline] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitTaskHandler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        title: inputTitle,
        description: inputDescription,
        photo: inputPhoto,
        video: inputVideo,
        deadline: inputDeadline,
        key: Math.random() * 1000, // use index of the array
        id: nextId("task-"),
      },
    ]);
    console.log(tasks);
    setInputTitle("");
    setInputDescription("");
    setInputPhoto("");
    setInputVideo("");
    setInputDeadline("");
  };

  return (
    <div>
      <header>
        <h1>Create a new task</h1>
      </header>
      <form className="form-create" onSubmit={submitTaskHandler}>
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
            name="photo"
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
        <Tasks tasks={tasks} />
      </form>
    </div>
  );
};

export default CreateTask;
