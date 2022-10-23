/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Task from "../Components/Task";

test("In /tasks route render task component without tasks", async () => {
  const task = render(
    <StaticRouter>
      <Task />
    </StaticRouter>
  );
  const h1text = await task.findByTestId("h1task");
  expect(h1text.innerHTML).toMatch("You don't have tasks yet");
});

// const alltasks = [
//   {
//     title: "Task example",
//     description: "Description example",
//     status: "Uncompleted",
//     key: "key-1",
//     id: "task-1",
//   },
//   {
//     title: "Task example 2",
//     description: "Description example 2",
//     status: "Uncompleted",
//     key: "key-2",
//     id: "task-2",
//   },
// ];

// test("In /tasks route render task component with tasks", async () => {
//   window.history.pushState({}, "", "/tasks");
//   render(
//     <StaticRouter>
//       <Task alltasks={alltasks} key="key-1" />
//     </StaticRouter>
//   );
// });

// test("Complete/Redo text of button and status of task changes when is clicked", async () => {
//   window.history.pushState({}, "", "/tasks");
// });

// test("Delete/Permanent delete text of button and status of task changes when is clicked", async () => {
//   window.history.pushState({}, "", "/tasks");
// });
