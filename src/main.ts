import { Client, Message } from "discord.js";
import events from "./events";
import update from "./update";

const Bot: Client = new Client();

Bot.on("ready", () => events.readyEvent());
Bot.on("message", (message: Message) => events.messageEvent(message));

setInterval(() => update(Bot), 30000);

Bot.login(process.env.token);

export default Bot;