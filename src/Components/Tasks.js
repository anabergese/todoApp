import Task from "./Task";
import AlltasksContext from "../AlltasksContext";

const Tasks = () => {
  return (
    <div>
      <AlltasksContext.Consumer>
        {([allTasks]) =>
          allTasks?.map((task) => {
            return (
              <Task
                title={task.title}
                key={task.id}
                description={task.description}
                photo={task.photo}
                video={task.video}
                deadline={task.deadline}
                id={task.id}
              />
            );
          })
        }
      </AlltasksContext.Consumer>
    </div>
  );
};

export default Tasks;
