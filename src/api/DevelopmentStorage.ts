import { Constants } from "../constants/Constants";
import { IStaticStorage } from "../interfaces/IStaticStorage";
import { IStorageApi } from "../interfaces/IStorage";

const staticStorage: IStaticStorage = {
    [`${Constants.APPKEY}-wentwell`] : "This went well",
    [`${Constants.APPKEY}-wentbad`] : "This didn't go well",
    [`${Constants.APPKEY}-notes`] : "This is a note"
};

const DevelopmentStorageApi: IStorageApi = {
    getStorage: (componentKey: string, callback: Function) => {
        callback(staticStorage[componentKey]);
    },
    setStorage: (componentKey: string, value: string) => {
        staticStorage[componentKey] = value;
    }
};

export default DevelopmentStorageApi;