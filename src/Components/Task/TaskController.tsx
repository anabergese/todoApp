import { TaskStatus, ITask } from "../../Types/index";

export const deleteHandler = (task: ITask) => {
  tasksHandler("Deleted", task);
  toggleModal();
};

export const completeHandler = (task: ITask) => {
  if (task.status == "Uncompleted") tasksHandler("Completed", task);
  else if (task.status == "Completed") tasksHandler("Uncompleted", task);
  else if (task.status == "Deleted") tasksHandler("Uncompleted", task);
};
