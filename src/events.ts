import { Message } from "discord.js";
import config from "../config.json";
import commands from "./loader";
import Bot from "./main";

const readyEvent = (): Promise<void> => {

	Bot.user.setActivity(`in ${Bot.guilds.cache.array().length} guilds! ${config.prefix}help.`, { type: "PLAYING" });

	console.log("Bot has started.");

	return;
};

const messageEvent = (message: Message): Promise<void> => {

	const args = message.content.substr(config.prefix.length).split(" ");
	const command = args[0].toLowerCase();

	if(!message.content.startsWith(config.prefix) || message.author.bot || message.member == null) return;
	if(!commands[command]) return;

	if(commands[command].properties.args.length == 0) commands[args[0].toLowerCase()].run(message);
	else commands[command].run(message, args);

	return;
};


export default { readyEvent, messageEvent }; 