import { createContext } from "react";

export type Iphoto = {
  lastModified?: number;
  lastModifiedDate?: Date;
  name?: string;
  size?: number;
  type?: string;
  webkitRelativePath?: string;
};

export type TaskStatus = "Deleted" | "Uncompleted" | "Completed";
export type ITask = {
  title: string;
  description: string;
  photo?: Iphoto;
  deadline: string;
  status: TaskStatus;
  id: string;
};

export type IAllTasks = ITask[];
export type SetAllTasks = (allTasks: ITask[]) => void;

const AlltasksContext = createContext<[IAllTasks, SetAllTasks]>([[], () => {}]);

export default AlltasksContext;
