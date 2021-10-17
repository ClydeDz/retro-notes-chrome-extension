import { render, screen } from "@testing-library/react";
import RnButton from "./RnButton";

describe("App", () => {
  test("renders learn react link", () => {
    const mockOnClick = jest.fn();
    render(<RnButton text="Click me" handleOnClick={mockOnClick} />);
    const wellElement: HTMLElement = screen.getByText(/Click me/i);
    expect(wellElement).toBeInTheDocument();
  });

  test("renders learn react link", () => {
    const mockOnClick = jest.fn();
    render(<RnButton text="Click me" handleOnClick={mockOnClick} />);
    screen.getByText(/Click me/i).click();
    expect(mockOnClick).toHaveBeenCalled();
  });
})

