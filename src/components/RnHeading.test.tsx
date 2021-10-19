import { render, screen } from "@testing-library/react";
import RnHeading from "./RnHeading";

describe("<RnHeading />", () => {
  test("renders the heading", () => {
    render(<RnHeading text="Test heading" />);
    const headingElement: HTMLElement = screen.getByText(/Test heading/i);
    expect(headingElement).toBeInTheDocument();
  });
});

