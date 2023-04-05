import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Footer from "components/common/Footer";
import Header from "components/common/Header";
import About from "components/About";
import Contact from "components/Contact";
import Projects from "components/Projects";

test("renders Footer successfully", () => {
  // render(<Footer />);
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
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
