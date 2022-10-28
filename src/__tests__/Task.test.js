/**
 * @jest-environment jsdom
 */
import React from "react";
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

const AllTasksProvided = () => (
  <AlltasksContext.Provider value={[alltasks, mockSetAlltasks]}>
    <BrowserRouter>
      <Task />
    </BrowserRouter>
  </AlltasksContext.Provider>
);

describe("Task component", () => {
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
    expect(h2Task1).toBeInTheDocument();
  });

  test("Tasks should have uncomplete status when initially rendered", () => {
    render(<AllTasksProvided />);
    expect(alltasks[0].status).toMatch(/Uncompleted/i);
  });
});

describe("Task buttons in /tasks route", () => {
  test("Status of task changes when is clicked from Uncompleted to Completed", () => {
    const renderedTasks = render(<AllTasksProvided />);
    const completeBtn = renderedTasks.getAllByRole("button", {
      name: /Complete/i,
    })[0];
    completeBtn.click();
    expect(alltasks[0].status).toMatch(/Completed/i);
  });

  test("Function to set allTasksContext runs after Completed button is clicked", async () => {
    const renderedTasks = render(<AllTasksProvided />);
    const completeBtn = renderedTasks.getAllByRole("button", {
      name: /Complete/i,
    })[0];
    completeBtn.click();
    expect(mockSetAlltasks).toBeCalled();
  });
});
