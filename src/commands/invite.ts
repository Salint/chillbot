import { Message } from "discord.js";
import config from "../../config.json";

const properties = {
	name: "invite",
	description: "An invite link to the bot.",
	args: []
};

const run = (message: Message): number => {

	message.channel.send(config.invite);
	return 1;
};

/* eslint-disable */
exports.properties = properties;
exports.run = run;
/* eslint-enable */