import { createContext } from "react";

const deletedTask = [];

const AllDeletedTasks = createContext([deletedTask, () => {}]);

export default AllDeletedTasks;
