import { Message, MessageEmbed, ColorResolvable } from "discord.js";
import config from "../../config.json";
import axios from "axios";

const properties = {
	name: "dadjoke",
	description: "Dad joke during Quarantine",
	args: []
};

const run = (message: Message): number => {

	const embed: MessageEmbed = new MessageEmbed();
	embed.setColor(config.color as ColorResolvable);
	embed.setTitle("Free dad joke.");

	axios({
		method: "GET",
		url: "https://icanhazdadjoke.com/",
		headers: {
			Accept: "text/plain",
		}
	}).then((response) => {
		embed.setDescription(response.data);
		message.channel.send(embed);
	});
	
	return 1;
};

/* eslint-disable */
exports.properties = properties;
exports.run = run;
/* eslint-enable */