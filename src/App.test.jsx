import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio's main content", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /felipe marin/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /my projects/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /download my resume/i })).toBeInTheDocument();
});
