import Task from "./Task";
import AlltasksContext from "../Contexts/AlltasksContext";

import { useContext } from "react";

const Tasks = () => {
  const [alltasks] = useContext(AlltasksContext);

  return (
    <AlltasksContext.Consumer>
      <div>
        {alltasks?.map((alltasks) => {
          return (
            // eslint-disable-next-line react/jsx-key
            ([alltasks]) =>
              alltasks?.map((task) => {
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
            // {/* <img src={URL.createObjectURL(task.photo)} alt="file.name" />  */}
          );
        })}
      </div>
    </AlltasksContext.Consumer>
  );
};

export default Tasks;
