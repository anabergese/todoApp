import { ITask, TaskStatus } from "../../Types/index";

export const getAllRequest = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

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

export const permanentDeleteRequest = (task: ITask) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

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

export const updateRequest = (status: TaskStatus, task: ITask) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    status: status as string,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/tasks/${task.id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result as ITask)
    .catch((error) => console.log("error", error));
};

export const createRequest = (
  inputTitle: string,
  inputDescription: string,
  inputPhoto: string,
  inputDeadline: string
) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

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
    redirect: "follow",
  };

  return fetch(
    "https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/tasks",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result as ITask)
    .catch((error) => console.log("error", error));
};