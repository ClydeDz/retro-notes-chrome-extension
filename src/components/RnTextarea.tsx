export interface IRnTextareaProps {
    text: string;
    handleOnChange: (e:any) => void;
}

const RnTextarea = (props: IRnTextareaProps) => {
    const {text, handleOnChange} = props;

    return (
        <textarea value={text} onChange={handleOnChange} aria-label="Text area"/>
    );
};

export default RnTextarea;