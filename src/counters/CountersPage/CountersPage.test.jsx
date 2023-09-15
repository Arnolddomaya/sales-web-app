import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { CountersPage } from "./";

describe("CountersPage", () => {
  test("renders a title and counters", () => {
    render(<CountersPage />);

    expect(
      screen.getByRole("heading", { name: "Counters Page", level: 1 }),
    ).toBeInTheDocument();

    expect(screen.getAllByLabelText("counter")).toHaveLength(3);
  });
});
