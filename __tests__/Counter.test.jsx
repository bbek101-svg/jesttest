import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter";
import "@testing-library/jest-dom";
import "@testing-library/react";

describe("Counter Heading", () => {
  it("renders a heading", () => {
    render(<Counter />);
    const heading = screen.getByRole("heading", { name: "Counter:" });
    expect(heading).toBeInTheDocument();
  });
});
