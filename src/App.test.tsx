import { render, screen } from "@testing-library/react";
import App from "./App";
import { chrome } from "jest-chrome";

// @ts-expect-error
global.chrome = chrome;

describe("<App />", () => {
  test("renders the main elements of the app", () => {
    render(<App />);
    const wellElement: HTMLElement = screen.getByText(/What went well/i);
    const didntGoWellElement: HTMLElement = screen.getByText(/What didn't go well/i);
    const notesElement: HTMLElement = screen.getByText(/Notes/i);

    expect(wellElement).toBeInTheDocument();
    expect(didntGoWellElement).toBeInTheDocument();
    expect(notesElement).toBeInTheDocument();
  });
})

