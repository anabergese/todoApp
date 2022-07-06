import { useContext } from "react";
import AllDeletedTasksContext from "../Contexts/AllDeletedTasksContext";
import { Link } from "react-router-dom";

const DeletedTasks = () => {
  // eslint-disable-next-line no-undef
  const [allDeletedTasks] = useContext(AllDeletedTasksContext);

  return (
    <div className="container">
      {allDeletedTasks?.map((task) => {
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
                    deleteHandler(task, allDeletedTasks);
                  }}
                >
                  Delete Task
                </button>
                <button
                  className="button button-3"
                  onClick={() => {
                    restoreHandler(task, allDeletedTasks);
                  }}
                >
                  Restore Task
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
                  <img
                    src={URL.createObjectURL(task.photo)}
                    className="task-image"
                    alt="file.name"
                  />
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

export default DeletedTasks;
