import { useContext } from "react";
import AllDeletedTasksContext from "../Contexts/AllDeletedTasksContext";
import AlltasksContext from "../Contexts/AlltasksContext";
import { Link } from "react-router-dom";

const DeletedTasks = () => {
  // eslint-disable-next-line no-undef
  const [allDeletedTasks, setAllDeletedTasks] = useContext(
    AllDeletedTasksContext
  );
  const [alltasks] = useContext(AlltasksContext);

  const deleteHandler = (task, alltasks) => {
    console.log(task, alltasks);
  };

  const restoreHandler = (task, allDeletedTasks) => {
    // buscar entre las deletes tasks, la current task
    const taskIndex = allDeletedTasks.findIndex((item) => item.id === task.id);
    console.log("taskindex", taskIndex);
    const copy = [...allDeletedTasks];
    // marcarla con el status "uncompleted"
    copy[taskIndex].status = "Uncompleted";
    setAllDeletedTasks(copy);
    // de las alldeletedtasks actualizar para que en localstorage queden todas las que tienen status = deleted
    const deletedTasks = copy.filter((t) =>
      t.status === "Deleted" ? t : null
    );
    localStorage.setItem("allDeletedTasks", JSON.stringify([...deletedTasks]));
    // actualizar las alltasks con la nueva uncomplete task
    localStorage.setItem("allTasks", JSON.stringify(copy));
  };

  return (
    <div className="container">
      {allDeletedTasks?.map((task) => {
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
                    restoreHandler(task, allDeletedTasks);
                  }}
                >
                  Restore
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

export default DeletedTasks;
