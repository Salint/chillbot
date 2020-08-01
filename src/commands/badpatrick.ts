import { Message, MessageAttachment } from "discord.js";
import jimp from "jimp";

const properties = {
	name: "badpatrick",
	description: "Turn someone into bad patrick!",
	args: []
};

const run = async (message: Message): Promise<void> => {

	const user = message.mentions.users.first();
	if(user) {

		const image = await jimp.read(`${__dirname}/../../../attachments/patrick.jpeg`);
		const userAvatar = await jimp.read(user.avatarURL( { format: "png", size: 128 } ));

		userAvatar.resize(100, 100);
		image.composite(userAvatar, 164, 50);

		image.getBuffer("image/png", (err: Error, buffer: Buffer) => {

			if(err) return;
			message.channel.send(new MessageAttachment(buffer));

		});
	}
	else message.reply("mention someone to turn into patrick!");

};

/* eslint-disable */
exports.properties = properties;
exports.run = run;
/* eslint-enable */