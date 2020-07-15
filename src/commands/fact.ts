import { Message, MessageEmbed, ColorResolvable } from "discord.js";
import config from "../../config.json";
import request from "request";

const properties = {
	name: "fact",
	description: "Random useless fact.",
	args: []
};

const run = (message: Message): number => {

	const embed: MessageEmbed = new MessageEmbed();
	embed.setColor(config.color as ColorResolvable);
	embed.setTitle("Useless fact.");

	request({
		url: "https://uselessfacts.jsph.pl/random.txt?language=en",
		headers: {
			"Accept": "text/plain",
			"User-Agent": "request"
		}
	}, (error, response, body) => {
		embed.setDescription(body);
		message.channel.send(embed);
	});
	return 1;
};

/* eslint-disable */
exports.properties = properties;
exports.run = run;
/* eslint-enable */