import { readdirSync } from "fs";

const commands = {};

readdirSync(__dirname + "/commands").forEach(command => {
	/* eslint-disable */
	commands[command.split(".")[0]] = require("./commands/" + command);
	/* eslint-enable */
});

export default commands;