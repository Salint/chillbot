import { Message, MessageEmbed, ColorResolvable } from "discord.js";
import config from "../../config.json";
import { readdirSync } from "fs";
import commands from "../loader";

const properties = {
	name: "help",
	description: "A help command.",
	args: []
};

const run = (message: Message): number => {

	const embed: MessageEmbed = new MessageEmbed();
	embed.setColor(config.color as ColorResolvable);
	embed.setTitle("Help.");
	embed.setDescription(config.description);
	
	readdirSync(__dirname).forEach(command => {
		embed.addField(commands[command.split(".")[0]].properties.name, commands[command.split(".")[0]].properties.description, true);
	});

	message.channel.send(embed);
	return 1;
};

/* eslint-disable */
exports.properties = properties;
exports.run = run;
/* eslint-enable */