import { render, screen } from "@testing-library/react";
import RnHeader from "./RnHeader";

describe("<RnHeader />", () => {
  test("snapshot testing the default view", () => {
    const view = render(<RnHeader />);
    expect(view).toMatchSnapshot();
  });

  test("renders the heading", () => {
    render(<RnHeader />);
    const headingElement: HTMLElement = screen.getByText(/Retro notes/i);
    expect(headingElement).toBeInTheDocument();
  });
});

