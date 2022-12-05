import { useState, useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import nextId from "react-id-generator";
import { StyledFormTask, FormBody } from "./Styles/FormTask.styled";
import { StyledButton } from "./Styles/Buttons.styled";
import ThemeContext from "../Contexts/ThemeContext";
import AlltasksContext from "../Contexts/AlltasksContext";
import { ITask } from "../Types/index";
import { createRequest } from "./API Requests/Requests";

const FormTask = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPhoto, setInputPhoto] = useState("");
  const [inputDeadline, setInputDeadline] = useState("");
  const [allTasks, setAllTasks] = useContext(AlltasksContext);
  const [task, setTask] = useState({});
  const [themes] = useContext(ThemeContext);
  const navigate = useNavigate();

  const submitTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      title: inputTitle.charAt(0).toUpperCase() + inputTitle.slice(1),
      description:
        inputDescription.charAt(0).toUpperCase() + inputDescription.slice(1),
      photo: inputPhoto,
      deadline: inputDeadline,
      status: "Uncompleted",
      id: nextId("task-"),
    } as ITask;
    setAllTasks([...allTasks, newTask]);
    localStorage.setItem("allTasks", JSON.stringify([...allTasks, newTask]));

    createRequest(inputTitle, inputDescription, inputPhoto, inputDeadline)
      .then((result) => {
        console.log(result); // está el objeto completo
        setTask(result);
        navigate(`/details/${result.id}`, { state: result });
      })
      .catch((error) => console.log("error", error));

    setInputTitle("");
    setInputDescription("");
    setInputPhoto("");
    setInputDeadline("");
  };

  return (
    <StyledFormTask
      data-testid="form"
      role="form"
      aria-label="Create a new task"
      onSubmit={(e) => {
        submitTaskHandler(e);
      }}
    >
      <FormBody theme={themes}>
        <h1>Create a new task</h1>
        <label>
          <h2>Title:</h2>
          <input
            name="title"
            value={inputTitle}
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
            type="text"
          />
        </label>
        <label>
          <h2>Description:</h2>
          <input
            name="description"
            value={inputDescription}
            onChange={(e) => {
              setInputDescription(e.target.value);
            }}
            type="textarea"
          />
        </label>
        <label>
          <h2>Photo:</h2>
          <input
            onChange={(e) => {
              if (!e.target.files) {
                return;
              } else {
                setInputPhoto(URL.createObjectURL(e.target.files[0]));
              }
            }}
            type="file"
            name="file"
          />
        </label>
        <label>
          <h2>Deadline:</h2>
          <input
            data-testid="date-picker"
            value={inputDeadline}
            onChange={(e) => {
              setInputDeadline(e.target.value);
            }}
            type="date"
            name="deadline"
          />
        </label>
      </FormBody>
      <StyledButton type="submit" theme={themes} submitbtn>
        I am done
      </StyledButton>
    </StyledFormTask>
  );
};

export default FormTask;
