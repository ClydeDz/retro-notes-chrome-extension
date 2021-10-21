import { Links } from "../constants/Links";

const RnFooter = () => {
    return (
        <footer>
            <p>
                <a href={Links.WHY_RETRONOTES} target="_blank">Why retro notes?</a>&nbsp;|&nbsp;
                <a href={Links.SUBMIT_IDEA} target="_blank">Have an idea?</a>&nbsp;|&nbsp;
                <a href={Links.SUBMIT_ISSUE} target="_blank">Report an issue</a>&nbsp;|&nbsp;
                <a href={Links.SPONSOR} target="_blank">Sponsor</a>
            </p>
            <p>Developed by <a href={Links.PERSONAL_WEBSITE} target="_blank">Clyde D'Souza</a></p>
        </footer>
    );
};

export default RnFooter;