import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders correctly", () => {
    render(<Button />);
    // render(<Button>Click me</Button>);
    // expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
