import { IStorageApi } from "../interfaces/IStorage";

const ChromeStorageApi: IStorageApi = {
    getStorage: (componentKey: string, callback: Function) => {
        chrome.storage.sync.get([componentKey], function(result: any): void {
            callback(result[componentKey]);
        });
    },
    setStorage: (componentKey: string, value: string) => {
        chrome.storage.sync.set({[componentKey]: value});
    }
};

export default ChromeStorageApi;