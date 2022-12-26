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

export type IUser = {
  email?: string;
  email_verified?: boolean;
  family_name?: string;
  given_name?: string;
  locale?: string;
  name?: string;
  nickname?: string;
  picture?: string;
  sub?: string;
  updated_at?: string;
};

// Types related to Styles Folder
export type IButtonsProps = {
  submitbtn?: boolean;
  theme: string[];
};

export type IThemeProps = {
  theme: string[];
};

export type ITaskProps = {
  theme: string[];
  detail?: boolean;
};
