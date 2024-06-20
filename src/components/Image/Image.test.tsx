import { render, screen } from "@testing-library/react";
import Image from ".";
import "@testing-library/jest-dom";

describe("Image component", () => {
  test("renders image with correct src and alt", () => {
    render(<Image src="test.jpg" alt="Test Alt Text" />);
    const imgElement = screen.getByAltText("Test Alt Text");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "test.jpg");
  });

  test("renders image with additional className", () => {
    render(<Image src="test.jpg" alt="Test Alt Text" className="test-class" />);
    const imgElement = screen.getByAltText("Test Alt Text");
    expect(imgElement).toHaveClass("test-class");
  });

  test('renders image with loading="lazy"', () => {
    render(<Image src="test.jpg" alt="Test Alt Text" />);
    const imgElement = screen.getByAltText("Test Alt Text");
    expect(imgElement).toHaveAttribute("loading", "lazy");
  });
});
