import { IStaticStorage } from "./IStaticStorage";
import { IStorageApi } from "./IStorage";

export interface IDevelopmentStorage extends IStorageApi {
    initStorage: (storageDependency: IStaticStorage) => void;
}