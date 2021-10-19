export interface IRnTextareaProps {
    text: string;
}

const RnHeading = (props: IRnTextareaProps) => {
    const {text} = props;

    return (
        <h2 aria-label="Heading">{text}</h2>
    );
};

export default RnHeading;