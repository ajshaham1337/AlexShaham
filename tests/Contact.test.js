import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

describe("Contact", () => {
  it("renders Contact successfully", () => {
    render(<Contact />);
  });
});
