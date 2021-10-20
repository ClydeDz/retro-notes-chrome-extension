import ChromeStorageApi from "./ChromeStorage";
import DevelopmentStorageApi from "./DevelopmentStorage";
import { IStorageApi } from "../interfaces/IStorage";

const isDevelopment: boolean = process.env.NODE_ENV === "development";
const StorageApi: IStorageApi = isDevelopment ? DevelopmentStorageApi: ChromeStorageApi;

export default StorageApi;