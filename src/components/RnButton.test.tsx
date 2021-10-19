import { render, screen } from "@testing-library/react";
import RnButton from "./RnButton";

describe("<RnButton />", () => {
  test("snapshot testing the default view", () => {
    const mockOnClick = jest.fn();
    const view = render(<RnButton text="Click me" handleOnClick={mockOnClick} />);
    expect(view).toMatchSnapshot();
  });

  test("renders the button", () => {
    const mockOnClick = jest.fn();
    render(<RnButton text="Click me" handleOnClick={mockOnClick} />);
    const buttonElement: HTMLElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("supplied method is triggered when button is clicked", () => {
    const mockOnClick = jest.fn();
    render(<RnButton text="Click me" handleOnClick={mockOnClick} />);
    screen.getByText(/Click me/i).click();
    expect(mockOnClick).toHaveBeenCalled();
  });
});

