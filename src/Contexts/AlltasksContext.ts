import { createContext } from "react";

type ITask = {
  title: string;
  description: string;
  photo: string;
  video: string;
  deadline: string;
  status: string;
  key: string;
  id: string;
};
type IAllTasks = ITask[];
type SetAllTasks = (allTasks: ITask[]) => void;

const tasks = localStorage.getItem("allTasks");
const allTasks = JSON.parse(tasks || "[]") as IAllTasks;
const setAllTasks = (() => {}) as SetAllTasks;

const AlltasksContext = createContext<[IAllTasks, SetAllTasks]>([
  allTasks,
  setAllTasks,
]);

export default AlltasksContext;
