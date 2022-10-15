/**
 * @jest-environment jsdom
 */

import { test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Home from "../Components/Home";

// first test to check Jest configuration is correct
test("Checks H1 text is equal to: What's the plan for today?", async () => {
  const home = render(<Home />);
  const h1text = await home.findByTestId("h1text");
  expect(h1text.innerHTML).toMatch("What's the plan for today?");
});
