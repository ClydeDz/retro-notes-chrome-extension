import { Links } from "../constants/Links";

const RnFooter = () => {
    const separator: JSX.Element = (<>&nbsp;|&nbsp;</>);

    return (
        <footer>
            <p>
                <a href={Links.WHY_RETRONOTES} target="_blank" rel="noreferrer">Why Retro Notes?</a>{separator}
                <a href={Links.SUBMIT_IDEA} target="_blank" rel="noreferrer">Have an idea?</a>{separator}
                <a href={Links.SUBMIT_ISSUE} target="_blank" rel="noreferrer">Report an issue</a>{separator}
                <a href={Links.SPONSOR} target="_blank" rel="noreferrer">Sponsor</a>
            </p>
            <p>Developed by <a href={Links.PERSONAL_WEBSITE} target="_blank" rel="noreferrer">Clyde D'Souza</a></p>
        </footer>
    );
};

export default RnFooter;