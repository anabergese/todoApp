/**
 * @jest-environment jsdom
 */

import React from "react";
import { createMemoryHistory } from "history";
import { expect, test, describe } from "@jest/globals";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Tasks from "./Tasks";
import { act } from "react-dom/test-utils";

const history = createMemoryHistory();
history.push("/tasks");

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

describe("Tasks status", () => {
  test("Tasks have Uncompleted status when initially rendered", async () => {
    render(<AllTasksProvided />);
    const status = await waitFor(() => screen.getAllByText("Uncompleted"));
    expect(status[0].innerHTML).toMatch("Uncompleted");
  });

  test("Status of task changes to Completed when Complete button is clicked", async () => {
    render(<AllTasksProvided />);
    const completeBtn = await waitFor(
      () => screen.getAllByRole("button", { name: /Complete/i })[0]
    );
    expect(completeBtn).toBeDefined();

    act(() => {
      fireEvent.click(completeBtn);
    });

    const newStatus = await waitFor(() => screen.getAllByText("Completed")[0]);
    expect(newStatus.innerHTML).toMatch("Completed");
  });
});
