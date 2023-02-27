/* eslint-disable jsx-a11y/no-autofocus */
import { useLocation } from "react-router-dom";
import { useContext, FunctionComponent } from "react";

import { ITask } from "../../Types/index";
import { StyledContentTask } from "./Task.styled";
import ThemeContext from "../../Contexts/ThemeContext";

import SubTasks from "../SubTasks/SubTasks";

const Content: FunctionComponent<{ task: ITask }> = ({ task }) => {
  const [themes] = useContext(ThemeContext);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <StyledContentTask theme={themes} detail>
      <div>
        {pathname.includes("/details") ? (
          <p>
            <strong>Description:</strong>
            {task.description}
          </p>
        ) : null}
        <p>
          <strong>Deadline:</strong> {task.deadline}
        </p>
        <p
          className={
            task.status === "Deleted" || task.status === "Completed"
              ? "highlight"
              : ""
          }
        >
          <strong>Status:</strong>
          {task.status}
        </p>
        {pathname.includes("/details") ? (
          <SubTasks task_id={task.id} subtasks={task.subtasks} />
        ) : null}
      </div>
      <div>
        {task.photo ? <img src={task.photo} alt={`${task.title}`} /> : null}
      </div>
    </StyledContentTask>
  );
};

export default Content;
