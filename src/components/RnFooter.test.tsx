import { render } from "@testing-library/react";
import RnFooter from "./RnFooter";

describe("<RnFooter />", () => {
  test("snapshot testing the default view", () => {
    const view = render(<RnFooter />);
    expect(view).toMatchSnapshot();
  });
});
