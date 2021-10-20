export interface IStorageApi {
    getStorage: (componentKey: string, callback: Function) => void;
    setStorage: (componentKey: string, value: string) => void;
}