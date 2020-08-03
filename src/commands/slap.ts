import { Message, MessageAttachment } from "discord.js";
import jimp from "jimp";

const properties = {
	name: "slap",
	description: "Slap someone!",
	args: []
};

const run = async (message: Message): Promise<void> => {

	const user = message.mentions.users.first();
	if(user) {

		const image = await jimp.read(`${__dirname}/../../../attachments/slap.jpeg`);
		
		const userAvatar = await jimp.read(message.author.avatarURL( { format: "png", size: 128 } ));
		const victimAvatar = await jimp.read(user.avatarURL( { format: "png", size: 128 } ));

		image.composite(userAvatar, 174, 50);
		image.composite(victimAvatar, 350, 180);

		image.getBuffer("image/png", (err: Error, buffer: Buffer) => {

			if(err) return;
			message.channel.send(new MessageAttachment(buffer));

		});
	}
	else message.reply("mention someone to slap!");

};

/* eslint-disable */
exports.properties = properties;
exports.run = run;
/* eslint-enable */