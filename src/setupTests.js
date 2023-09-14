import { afterEach } from "vitest";

import { cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/vitest";

console.log("test suite");

afterEach(() => {
  cleanup();
});
