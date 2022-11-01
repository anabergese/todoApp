import { createContext } from "react";

// let task: {
//   title: "";
//   description: "";
//   photo: "";
//   video: "";
//   deadline: "";
//   status: "";
//   key: "";
//   id: "";
// }[];
const task = [];

const AlltasksContext = createContext([task, () => {}]);

export default AlltasksContext;
