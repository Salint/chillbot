import { Client } from "discord.js";

const Bot: Client = new Client();

Bot.on("ready", () => {
	Bot.user.setActivity("you.", { type: "WATCHING" });
});

Bot.login(process.env.token);