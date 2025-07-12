import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";

test("renders Login", () => {
  render(<Login />);
  const element = screen.getByText(/Email/i);
  expect(element).toBeInTheDocument();
});
