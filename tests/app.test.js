import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

test("renders Footer successfully", () => {
  render(<Footer />);
});

test("renders Header successfully", () => {
  render(<Header />);
});

test("renders About successfully", () => {
  render(<About />);
});

test("renders Contact successfully", async () => {
  render(<Contact />);
  let subjectInput = screen.getByPlaceholderText("Business Inquiry");
  fireEvent.change(subjectInput, { target: { value: "Hello World!" } });
  expect(subjectInput.value).toBe("Hello World!");
});

test("renders Projects successfully", () => {
  render(<Projects />);
});
