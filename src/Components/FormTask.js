import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AlltasksContext from "../Contexts/AlltasksContext";
import nextId from "react-id-generator";
import { StyledFormTask, FormBody } from "./Styles/FormTask.styled";
import { StyledButton } from "./Styles/Buttons.styled";
import ThemeContext from "../Contexts/ThemeContext";

const FormTask = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPhoto, setInputPhoto] = useState("");
  const [inputVideo, setInputVideo] = useState("");
  const [inputDeadline, setInputDeadline] = useState("");
  const [alltasks, setAlltasks] = useContext(AlltasksContext);
  const { themes } = useContext(ThemeContext);

  const navigate = useNavigate();

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
    navigate(`/details/${newTask.id}`, { state: newTask });

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
    <StyledFormTask
      onSubmit={(e) => {
        submitTaskHandler(e);
      }}
    >
      <FormBody theme={themes}>
        <h1>Create a new task</h1>
        <label>
          <h5>Title:</h5>
          <input
            value={inputTitle}
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
            type="text"
          />
        </label>
        <label>
          <h5>Description:</h5>
          <input
            value={inputDescription}
            onChange={(e) => {
              setInputDescription(e.target.value);
            }}
            type="textarea"
          />
        </label>
        <label>
          <h5>Photo:</h5>
          <input
            onChange={(e) => {
              setInputPhoto(e.target.files[0]);
            }}
            type="file"
            name="file"
          />
        </label>
        <label>
          <h5>Video:</h5>
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
          <h5>Deadline:</h5>
          <input
            value={inputDeadline}
            onChange={(e) => {
              setInputDeadline(e.target.value);
            }}
            type="date"
            name="deadline"
          />
        </label>
      </FormBody>
      <StyledButton type="submit" theme={themes} submit>
        I am done
      </StyledButton>
    </StyledFormTask>
  );
};

export default FormTask;
