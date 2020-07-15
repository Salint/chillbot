import { Message, MessageEmbed, ColorResolvable } from "discord.js";
import config from "../../config.json";

const properties = {
	name: "coinflip",
	description: "Test your luck & flip a coin!",
	args: []
};

const run = (message: Message): number => {

	const chance = Math.random();
	const embed: MessageEmbed = new MessageEmbed();
	embed.setColor(config.color as ColorResolvable);
	embed.setTitle("You've flipped a coin!");

	if(chance >= 0.5) embed.setDescription("You've landed on heads!");
	else embed.setDescription("You've landed on tails!");
	embed.setThumbnail("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F217%2F217853.png&f=1&nofb=1");
	
	
	message.channel.send(embed);
	return 1;
};

/* eslint-disable */
exports.properties = properties;
exports.run = run;
/* eslint-enable */