import { Client, Message, GuildMember } from "discord.js";
import events from "./events";

const Bot: Client = new Client();

Bot.on("ready", () => events.readyEvent(Bot));
Bot.on("guildMemberAdd", (member: GuildMember) => events.guildMemberJoin(Bot, member));

Bot.login(process.env.token);