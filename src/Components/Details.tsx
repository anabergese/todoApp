/* eslint-disable jsx-a11y/no-autofocus */
import { useLocation } from "react-router-dom";
import { FunctionComponent } from "react";
import Task from "././Task";
import { ITask } from "../Types/index";

const Details: FunctionComponent = () => {
  const location = useLocation();
  const task = location.state as ITask;

  return (
    <>
      <h1 data-testid="h1Details">Details Page</h1>
      <Task taskProp={task} />
    </>
  );
};

export default Details;
