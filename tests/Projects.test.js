import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Projects from "../components/Projects";

describe("Projects", () => {
  it("renders Projects successfully", () => {
    render(<Projects />);
  });
});
