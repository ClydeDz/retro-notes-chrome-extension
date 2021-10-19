import { fireEvent, render, screen } from "@testing-library/react";
import RnTextarea from "./RnTextarea";

describe("<RnTextarea />", () => {
  test("snapshot testing the default view", () => {
    const mockOnChange = jest.fn();
    const view = render(<RnTextarea text="Test content" handleOnChange={mockOnChange}/>);
    expect(view).toMatchSnapshot();
  });

  test("renders the contents of text area", () => {
    const mockOnChange = jest.fn();
    render(<RnTextarea text="Test content" handleOnChange={mockOnChange}/>);
    const textareaElement: HTMLElement = screen.getByText(/Test content/i);
    expect(textareaElement).toBeInTheDocument();
  });

  test("triggers the supplied onchange method when content is updated", async () => {
    const mockOnChange = jest.fn();
    render(<RnTextarea text="Test content" handleOnChange={mockOnChange}/>);
    const input = screen.getByLabelText("Text area");
    fireEvent.change(input, { target: { value: "23" } });
    expect(mockOnChange).toBeCalled();
  });
});

