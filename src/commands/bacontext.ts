import { Message, MessageEmbed, ColorResolvable } from "discord.js";
import config from "../../config.json";
import axios from "axios";

const properties = {
	name: "bacontext",
	description: "Gibberish about bacon!",
	args: []
};

const run = (message: Message): Promise<void> => {

	const embed: MessageEmbed = new MessageEmbed();
	embed.setColor(config.color as ColorResolvable);
	embed.setTitle("Bacon gibberish!");

	axios({
		method: "GET",
		url: "https://baconipsum.com/api/?type=all-meat&paras=1&format=text",
		headers: {
			"Accept": "text/plain"
		}
	}).then((response) => {
		embed.setDescription(response.data);
		message.channel.send(embed);
	});
	return;
};

/* eslint-disable */
exports.properties = properties;
exports.run = run;
/* eslint-enable */