import { Message, MessageEmbed, ColorResolvable } from "discord.js";
import config from "../config.json";
import axios from "axios";

const properties = {
	name: "fact",
	description: "Random useless fact.",
	args: []
};

const run = (message: Message): Promise<void> => {

	const embed: MessageEmbed = new MessageEmbed();
	embed.setColor(config.color as ColorResolvable);
	embed.setTitle("Useless fact.");

	axios({
		method: "GET",
		url: "https://uselessfacts.jsph.pl/random.txt?language=en",
		headers: {
			"Accept": "text/plain",
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