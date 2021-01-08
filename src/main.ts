import { Client, Message } from "discord.js";
import events from "./events";
import { config as env } from "dotenv";
import update from "./update";

const Bot: Client = new Client();

if(!process.env.TOKEN)  {
	env();
}


Bot.on("ready", () => events.readyEvent());
Bot.on("message", (message: Message) => events.messageEvent(message));

setInterval(() => update(Bot), 30000);

Bot.login(process.env.TOKEN);

export default Bot;