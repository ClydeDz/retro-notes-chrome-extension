export interface IRnTextareaProps {
    text: string;
}

const RnHeading = (props: IRnTextareaProps) => {
    const {text} = props;

    return (
        <h2>{text}</h2>
    );
};

export default RnHeading;