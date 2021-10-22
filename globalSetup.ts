require("ts-node/register");

const setup = (): void => {
    Object.assign(global, require("jest-chrome"));
};

export default setup;