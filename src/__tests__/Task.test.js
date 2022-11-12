/**
 * @jest-environment jsdom
 */
import React from "react";
import { createMemoryHistory } from "history";

import { expect, test, describe, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Task from "../Components/Task";
import AlltasksContext from "../Contexts/AlltasksContext";

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

const mockSetAlltasks = jest.fn();
const history = createMemoryHistory();
history.push("/tasks");

const AllTasksProvided = () => (
  <AlltasksContext.Provider value={[alltasks, mockSetAlltasks]}>
    <BrowserRouter history={history}>
      <Task />
    </BrowserRouter>
  </AlltasksContext.Provider>
);

describe("Task component", () => {
  test("Render task component in /tasks route", () => {
    render(<AllTasksProvided />);
    expect(history.location.pathname).toBe("/tasks");
  });

  test("Render task component without tasks", () => {
    render(
      <BrowserRouter>
        <Task />
      </BrowserRouter>
    );
    const h1text = screen.getByTestId("h1task");
    expect(h1text.textContent).toBe("You don't have tasks yet");
  });

  test("Render task component with tasks", () => {
    const renderedTasks = render(<AllTasksProvided />);
    const h2Task1 = renderedTasks.getByText("Task example");
    expect(h2Task1.innerHTML).toMatch(/Task example/i);
  });
});

describe("Tasks status", () => {
  test("Tasks have Uncompleted status when initially rendered", () => {
    render(<AllTasksProvided />);
    expect(alltasks[0].status).toMatch(/Uncompleted/i);
    expect(alltasks[1].status).toMatch(/Uncompleted/i);
  });

  test("Status of task changes to Completed when Complete button is clicked", () => {
    const renderedTasks = render(<AllTasksProvided />);
    const completeBtn = renderedTasks.getAllByRole("button", {
      name: /Complete/i,
    })[0];
    expect(alltasks[0].status).toMatch(/Uncompleted/i);
    completeBtn.click();
    expect(alltasks[0].status).toMatch(/Completed/i);
  });

  test("Status of task changes to Deleted when Delete button is clicked", () => {
    const renderedTasks = render(<AllTasksProvided />);
    const completeBtn = renderedTasks.getAllByRole("button", {
      name: /Delete/i,
    })[0];
    completeBtn.click();
    expect(alltasks[0].status).toMatch(/Deleted/i);
  });
});

describe("Text on task buttons", () => {
  // test("Text of Complete button should change to Redo when is clicked", () => {
  // const renderedTasks = render(<AllTasksProvided />);
  // const completeBtn = renderedTasks.getAllByRole("button", {
  //   name: /Complete/i,
  // })[0];
  // completeBtn.click();
  // expect(completeBtn.innerHTML).toMatch(/Redo/i);
  // });
  // test("Text of Delete button should change to Permanent Delete when is clicked", () => {
  // const renderedTasks = render(<AllTasksProvided />);
  // const deleteBtin = renderedTasks.getAllByRole("button", {
  //   name: /Delete/i,
  // })[0];
  // deleteBtin.click();
  // expect(deleteBtin.innerHTML).toMatch(/Permanent Delete/i);
  // });
});
