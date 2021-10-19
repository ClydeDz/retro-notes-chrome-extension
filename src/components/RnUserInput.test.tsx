import { fireEvent, render, screen } from "@testing-library/react";
import RnUserInput from "./RnUserInput";
import { chrome } from "jest-chrome";
import React from "react";

// @ts-expect-error
global.chrome = chrome;

describe("<RnUserInput />", () => {
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
    expect(storageSyncGetSpy).toBeCalled();
  });

  describe("Mocking chrome storage sync get", () => {
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
  });

  describe("Mocking chrome storage sync set", () => {
    test("chrome.storage.sync.set is called when an update is made to the text area", () => {
      const mockStorageSyncSet = jest.fn();
  
      global.chrome = {
        ... chrome,
        // @ts-expect-error
        storage: {
          ...chrome.storage,
          sync: {
            ...chrome.storage.sync,
            set: mockStorageSyncSet
          }
        }
      };
  
      render(<RnUserInput text="Click me" componentKey="MySpecialKey" />);
      const textareaElement: HTMLElement = screen.getByLabelText("Text area");
      fireEvent.change(textareaElement, { target: { value: "23" } });
      expect(mockStorageSyncSet).toBeCalled();
    });
  
    test("chrome.storage.sync.set is not called when no update is made to the text area", () => {
      const mockStorageSyncSet = jest.fn();
  
      global.chrome = {
        ... chrome,
        // @ts-expect-error
        storage: {
          ...chrome.storage,
          sync: {
            ...chrome.storage.sync,
            set: mockStorageSyncSet
          }
        }
      };
  
      render(<RnUserInput text="Click me" componentKey="MySpecialKey" />);
      expect(mockStorageSyncSet).not.toBeCalled();
    });
  });

  describe("Mocking use state", () => {
    test("get state is called when component is loaded", () => {
      const setState = jest.fn();
      const useStateSpy = jest.spyOn(React, "useState");
      // @ts-expect-error
      useStateSpy.mockImplementation(init => [init, setState]);

      render(<RnUserInput text="Click me" componentKey="MySpecialKey" />);
      expect(setState).not.toBeCalled();
    });

    test("set state is called when an update is made to the text area", () => {
      const setState = jest.fn();
      const useStateSpy = jest.spyOn(React, "useState")
      // @ts-expect-error
      useStateSpy.mockImplementation(init => [init, setState]);

      render(<RnUserInput text="Click me" componentKey="MySpecialKey" />);
      const textareaElement: HTMLElement = screen.getByLabelText("Text area");
      fireEvent.change(textareaElement, { target: { value: "23" } });
      expect(setState).toBeCalledWith("23");
    });
  });
});

