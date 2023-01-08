import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import About from "../components/About";

describe("About", () => {
  it("renders About successfully", () => {
    render(<About />);
  });
});
