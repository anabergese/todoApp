/**
 * @jest-environment jsdom
 */
import React from "react";
import { expect, test, describe, jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import FormTask from "../Components/FormTask";
//import { Simulate } from "react-dom/test-utils";

const submitTaskHandler = jest.fn();
const MockFormTask = () => (
  <BrowserRouter>
    <FormTask onSubmit={submitTaskHandler} />
  </BrowserRouter>
);

describe("Form component", () => {
  test("Render FormTask component", () => {
    render(<MockFormTask />);
    const h1FormTask = screen.getByRole("heading", {
      name: /Create a new task/i,
    });
    expect(h1FormTask).toBeInTheDocument();
  });

  test("Title input should change by user input", () => {
    render(<MockFormTask />);
    const titleInput = screen.getByRole("textbox", { name: /Title:/i });
    fireEvent.change(titleInput, { target: { value: "Go to supermarket" } });
    expect(titleInput.value).toBe("Go to supermarket");
  });

  test("Form task should submit a task", async () => {
    render(<MockFormTask />);
    // const form = screen.getByRole("form", { name: "Create a new task" });
    // const formId = screen.getByTestId("form");
    const submitBtn = screen.getByText("I am done");
    const titleInput = screen.getByRole("textbox", { name: /Title:/i });
    fireEvent.change(titleInput, { target: { value: "Go to supermarket" } });
    fireEvent.click(submitBtn);

    expect(submitBtn.type).toBe("submit");
    expect(submitTaskHandler).toBeCalled();
  });

  // test("Form submit should redirect to Details component", () => {
  //   render(<MockFormTask />);
  //   const titleInput = screen.getByRole("textbox", { name: /Title:/i });
  //   //const submitBtn = screen.getByRole("button", { name: /I am done/i });
  //   fireEvent.change(titleInput, { target: { value: "Go to supermarket" } });
  //   expect(titleInput.innerText).toBeVisible();
  //  });
});
