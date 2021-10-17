export interface IRnTextareaProps {
    text: string;
    handleOnClick: (e:any) => void;
}

const RnButton = (props: IRnTextareaProps) => {
    const {text, handleOnClick} = props;

    return (
        <button onClick={handleOnClick}>{text}</button>
    );
};

export default RnButton;