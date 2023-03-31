/**
 * @jest-environment jsdom
 */

import React from "react";
import { createMemoryHistory } from "history";
import { expect, test, describe } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Tasks from "./Tasks";

const history = createMemoryHistory();
history.push("/tasks");

// if (typeof window !== "undefined") {
//   console.log("Running in a browser environment");
// } else {
//   console.log("Running in a Node environment");
// }

const AllTasksProvided = () => (
  <BrowserRouter history={history}>
    <Tasks />
  </BrowserRouter>
);

describe("Task component", () => {
  test("Render task component in /tasks route", () => {
    render(<AllTasksProvided />);
    expect(history.location.pathname).toBe("/tasks");
  });

  test("Render task component with tasks", async () => {
    render(<AllTasksProvided />);
    const h2Task1 = await waitFor(() => screen.getByText("Task example"));
    expect(h2Task1.innerHTML).toMatch(/Task example/i);
  });
});

// describe("Tasks status", () => {
//   test("Tasks have Uncompleted status when initially rendered", () => {
//     render(<AllTasksProvided />);
//     expect(alltasks[0].status).toMatch(/Uncompleted/i);
//     expect(alltasks[1].status).toMatch(/Uncompleted/i);
//   });

//   test("Status of task changes to Completed when Complete button is clicked", () => {
//     const renderedTasks = render(<AllTasksProvided />);
//     const completeBtn = renderedTasks.getAllByRole("button", {
//       name: /Complete/i,
//     })[0];
//     expect(alltasks[0].status).toMatch(/Uncompleted/i);
//     completeBtn.click();
//     expect(alltasks[0].status).toMatch(/Completed/i);
//   });

//   test("Status of task changes to Deleted when Delete button is clicked", () => {
//     const renderedTasks = render(<AllTasksProvided />);
//     const completeBtn = renderedTasks.getAllByRole("button", {
//       name: /Delete/i,
//     })[0];
//     completeBtn.click();
//     expect(alltasks[0].status).toMatch(/Deleted/i);
//   });
// });

// describe("Text on task buttons", () => {
//   test("Text of Complete button should change to Redo when is clicked", () => {
//     const renderedTasks = render(<AllTasksProvided />);
//     const completeBtn = renderedTasks.getAllByRole("button", {
//       name: /Complete/i,
//     })[0];
//     completeBtn.click();
//     const completeBtnAfterClick = renderedTasks.getAllByRole("button", {
//       name: /Redo/i,
//     })[0];
//     expect(completeBtnAfterClick.innerHTML).toMatch(/Redo/i);
//   });

//   test("Text of Delete button should change to Permanent Delete when is clicked", () => {
//     const renderedTasks = render(<AllTasksProvided />);
//     const deleteBtn = renderedTasks.getAllByRole("button", {
//       name: /Delete/i,
//     })[0];
//     deleteBtn.click();
//     expect(deleteBtn.innerHTML).toMatch(/Permanent Delete/i);
//   });
// });
