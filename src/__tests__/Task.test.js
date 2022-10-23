/**
 * @jest-environment jsdom
 */
import React from "react";
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Task from "../Components/Task";
import AlltasksContext from "../Contexts/AlltasksContext";

test("In /tasks route render task component without tasks", async () => {
  const task = render(
    <StaticRouter>
      <Task />
    </StaticRouter>
  );
  const h1text = await task.findByTestId("h1task");
  expect(h1text.innerHTML).toMatch("You don't have tasks yet");
});

const alltasks = [
  {
    title: "Task example",
    description: "Description example",
    status: "Uncompleted",
    key: "key-1",
    id: "task-1",
  },
  {
    title: "Task example 2",
    description: "Description example 2",
    status: "Uncompleted",
    key: "key-2",
    id: "task-2",
  },
];

const AllTasksProvided = () => (
  <AlltasksContext.Provider value={[alltasks]}>
    <StaticRouter>
      <Task />
    </StaticRouter>
  </AlltasksContext.Provider>
);

test("In /tasks route render task component with tasks", () => {
  window.history.pushState({}, "", "/tasks");
  const renderedTasks = render(<AllTasksProvided />);
  const h2Task1 = renderedTasks.getByText("Task example");
  expect(h2Task1).toBeDefined();
});

test("Complete/Redo text of button and status of task changes when is clicked", async () => {
  window.history.pushState({}, "", "/tasks");
  const renderedTasks = render(<AllTasksProvided />);
  const completeBtn = renderedTasks.getAllByRole("button")[2];
  completeBtn.click();
  console.log(alltasks[0].status);
  expect(alltasks[0].status).toMatch("Completed");
});

// test("Delete/Permanent delete text of button and status of task changes when is clicked", async () => {
//  window.history.pushState({}, "", "/tasks");
// });
