// export type IphotoProp = {
//   lastModified?: number;
//   lastModifiedDate?: Date;
//   name?: string;
//   size?: number;
//   type?: string;
//   webkitRelativePath?: string;
// };

export type TaskStatus = "Deleted" | "Uncompleted" | "Completed";
export type ITask = {
  title: string;
  description: string;
  photo: string;
  deadline: string;
  status: TaskStatus;
  id: string;
};
