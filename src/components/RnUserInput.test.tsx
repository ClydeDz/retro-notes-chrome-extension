import { fireEvent, render, screen } from "@testing-library/react";
import RnUserInput from "./RnUserInput";
import { chrome } from "jest-chrome";
import React from "react";

// @ts-expect-error
global.chrome = chrome;

describe("<RnUserInput />", () => {
  test("snapshot testing the default view", () => {
    const view = render(<RnUserInput text="Click me" componentKey="Abc" />);
    expect(view).toMatchSnapshot();
  });

  test("renders the default view", () => {
    render(<RnUserInput text="Click me" componentKey="Abc" />);
    const headingElement: HTMLElement = screen.getByText(/Click me/i);
    const textareaElement: HTMLElement = screen.getByLabelText("Text area");
    expect(headingElement).toBeInTheDocument();
    expect(textareaElement).toBeInTheDocument();
  });

  test("chrome.storage.sync.get is called when component is loaded in default view", () => {
    const storageSyncGetSpy = jest.spyOn(chrome.storage.sync, "get");
    render(<RnUserInput text="Click me" componentKey="MySpecialKey" />);
    expect(storageSyncGetSpy).toBeCalledWith(["MySpecialKey"], expect.any(Function));
  });

  test("chrome.storage.sync.set is called when component is updated", () => {
    const storageSyncSetSpy = jest.spyOn(chrome.storage.sync, "set");
    render(<RnUserInput text="Click me" componentKey="MySpecialKey" />);
    const textareaElement: HTMLElement = screen.getByLabelText("Text area");
    fireEvent.change(textareaElement, { target: { value: "23" } });
    expect(storageSyncSetSpy).toBeCalledWith({"MySpecialKey": "23"});
  });

  test("chrome.storage.sync.set is not called when component is not updated", () => {
    const storageSyncSetSpy = jest.spyOn(chrome.storage.sync, "set");
    render(<RnUserInput text="Click me" componentKey="MySpecialKey" />);
    expect(storageSyncSetSpy).not.toBeCalled();
  });

  test("renders the component when storage key is found", () => {
    const response = { MySpecialKey: "I am a magical value" };
    const key = "MySpecialKey";

    global.chrome = {
      ... chrome,
      storage: {
        sync: {
          // @ts-expect-error
          get: function(key, callback) {
            if(!key) { return };
            callback(response);
          },
        }
      }
    };

    render(<RnUserInput text="Click me" componentKey={key} />);
    const textareaElement: HTMLElement = screen.getByLabelText("Text area");
    expect(textareaElement.textContent).toBe("I am a magical value");
  });

  test("renders the component when storage key is not found", () => {
    const response = { NotFound: "This value never displays" };
    const key = "MySpecialKey";

    global.chrome = {
      ... chrome,
      storage: {
        sync: {
          // @ts-expect-error
          get: function(key, callback) {
            if(!key) { return };
            callback(response);
          },
        }
      }
    };

    render(<RnUserInput text="Click me" componentKey={key} />);
    const textareaElement: HTMLElement = screen.getByLabelText("Text area");
    expect(textareaElement.textContent).toBe("");
  });

  test("set state is called with undefined when component is loaded", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    // @ts-expect-error
    useStateSpy.mockImplementation(init => [init, setState]);

    render(<RnUserInput text="Click me" componentKey="MySpecialKey" />);
    expect(setState).toBeCalledWith(undefined);
  });

  test("set state is called with updated value that is made to the text area", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    // @ts-expect-error
    useStateSpy.mockImplementation(init => [init, setState]);

    global.chrome = {
      ... chrome,
      // @ts-expect-error
      storage: {
        sync: {
          ...chrome.storage.sync,
          set: jest.fn()
        }
      }
    };

    render(<RnUserInput text="Click me" componentKey="MySpecialKey" />);
    const textareaElement: HTMLElement = screen.getByLabelText("Text area");
    fireEvent.change(textareaElement, { target: { value: "23" } });
    expect(setState).toBeCalledWith("23");
  });
});

