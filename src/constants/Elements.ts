import { Constants } from "./Constants";

interface IElement {
    componentKey: string;
    text: string;
}

export const Elements: IElement[] = [
    {
        componentKey: `${Constants.APPKEY}-wentwell`,
        text: "What went well?"
    },
    {
        componentKey: `${Constants.APPKEY}-wentbad`,
        text: "What didn't go well?"
    },
    {
        componentKey: `${Constants.APPKEY}-notes`,
        text: "Notes"
    }
];