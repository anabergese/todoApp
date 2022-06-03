import { createContext } from "react";

const task = [{}];

localStorage.setItem("allTasks", JSON.stringify(task));

const AlltasksContext = createContext([task, () => {}]);

export default AlltasksContext;
