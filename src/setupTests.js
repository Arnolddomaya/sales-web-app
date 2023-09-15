import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { server } from "./mocks/server.js";

import "@testing-library/jest-dom/vitest";

beforeAll(() => server.listen());

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

afterAll(() => server.close());
