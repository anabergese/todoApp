import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ITask } from "../../Types/index";
import { getAllRequest } from "../API Requests/Requests";
import Task from "../Task/Task";

const Tasks = () => {
  const [allTasks, setAllTasks] = useState([] as ITask[]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getAllRequest()
      .then((result) => {
        setAllTasks(result as ITask[]);
        return allTasks;
      })
      .catch((error) => console.log("error", error));
  }, []);

  const allFilteredTask = () => {
    const filter = searchParams.get("filter");

    switch (filter) {
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
        allFilteredTask().map((task) => {
          return <Task taskProp={task} key={task.id} />;
        })
      )}
    </>
  );
};

export default Tasks;
