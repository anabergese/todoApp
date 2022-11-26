import { createContext } from "react";
import { ITask } from "../Types/index";

export type IAllTasks = ITask[];
export type SetAllTasks = (allTasks: ITask[]) => void;

const AlltasksContext = createContext<[IAllTasks, SetAllTasks]>([[], () => {}]);

export default AlltasksContext;
