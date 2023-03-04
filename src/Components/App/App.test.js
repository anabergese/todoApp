/**
 * @jest-environment jsdom
 */
import React from "react";
import { expect, test, describe } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Integration tests", () => {
  test("Nav Link redirect to FormTask Component when clicked", () => {
    const app = render(<App />);
    const linkToForm = app.getByRole("heading", {
      name: "Create New Task",
    });
    linkToForm.click();
    const titleInput = app.getByRole("textbox", { name: /Title:/i });
    expect(titleInput).toBeDefined();
  });

  test("Form submit redirects to Details Component", async () => {
    const app = render(<App />);
    const linkToForm = app.getByRole("heading", {
      name: "Create New Task",
    });
    linkToForm.click();
    const submitBtn = app.getByRole("button", { name: /I am done/i });
    fireEvent.click(submitBtn);
    const h1Details = await app.findByTestId("h1Details");
    expect(h1Details.innerHTML).toMatch("Details Page");
  });
});
