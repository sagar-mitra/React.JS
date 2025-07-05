import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Contact us page test cases", () => {
  test("Should load contact us component", () => {
    // rendering the component on JS DOM
    render(<Contact />);

    // querying
    const heading = screen.getByRole("heading");

    // assertion
    expect(heading).toBeInTheDocument();
  });

  // for testing the button
  test("Should load button inside contact us component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");

    // one more way we can do this
    const button = screen.getByText("Send Message");

    expect(button).toBeInTheDocument();
  });

  // input box testing
  it("Should input email inside contact us component", () => {
    render(<Contact />);

    const inputBox = screen.getByPlaceholderText("Enter your email here...");

    expect(inputBox).toBeInTheDocument();
  });

  test("Should all inputs inside contact us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes.length);

    expect(inputBoxes.length).toBe(4);
    // expect(inputBoxes.length).not.toBe(5)
  });
});
