import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/Counter";
import "@testing-library/jest-dom";

//the describe func describes what the module is

// the it function specifies the individual test
//there can be multiple it in a single describe
describe("Counter Testing", () => {
  it("renders a heading", () => {
    render(<Counter />);
    const heading = screen.getByRole("heading", { name: "Counter:" });
    expect(heading).toBeInTheDocument();
  });

  it("test the increment", () => {
    render(<Counter />);
    //Check to see if the functions are working
    const buttonInc = screen.getByRole("button", { name: "+" });
    const buttonDec = screen.getByRole("button", { name: "-" });
    const buttonReset = screen.getByRole("button", { name: "Reset" });
    const count = screen.getByTestId("counter");

    fireEvent.click(buttonInc);
    expect(count).toHaveTextContent("1");
  });

  it("test the decrement", () => {
    render(<Counter />);
    //Check to see if the functions are working
    const buttonInc = screen.getByRole("button", { name: "+" });
    const buttonDec = screen.getByRole("button", { name: "-" });
    const buttonReset = screen.getByRole("button", { name: "Reset" });
    const count = screen.getByTestId("counter");

    fireEvent.click(buttonDec);
    expect(count).toHaveTextContent("-1");
  });
});
