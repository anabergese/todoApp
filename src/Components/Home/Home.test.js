/**
 * @jest-environment jsdom
 */
import { test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

// This is the first test to check Jest configuration is correct
test("H1 text is equal to: What's the plan for today?", async () => {
  const home = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const h1text = await home.findByTestId("h1home");
  expect(h1text.innerHTML).toMatch("What's the plan for today?");
});
