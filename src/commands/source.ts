import { Message, MessageEmbed, ColorResolvable } from "discord.js";
import config from "../config.json";

const properties = {
	name: "source",
	description: "Source and license of the bot.",
	args: []
};

const run = (message: Message): Promise<void> => {

	const embed: MessageEmbed = new MessageEmbed();
	embed.setColor(config.color as ColorResolvable);
	embed.setTitle("Bot's source.");
	embed.setDescription("ChillBot is an open-sourced bot, which means you're able to take a look \
	at the source code, and even run your own version of the bot with your own commands. :)");
	embed.addField("Source", "I've been created by Salint#5356.\nTherefore, my source code is available at GitHub: \
	[Salint/chillbot](https://github.com/Salint/chillbot)");
	embed.addField("License", "ChillBot is licensed under the [MIT license](https://github.com/Salint/chillbot/blob/master/LICENSE).");

	message.channel.send(embed);
	
	return;
};

/* eslint-disable */
exports.properties = properties;
exports.run = run;
/* eslint-enable */