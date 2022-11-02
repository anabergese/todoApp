import { createContext } from "react";

type Iphoto = {
  lastModified?: number;
  lastModifiedDate?: Date;
  name?: string;
  size?: number;
  type?: string;
  webkitRelativePath?: string;
};

type ITask = {
  title: string;
  description: string;
  photo?: Iphoto;
  deadline: string;
  status: string;
  key: string;
  id: string;
};

export type IAllTasks = ITask[];
type SetAllTasks = (allTasks: ITask[]) => void;

const tasks = localStorage.getItem("allTasks");
const allTasks = JSON.parse(tasks || "[]") as IAllTasks;
const setAllTasks = (() => {}) as SetAllTasks;

const AlltasksContext = createContext<[IAllTasks, SetAllTasks]>([
  allTasks,
  setAllTasks,
]);

export default AlltasksContext;
