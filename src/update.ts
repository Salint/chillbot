import { Client } from "discord.js";
import config from "../config.json";

const update = (Bot: Client): Promise<void> => {

	Bot.user.setActivity(`in ${Bot.guilds.cache.array().length} guilds! ${config.prefix}help.`, { type: "PLAYING" });

	return;

};

export default update;