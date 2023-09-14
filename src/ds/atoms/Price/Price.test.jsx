import { render, screen } from "@testing-library/react";
import { beforeEach, expect, vi } from "vitest";
import Price from "./Price";

describe("Price", () => {
  let languageGetter;

  beforeEach(() => {
    languageGetter = vi.spyOn(window.navigator, "language", "get");
  });
  test("With default currency displays price", () => {
    languageGetter.mockReturnValue("fr");
    render(<Price value={42.99} />);

    expect(screen.getByText("42,99 €")).toBeInTheDocument();
  });
  test("With USD displays price", () => {
    languageGetter.mockReturnValue("fr");
    render(<Price value={42.99} currency="USD" />);

    expect(screen.getByText("42,99 $US")).toBeInTheDocument();
  });
});
