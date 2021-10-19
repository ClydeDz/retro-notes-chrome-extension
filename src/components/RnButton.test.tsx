import { render, screen } from "@testing-library/react";
import RnButton from "./RnButton";

const mockOnClick = jest.fn();

describe("<RnButton />", () => {
  test("snapshot testing the default view", () => {
    const view = render(<RnButton text="Click me" handleOnClick={mockOnClick} />);
    expect(view).toMatchSnapshot();
  });

  test("renders the button", () => {
    render(<RnButton text="Click me" handleOnClick={mockOnClick} />);
    const buttonElement: HTMLElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("supplied method is triggered when button is clicked", () => {
    render(<RnButton text="Click me" handleOnClick={mockOnClick} />);
    screen.getByText(/Click me/i).click();
    expect(mockOnClick).toHaveBeenCalled();
  });
});

