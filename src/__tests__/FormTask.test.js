/**
 * @jest-environment jsdom
 */
import React from "react";
import { createMemoryHistory } from "history";

import { expect, test, describe } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import FormTask from "../Components/FormTask";
//import { Simulate } from "react-dom/test-utils";

const history = createMemoryHistory();
history.push("/task/create");

const MockFormTask = () => (
  <BrowserRouter history={history}>
    <FormTask />
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

  //   test("Form submit should redirect details of task", async () => {
  //   needs integration test
  //   });
  //   test("Form submit should redirect to Details component", () => {
  //   });
});
