/**
 * @jest-environment jsdom
 */
import React from "react";
import { expect, test, describe } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import FormTask from "./FormTask";
import { act } from "react-dom/test-utils";

const MockFormTask = () => (
  <BrowserRouter>
    <FormTask />
  </BrowserRouter>
);

describe("Form component", () => {
  test("Render FormTask component", () => {
    render(<MockFormTask />);
    const h1FormTask = screen.getByRole("heading", {
      name: /Create a new task/i,
    });
    expect(h1FormTask.innerHTML).toMatch(/Create a new task/i);
  });

  test("Title input should change by user input", () => {
    render(<MockFormTask />);
    const titleInput = screen.getByRole("textbox", { name: "Title" });
    fireEvent.change(titleInput, { target: { value: "Go to supermarket" } });
    expect(titleInput.value).toBe("Go to supermarket");
  });

  test("Description input should change by user input", () => {
    render(<MockFormTask />);
    const descriptionInput = screen.getByRole("textbox", {
      name: /Description:/i,
    });
    fireEvent.change(descriptionInput, {
      target: { value: "Buy cereals and fruits" },
    });
    expect(descriptionInput.value).toBe("Buy cereals and fruits");
  });

  test("Deadline input should change by user input", () => {
    render(<MockFormTask />);
    const deadlineInput = screen.getByTestId("date-picker");
    fireEvent.change(deadlineInput, {
      target: { value: "2022-11-25" },
    });
    expect(deadlineInput.value).toBe("2022-11-25");
  });

  //   test("Creates a task and redirects to Details component", async () => {
  //     render(<MockFormTask />);
  //     const titleInput = screen.getByRole("textbox", { name: "Title" });
  //     fireEvent.change(titleInput, { target: { value: "Task example 3" } });

  //     const descriptionInput = screen.getByRole("textbox", {
  //       name: /Description:/i,
  //     });
  //     fireEvent.change(descriptionInput, {
  //       target: { value: "Description example 3" },
  //     });

  //     const deadlineInput = screen.getByTestId("date-picker");
  //     fireEvent.change(deadlineInput, {
  //       target: { value: "2022-11-25" },
  //     });

  //     const submitBtn = screen.getByRole("button", { name: "I am done" });

  //     act(() => {
  //       fireEvent.click(submitBtn);
  //     });

  //     const h1Details = await screen.findByTestId("h1Details");
  //     expect(h1Details).toBeInTheDocument();
  //   });
});
