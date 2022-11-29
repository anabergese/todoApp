export type IphotoProp = {
  lastModified?: number;
  lastModifiedDate?: Date;
  name?: string;
  size?: number;
  type?: string;
  webkitRelativePath?: string;
};
export type ITaskProps = {
  title: string;
  description: string;
  photo?: IphotoProp;
  deadline: string;
  status: string;
  key: string;
  id: string;
};

export type Iphoto = {
  lastModified?: number;
  lastModifiedDate?: Date;
  name?: string;
  size?: number;
  type?: string;
  webkitRelativePath?: string;
};

export type TaskStatus = "Deleted" | "Uncompleted" | "Completed";
export type ITask = {
  title: string;
  description: string;
  photo?: Iphoto;
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

// IFeelings:
//{ id: 5, created_at: 1668368062000, Feel_id: 1, Feeling: 'Terrible',
// Image_URL: 'https://cdn-icons-png.flaticon.com/512/2164/2164333.png'}
