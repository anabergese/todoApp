// Start Types related Components
export type TaskStatus = "Deleted" | "Uncompleted" | "Completed";
export type ITask = {
  title: string;
  description: string;
  photo: string;
  deadline: string;
  status: TaskStatus;
  id: string;
  subtasks?: ISubtask[];
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

export type ISubtask = {
  name: string;
  id: string;
  key: string;
  task_id: string;
};

export interface ISubtaskProps {
  allSubtasksProp: ISubtask[];
  subtaskProp: ISubtask;
  setAllSubtasksProps: React.Dispatch<React.SetStateAction<ISubtask[]>>;
}

export interface IModalProps {
  showModal: (a: boolean) => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteHandler: (a: ITask) => void;
}
// End Types related to Styles

// Start Types related to Styles
export type IButtonsProps = {
  submitbtn?: boolean;
  subtaskbtn?: boolean;
  theme: string[];
};

export type IThemeProps = {
  theme: string[];
};

export type ITaskProps = {
  theme: string[];
  detail?: boolean;
};
// End Types related to Styles
