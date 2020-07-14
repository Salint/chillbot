import { Client, Message } from "discord.js";
import config from "../config.json";
import commands from "./loader";

const readyEvent = (Bot: Client): number => {

	Bot.user.setActivity("you.", { type: "WATCHING" });

	return 1;
};

const messageEvent = (Bot: Client, message: Message): number => {

	const args = message.content.substr(config.prefix.length).split(" ");

	if(!message.content.startsWith(config.prefix) || message.author.bot || message.member == null) return 1;

	if(commands[args[0]]) {

		if(commands[args[0]].properties.args.length == 0) commands[args[0]].run(message);
		else commands[args[0]].run(message, args);

	}

	return 1;
};


export default { readyEvent, messageEvent }; 