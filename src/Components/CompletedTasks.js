import { useContext } from "react";
import AlltasksContext from "../Contexts/AlltasksContext";
import { Link } from "react-router-dom";

const CompletedTasks = () => {
  const [alltasks] = useContext(AlltasksContext);
  const allcompletedTasks = alltasks.filter((t) => t.status === "Completed");

  return (
    <div className="container">
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
                    completeHandler(task, alltasks);
                  }}
                >
                  Mark as Complete
                </button>
              </div>
            </div>

            <div>
              <p>{task.description}</p>
            </div>
            <div>
              {task.photo ? (
                <img
                  src={URL.createObjectURL(task.photo)}
                  className="task-image center"
                  alt="file.name"
                />
              ) : null}
              <p>
                Video:{" "}
                {task.video ? (
                  <video src={video} width="750" height="500" controls></video>
                ) : null}{" "}
              </p>
            </div>
            <div>
              <h4>Status: </h4>
              <p>{task.status}</p>
              <h4>Deadline: </h4>
              <p>{task.deadline}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompletedTasks;
