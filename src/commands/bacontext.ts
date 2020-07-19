/*import { Message, MessageEmbed, ColorResolvable } from "discord.js";
import config from "../../config.json";
import request from "request";

const properties = {
	name: "bacontext",
	description: "Gibberish about bacon!",
	args: []
};

const run = (message: Message): number => {

	const embed: MessageEmbed = new MessageEmbed();
	embed.setColor(config.color as ColorResolvable);
	embed.setTitle("Bacon gibberish!");

	request({
		url: "https://baconipsum.com/api/?type=all-meat&paras=1&format=text",
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
*/
/* eslint-disable
exports.properties = properties;
exports.run = run;
eslint-enable */