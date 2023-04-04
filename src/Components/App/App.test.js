/**
 * @jest-environment jsdom
 */
import React from "react";
import { expect, test, describe } from "@jest/globals";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { act } from "react-dom/test-utils";

jest.mock("@auth0/auth0-react", () => ({
  Auth0Provider: ({ children }) => children,
  withAuthenticationRequired: (component, _) => component,
  useAuth0: () => {
    return {
      isLoading: false,
      user: { sub: "foobar" },
      isAuthenticated: true,
      loginWithRedirect: jest.fn(),
    };
  },
}));

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

  test("Creates a task and redirects to Details component", async () => {
    render(<App />);
    const linkToForm = screen.getByRole("heading", {
      name: "Create Task",
    });
    linkToForm.click();

    const titleInput = screen.getByRole("textbox", { name: "Title" });
    fireEvent.change(titleInput, { target: { value: "Task example 3" } });

    const descriptionInput = screen.getByRole("textbox", {
      name: /Description:/i,
    });
    fireEvent.change(descriptionInput, {
      target: { value: "Description example 3" },
    });

    const deadlineInput = screen.getByTestId("date-picker");
    fireEvent.change(deadlineInput, {
      target: { value: "2022-11-25" },
    });
    const submitBtn = screen.getByRole("button", { name: "I am done" });

    act(() => {
      fireEvent.click(submitBtn);
    });

    const newTask = await waitFor(() => screen.getByTestId("h1Details"));
    expect(newTask.innerHTML).toMatch("Details Page");
  });
});
