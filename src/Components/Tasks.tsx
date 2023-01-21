import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ITask } from "../Types/index";
import { getAllRequest } from "./API Requests/Requests";
import Task from "././Task";
import { useSearchParams } from "react-router-dom";

const Tasks = () => {
  const [allTasks, setAllTasks] = useState([] as ITask[]);
  const [params, setParams] = useSearchParams();
  const filter = params.get("filter") ?? "";

  useEffect(() => {
    getAllRequest()
      .then((result) => {
        setAllTasks(result as ITask[]);
        return allTasks;
      })
      .catch((error) => console.log("error", error));
    setParams(filter);
  }, [filter]);

  const allFilteredTask = () => {
    switch (params) {
      case "Deleted":
        return allTasks.filter((task) => task.status === "Deleted");
      case "Completed":
        return allTasks.filter((task) => task.status === "Completed");
      case "Uncompleted":
        return allTasks.filter((task) => task.status === "Uncompleted");
      default:
        return allTasks;
    }
  };

  return (
    <>
      <h1>All your tasks</h1>
      {!allTasks.length ? (
        <h1 data-testid="h1task">You don&apos;t have tasks yet</h1>
      ) : (
        allFilteredTask().map((task, index) => {
          console.log("filter:", filter);
          console.log("params:", params.get("filter"));

          return <Task taskProp={task} key={index} />;
        })
      )}
    </>
  );
};

export default Tasks;
