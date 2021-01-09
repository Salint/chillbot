import { assert } from "chai";
import { BaseMocks } from "@lambocreeper/mock-discord.js";
import { SinonSandbox, createSandbox } from "sinon";
import { Message, MessageEmbed } from "discord.js";
/* eslint-disable */
const Command = require("../src/commands/help");
/* eslint-enable */


describe("Help Command", () => {
	describe("Testing properties.", () => {
		it("Testing if name is correct", () => {

			assert.equal(Command.properties.name, "help");
		});
		it("Testing if description is correct", () => {

			assert.equal(Command.properties.description, "A help command.");
		});
		it("Testing if there is no arguments", () => {

			assert.equal(Command.properties.args.length, 0);
		});
	});
	describe("Testing functionality.", () => {

		let sandbox: SinonSandbox;
		let message: Message;

		beforeEach(() => {

			sandbox = createSandbox();
			message = BaseMocks.getMessage();

		});

		afterEach(() => {
			sandbox.restore();
		});

		it("Testing if command is called once.", () => {
			
			const mock = sandbox.stub(message.channel, "send");
			
			Command.run(message);

			assert.equal(mock.calledOnce, true);

		});
		it("Testing if command returns correct embed.", () => {
			
			const mock = sandbox.stub(message.channel, "send");
			
			Command.run(message);

			const embed: MessageEmbed = mock.getCall(0).firstArg;

			assert.equal(embed.title, "Help.");
		});
	});
});