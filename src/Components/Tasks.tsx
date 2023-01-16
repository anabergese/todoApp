import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ITask } from "../Types/index";
import { getAllRequest } from "./API Requests/Requests";
import Task from "././Task";

const Tasks = () => {
  const [allTasks, setAllTasks] = useState([] as ITask[]);
  const [shouldUpdate, setShouldUpdate] = useState(true);
  const location = useLocation();
  const filter = (
    new URLSearchParams(location.search).get("filter") || ""
  ).toLowerCase();

  const allFilteredTask = () => {
    switch (filter) {
      case "deleted":
        return allTasks.filter((task) => task.status === "Deleted");
      case "completed":
        return allTasks.filter((task) => task.status === "Completed");
      case "uncompleted":
        return allTasks.filter((task) => task.status === "Uncompleted");
      default:
        return allTasks;
    }
  };

  useEffect(() => {
    if (shouldUpdate) {
      getAllRequest()
        .then((result) => {
          return setAllTasks(result as ITask[]);
        })
        .catch((error) => console.log("error", error));
      setShouldUpdate(false);
    }
  }, [shouldUpdate]);

  return (
    <>
      <h1>All your tasks</h1>
      {!allTasks.length ? (
        <h1 data-testid="h1task">You don&apos;t have tasks yet</h1>
      ) : (
        allFilteredTask().map((task, index) => {
          return <Task taskProp={task} key={index} />;
        })
      )}
    </>
  );
};

export default Tasks;
