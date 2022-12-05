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
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const permanentDeleteRequest = (task) => {
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
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const updateRequest = (status, task) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    status: status,
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
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const createRequest = (
  inputTitle,
  inputDescription,
  inputPhoto,
  inputDeadline
) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    title: `${inputTitle}`,
    description: `${inputDescription}`,
    photo: `${inputPhoto}`,
    status: "Uncompleted",
    deadline: `${inputDeadline}`,
  });

  let requestOptions = {
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
    .then((result) => result)
    .catch((error) => console.log("error", error));
};
