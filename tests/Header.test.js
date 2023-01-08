import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/common/Header";

describe("Header", () => {
  it("renders Header successfully", () => {
    render(<Header />);
  });
});
