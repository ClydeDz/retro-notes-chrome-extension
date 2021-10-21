import { render } from "@testing-library/react";
import RnFooter from "./RnFooter";

describe("<RnFooter />", () => {
  test("snapshot testing the default view", () => {
    const view = render(<RnFooter />);
    expect(view).toMatchSnapshot();
  });

  test("renders all the links", () => {
    const {container} = render(<RnFooter />);
    const aTags = container.querySelectorAll("a");
    expect(aTags.length).toBe(5);
  });
});
