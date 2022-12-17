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

export type IFeel = "Ok" | "Good" | "Happy" | "Sad" | "Terrible";
export type IFeelings = {
  Feel_id: number;
  Feeling: IFeel;
  Image_URL: string;
};

export type IReqOptions = {
  method: string;
  headers: string;
  body: string;
  redirect: string;
};
