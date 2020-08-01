import { Client, Message } from "discord.js";
import events from "./events";

const Bot: Client = new Client();

Bot.on("ready", () => events.readyEvent());
Bot.on("message", (message: Message) => events.messageEvent(message));

Bot.login(process.env.token);

export default Bot;