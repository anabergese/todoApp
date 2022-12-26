import { useContext, useEffect } from "react";
import ThemeContext from "../Contexts/ThemeContext";
// import { ITask } from "../Types/index";
// import { getAllRequest } from "./API Requests/Requests";
import { useLocation } from "react-router-dom";
import { Taskdetails } from "./Taskdetails";
import { getTaskRequest } from "./API Requests/Requests";

export const Details = (props) => {
  const [themes] = useContext(ThemeContext);
  console.log("propstask:", props);
  const location = useLocation();
  const taskProps = location.state;
  console.log("taskprops:", taskProps);

  useEffect(() => {
    getTaskRequest(taskProps.id)
      .then((result) => {
        return result;
      })
      .catch((error) => console.log("error", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskProps.status]);

  return (
    <>
      <h1>You detailed task</h1>
      <Taskdetails
        id={taskProps.id}
        task={taskProps.task}
        title={taskProps.title}
        description={taskProps.description}
        photo={taskProps.photo}
        status={taskProps.status}
        deadline={taskProps.deadline}
        filter={taskProps.filter}
        themes={themes}
      />
    </>
  );
};
