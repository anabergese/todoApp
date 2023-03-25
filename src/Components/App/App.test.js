/**
 * @jest-environment jsdom
 */
import React from "react";
import { expect, test, describe } from "@jest/globals";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Integration tests", () => {
  test("Nav Link redirect to FormTask Component when clicked", () => {
    const app = render(<App />);
    const linkToForm = app.getByRole("heading", {
      name: "Create Task",
    });
    linkToForm.click();
    const titleInput = app.getByRole("textbox", { name: "Title" });
    expect(titleInput).toBeDefined();
  });
});
