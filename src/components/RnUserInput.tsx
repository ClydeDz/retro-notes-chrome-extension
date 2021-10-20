import { useEffect, useState } from "react";
import RnHeading from "./RnHeading";
import RnTextarea from "./RnTextarea";

export interface IRnUserInputProps {
    componentKey: string;
    text: string;
}

const RnUserInput = (props: IRnUserInputProps) => {
    const {componentKey, text} = props;
    const [componentStorage, setComponentStorage] = useState("");

    useEffect(() => {
        chrome.storage.sync.get([componentKey], function(result: any): void {
            const storageValue: any = result[componentKey];
            setComponentStorage(storageValue);
        });
    }, [componentKey]);

    const updateStorage = (e:any) => {
        const userInput: string = e.target.value;
        setComponentStorage(userInput);
        chrome.storage.sync.set({[componentKey]: userInput});
    };

    return (
        <div aria-label="User input">
            <RnHeading text={text} />
            <RnTextarea handleOnChange={updateStorage} text={componentStorage} />
        </div>
    );
};

export default RnUserInput;