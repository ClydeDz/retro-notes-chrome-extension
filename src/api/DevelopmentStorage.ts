import { staticStorageValues } from "../constants/StaticStorageValues";
import { IDevelopmentStorage } from "../interfaces/IDevelopmentStorage";
import { IStaticStorage } from "../interfaces/IStaticStorage";

let staticStorage: IStaticStorage = staticStorageValues;

const DevelopmentStorageApi: IDevelopmentStorage = {
    initStorage: (storageDependency: IStaticStorage) => {
        staticStorage = storageDependency;
    },
    getStorage: (componentKey: string, callback: Function) => {
        callback(staticStorage[componentKey]);
    },
    setStorage: (componentKey: string, value: string) => {
        staticStorage[componentKey] = value;
    }
};

export default DevelopmentStorageApi;