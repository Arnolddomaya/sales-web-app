import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

const button = (name) => screen.getByRole("button", { name });
const counter = (name) => screen.getByRole("heading", { name, level: 6 });
describe("Counter", () => {
  test("without any prop inc/dec the counter value", async () => {
    render(<Counter />);

    expect(counter("0")).toBeInTheDocument();

    expect(button("+1")).toBeInTheDocument();
    expect(button("-1")).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(button("+1"));

    expect(counter()).toBeInTheDocument();

    await user.click(button("-1"));

    expect(counter("0")).toBeInTheDocument();
  });
});
