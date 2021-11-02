const processEnvironment = process.env;

describe("Storage", () => {
    beforeEach(() => {
        jest.resetModules();
        jest.resetAllMocks();
        process.env = { ...processEnvironment };
    });

    afterAll(() => {
        process.env = { ...processEnvironment };
    });

    test("should use Chrome storage API when env is production", () => {
        process.env = { ...processEnvironment, NODE_ENV: "production" };

        const storageApi = require("./Storage").default;
        const developmentStorage = require("./DevelopmentStorage").default;
        const chromeStorage = require("./ChromeStorage").default;

        const chromeSetStorageSpy = jest.spyOn(chromeStorage, "setStorage")
            .mockImplementation(jest.fn());
        const developmentSetStorageSpy = jest.spyOn(developmentStorage, "setStorage")
            .mockImplementation(jest.fn());

        storageApi.setStorage("Test", "Value");
        expect(chromeSetStorageSpy).toHaveBeenCalled();
        expect(developmentSetStorageSpy).not.toHaveBeenCalled();
    });

    test("should use development storage API when env is development", () => {
        process.env = { ...processEnvironment, NODE_ENV: "development" };

        const storageApi = require("./Storage").default;
        const developmentStorage = require("./DevelopmentStorage").default;
        const chromeStorage = require("./ChromeStorage").default;

        const chromeSetStorageSpy = jest.spyOn(chromeStorage, "setStorage")
            .mockImplementation(jest.fn());
        const developmentSetStorageSpy = jest.spyOn(developmentStorage, "setStorage")
            .mockImplementation(jest.fn());

        storageApi.setStorage("Test", "Value");
        expect(chromeSetStorageSpy).not.toHaveBeenCalled();
        expect(developmentSetStorageSpy).toHaveBeenCalled();
    });
});

export {};