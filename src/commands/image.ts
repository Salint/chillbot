import { Message, MessageAttachment } from "discord.js";
import jimp from "jimp";

const properties = {
	name: "image",
	description: "Image test.",
	args: []
};

const run = async (message: Message): Promise<void> => {

	const image = await jimp.read(message.author.avatarURL( { format: "png", size: 512 } ));
	const font = await jimp.loadFont(jimp.FONT_SANS_16_WHITE);

	image.print(font, 0, 0, "Hello, world!");

	image.getBuffer("image/png", (err: Error, buffer: Buffer) => {

		if(err) return;
		message.channel.send(new MessageAttachment(buffer));

	});

};

/* eslint-disable */
exports.properties = properties;
exports.run = run;
/* eslint-enable */