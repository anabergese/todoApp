// src/setupTests.js
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./Mocks/server.js";

beforeAll(() => {
  server.listen();
});

// Reset any request handlers that we may add during the tests, so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
});

// Clean up after the tests are finished.
afterAll(() => server.close());

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
