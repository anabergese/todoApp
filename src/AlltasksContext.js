import { createContext } from "react";
const storageTasks = JSON.parse(localStorage.getItem("allTasks"));

const AlltasksContext = createContext([storageTasks, () => {}]);

export default AlltasksContext;
