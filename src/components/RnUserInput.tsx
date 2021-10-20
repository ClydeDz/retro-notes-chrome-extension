import { useEffect, useState } from "react";
import StorageApi from "../api/Storage";
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
        StorageApi.getStorage(componentKey, setComponentStorage);
    }, [componentKey]);

    const updateStorage = (e:any) => {
        const userInput: string = e.target.value;
        setComponentStorage(userInput);
        StorageApi.setStorage(componentKey, userInput);
    };

    return (
        <div aria-label="User input">
            <RnHeading text={text} />
            <RnTextarea handleOnChange={updateStorage} text={componentStorage} />
        </div>
    );
};

export default RnUserInput;