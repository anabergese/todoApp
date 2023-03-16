import React from "react";
import { useSearchParams } from "react-router-dom";
import Task from "../Task/Task";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/tasks";
const Tasks = () => {
  const [searchParams] = useSearchParams();

  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const allFilteredTask = () => {
    const filter = searchParams.get("filter");

    switch (filter) {
      case "Deleted":
        return data.filter((task) => task.status === "Deleted");
      case "Completed":
        return data.filter((task) => task.status === "Completed");
      case "Uncompleted":
        return data.filter((task) => task.status === "Uncompleted");
      case "Today":
        const today = new Date().toISOString().slice(0, 10);
        return data.filter((task) => task.deadline === today);
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
        allFilteredTask().map((task) => {
          return <Task taskProp={task} key={task.id} />;
        })
      )}
    </>
  );
};

export default Tasks;
