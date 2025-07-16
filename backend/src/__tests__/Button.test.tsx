import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button";
import { describe, it, expect } from "vitest";

describe("Button", () => {
  it("renderiza o botão com o texto correto", () => {
    render(<Button />);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
});
