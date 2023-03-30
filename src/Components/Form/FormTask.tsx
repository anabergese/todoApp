import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StyledFormTask, FormBody } from "./FormTask.styled";
import { StyledButton } from "../Buttons/Buttons.styled";
import ThemeContext from "../../Contexts/ThemeContext";
import { ITask } from "../../Types/index";
import { createRequest } from "../API Requests/Requests";
import { useForm } from "react-hook-form";

const FormTask = () => {
  const [themes] = useContext(ThemeContext);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitTaskHandler = (data: ITask) => {
    let photo = data.photo[0];
    photo
      ? (photo = URL.createObjectURL(data.photo[0]))
      : (photo =
          "https://pbxsangoma.com/front/template/default/public/image/icon/none-img.png");

    const title = data.title.charAt(0).toUpperCase() + data.title.slice(1);
    const description =
      data.description.charAt(0).toUpperCase() + data.description.slice(1);

    const deadline = data.deadline;
    createRequest(title, description, photo, deadline)
      .then((result) => {
        const taskcreated = result as ITask;
        const taskId = taskcreated.id;
        navigate(`/details/${taskId}`, { state: result });
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <StyledFormTask
      data-testid="form"
      role="form"
      aria-label="Create a new task"
      onSubmit={handleSubmit(submitTaskHandler)}
    >
      <FormBody theme={themes}>
        <h1>Create a new task</h1>
        <label className="form-label" htmlFor="title">
          <h2>Title</h2>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: true,
              maxLength: 30,
            })}
          />
          {errors.title?.type === "required" && (
            <p className="errorText">The title is required</p>
          )}
          {errors.title?.type === "maxLength" && (
            <p className="errorText">
              The title field must be less than 40 characters
            </p>
          )}
        </label>
        <label>
          <h2>Description:</h2>
          <input
            id="description"
            type="textarea"
            {...register("description")}
          />
        </label>
        <label>
          <h2>Photo:</h2>
          <input type="file" id="photo" {...register("photo")} />
        </label>
        <label>
          <h2>Deadline:</h2>
          <input
            data-testid="date-picker"
            type="date"
            id="deadline"
            {...register("deadline", {
              required: true,
            })}
          />
          {errors.deadline?.type === "required" && (
            <p className="errorText">The deadline is required</p>
          )}
        </label>
      </FormBody>
      <StyledButton type="submit" theme={themes} submitbtn>
        I am done
      </StyledButton>
    </StyledFormTask>
  );
};

export default FormTask;
