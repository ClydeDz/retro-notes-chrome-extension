export interface IRnTextareaProps {
    text: string;
    handleOnChange: (e:any) => void;
}

const RnTextarea = (props: IRnTextareaProps) => {
    const {text, handleOnChange} = props;

    return (
        <textarea
            value={text}
            placeholder="What are you thinking?"
            onChange={handleOnChange}
            aria-label="Text area"
        />
    );
};

export default RnTextarea;