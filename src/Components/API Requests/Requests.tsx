import { ITask, TaskStatus } from "../../Types/index";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const createRequest = (
  inputTitle: string,
  inputDescription: string,
  inputPhoto: string,
  inputDeadline: string
) => {
  const raw = JSON.stringify({
    title: `${inputTitle}`,
    description: `${inputDescription}`,
    photo: `${inputPhoto}`,
    status: "Uncompleted",
    deadline: `${inputDeadline}`,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  return fetch(
    "https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/tasks",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result as ITask)
    .catch((error) => console.log("error", error));
};

export const getAllRequest = () => {
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  return fetch(
    "https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/tasks",
    requestOptions
  )
    .then((response) => response.json())
    .then((result: ITask[]) => result as [])
    .catch((error) => console.log("error", error));
};

export const updateRequest = (status: TaskStatus, task: ITask) => {
  const raw = JSON.stringify({
    status: status as string,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  return fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/tasks/${task.id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result as ITask)
    .catch((error) => console.log("error", error));
};

export const updateSubtasks = (subtasks: string, taskID: string) => {
  const raw = JSON.stringify({
    subtasks: subtasks,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  return fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/tasks/${taskID}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result as ITask)
    .catch((error) => console.log("error", error));
};

export const permanentDeleteRequest = (task: ITask) => {
  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };

  return fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/tasks/${task.id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result: null) => result)
    .catch((error) => console.log("error", error));
};

export const getTaskRequest = (task: ITask) => {
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  return fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/tasks/${task.id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result: null) => result)
    .catch((error) => console.log("error", error));
};

export const getSubTaskRequest = (task: string) => {
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  return fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/tasks/${task}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result: null) => result)
    .catch((error) => console.log("error", error));
};
