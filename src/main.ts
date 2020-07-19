import { Client, Message } from "discord.js";
import events from "./events";

const Bot: Client = new Client();

Bot.on("ready", () => events.readyEvent(Bot));
Bot.on("message", (message: Message) => events.messageEvent(Bot, message));

Bot.login(process.env.token);