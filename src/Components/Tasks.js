import Task from "./Task";

// retornar tasks segun la ruta? ruta delete, only deleted tasks
const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks?.map((task) => {
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
      })}
    </div>
  );
};

export default Tasks;
