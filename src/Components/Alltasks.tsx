import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import AlltasksContext from "../Contexts/AlltasksContext";
import ThemeContext from "../Contexts/ThemeContext";
import { ITask } from "../Types/index";
import { getAllRequest } from "./API Requests/Requests";
import { Taskdetails } from "./Taskdetails";

const Alltasks = () => {
  const [allTasks, setAllTasks] = useContext(AlltasksContext);
  const location = useLocation();
  const [themes] = useContext(ThemeContext);
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
    getAllRequest()
      .then((result) => {
        return setAllTasks(result as ITask[]);
      })
      .catch((error) => console.log("error", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>All your tasks</h1>
      {!allTasks.length ? (
        <h1 data-testid="h1task">You don&apos;t have tasks yet</h1>
      ) : (
        allFilteredTask().map((task, index) => {
          return (
            <Taskdetails
              key={index}
              id={task.id}
              task={task}
              title={task.title}
              description={task.description}
              photo={task.photo}
              status={task.status}
              deadline={task.deadline}
              filter={filter}
              themes={themes}
            />
          );
        })
      )}
    </>
  );
};

export default Alltasks;
