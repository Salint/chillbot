import { Client, Message } from "discord.js";
import config from "../config.json";
import commands from "./loader";

const readyEvent = (Bot: Client): number => {

	Bot.user.setActivity(`in ${Bot.guilds.cache.array().length} guilds! ${config.prefix}help.`, { type: "PLAYING" });

	console.log("Bot has started.");

	return 1;
};

const messageEvent = (message: Message): number => {

	const args = message.content.substr(config.prefix.length).split(" ");
	const command = args[0].toLowerCase();

	if(!message.content.startsWith(config.prefix)) return 1;
	if(message.author.bot) return 1;
	if(message.member == null) return 1;
	if(!commands[command]) return 1;

	if(commands[command].properties.args.length == 0) commands[args[0].toLowerCase()].run(message);
	else commands[command].run(message, args);

	return 1;
};


export default { readyEvent, messageEvent }; 