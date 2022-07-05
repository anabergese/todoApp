import { useContext } from "react";
import AlltasksContext from "../Contexts/AlltasksContext";
import { Link } from "react-router-dom";

const CompletedTasks = () => {
  const [alltasks] = useContext(AlltasksContext);
  const allcompletedTasks = alltasks.filter((t) => t.status === "completed");
  return (
    <div className="container">
      {allcompletedTasks?.map((task) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="task">
            <div className="task-title">
              <div>
                <h2>Title:</h2>
                <p> {task.title}</p>
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
              <h2>Description: </h2>
              <p>{task.description}</p>
              <p>{task.key}</p>
              <p>Status: {task.status}</p>
            </div>
            <div>
              <p>
                Photo:{" "}
                {task.photo ? (
                  <img src={URL.createObjectURL(task.photo)} alt="file.name" />
                ) : null}
              </p>
              <p>
                Video:{" "}
                {task.video ? (
                  <video src={video} width="750" height="500" controls></video>
                ) : null}{" "}
              </p>
            </div>
            <div>
              <h2>Deadline: </h2>
              <p>{task.deadline}</p>
              <p>ID: {task.id}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompletedTasks;
