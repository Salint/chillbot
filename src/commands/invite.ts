import { Message } from "discord.js";

const properties = {
	name: "invite",
	description: "An invite link to the bot..",
	args: []
};

const run = (message: Message): number => {

	message.channel.send("https://discord.com/api/oauth2/authorize?client_id=681197286201491504&permissions=8&scope=bot");
	return 1;
};

/* eslint-disable */
exports.properties = properties;
exports.run = run;
/* eslint-enable */