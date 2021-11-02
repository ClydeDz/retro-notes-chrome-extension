import { IStaticStorage } from "../interfaces/IStaticStorage";
import { Constants } from "./Constants";

export const staticStorageValues: IStaticStorage = {
    [`${Constants.APPKEY}-wentwell`] : "This went well",
    [`${Constants.APPKEY}-wentbad`] : "This didn't go well",
    [`${Constants.APPKEY}-notes`] : "This is a note"
};
