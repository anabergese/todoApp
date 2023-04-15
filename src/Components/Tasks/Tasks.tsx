import React from "react";
import { useSearchParams } from "react-router-dom";
import Task from "../Task/Task";
import useSWR from "swr";
import { ITask } from "../../Types/index";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const url = "https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/tasks";

const Tasks = () => {
  const [searchParams] = useSearchParams();
  const { data, error, isLoading } = useSWR<ITask[], Error>(url, fetcher);

  if (error) return <div style={{ textAlign: "center" }}>Failed to load</div>;
  if (isLoading) return <div style={{ textAlign: "center" }}>Loading...</div>;

  // Added when build the app
  if (!data) {
    return <div>Loading...</div>;
  }
  // finish Added when build the app

  const allFilteredTask = () => {
    const filter = searchParams.get("filter");
    switch (filter) {
      case "Deleted": {
        const filteredData = data.filter((task) => task.status === "Deleted");
        return filteredData;
      }
      case "Completed": {
        const filteredData = data.filter((task) => task.status === "Completed");
        return filteredData;
      }
      case "Uncompleted": {
        const filteredData = data.filter(
          (task) => task.status === "Uncompleted"
        );
        return filteredData;
      }
      case "Today": {
        const today = new Date().toISOString().slice(0, 10);
        const filteredData = data.filter((task) => task.deadline === today);
        return filteredData;
      }
      default:
        return data;
    }
  };

  return (
    <>
      <h1>All your tasks</h1>
      {!data.length ? (
        <h1 data-testid="h1task">You don&apos;t have tasks yet</h1>
      ) : (
        allFilteredTask().map((task: ITask) => {
          return <Task taskProp={task} key={task.id} />;
        })
      )}
    </>
  );
};

export default Tasks;
