import { useContext } from "react";
import AlltasksContext from "../Contexts/AlltasksContext";
import { Link } from "react-router-dom";

const CompletedTasks = () => {
  const [alltasks, setAlltasks] = useContext(AlltasksContext);
  const allcompletedTasks = alltasks.filter((t) => t.status === "Completed");

  const redoHandler = (task, alltasks) => {
    const taskIndex = alltasks.findIndex((item) => item.id === task.id);
    const copy = [...alltasks];
    copy[taskIndex].status = "Uncompleted";
    setAlltasks(copy);

    localStorage.setItem("allTasks", JSON.stringify(copy));

    const completedTasks = alltasks.filter((t) =>
      t.status === "Completed" ? t : null
    );

    localStorage.setItem(
      "allcompletedTasks",
      JSON.stringify([...completedTasks])
    );
  };

  return (
    <div>
      {allcompletedTasks?.map((task) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="task">
            <div className="task-title">
              <div>
                <h2> {task.title}</h2>
              </div>
              <div className="task-buttons">
                <Link
                  className="button button-1"
                  to={`/details/${task.id}`}
                  state={{ taskProps: task }}
                >
                  See details
                </Link>
                <button
                  className="button button-2"
                  onClick={() => {
                    deleteHandler(task, alltasks);
                  }}
                >
                  Delete Task
                </button>
                <button
                  className="button button-3"
                  onClick={() => {
                    redoHandler(task, alltasks);
                  }}
                >
                  Redo
                </button>
              </div>
            </div>
            <p>Deadline: {task.deadline}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CompletedTasks;
