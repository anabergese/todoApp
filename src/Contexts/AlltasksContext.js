import { createContext } from "react";

const task = [];


const AlltasksContext = createContext([task, () => {}]);

export default AlltasksContext;
