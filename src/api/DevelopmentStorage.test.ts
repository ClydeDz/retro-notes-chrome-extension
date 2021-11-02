import { Constants } from "../constants/Constants";
import { IStaticStorage } from "../interfaces/IStaticStorage";
import * as developmentStorage from "./DevelopmentStorage";

const devStorageApi = developmentStorage.default;
const callbackSpy = jest.fn();
const storageSpy: IStaticStorage = {};

describe("DevelopmentStorage", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    test("testing getStorage()", () => {
        const storageKey = `${Constants.APPKEY}-wentwell`;
        storageSpy[storageKey] = "This went well";
        devStorageApi.initStorage(storageSpy);
        devStorageApi.getStorage(storageKey, callbackSpy);
        expect(callbackSpy).toHaveBeenCalledWith("This went well");
    });

    test("testing the setStorage()", () => {
        const storageKey = `${Constants.APPKEY}-notes`;
        devStorageApi.initStorage(storageSpy);
        devStorageApi.setStorage(storageKey, "Test value");
        expect(storageSpy[storageKey]).toBe("Test value");
    });
});
