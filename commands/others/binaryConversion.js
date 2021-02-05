const { prefix } = require('../config.json')
const utils = require('discord-utilities-js')
module.exports = {
  name: 'binary',
  description: 'converts text to binary!',
  cooldown: 6,
  async execute(message, args){

		const arg = message.content
			.slice(prefix.length)
			.trim()
			.split(/ +/);
		const commandName = arg.shift().toLowerCase();
		const text = arg.join(' ');

   let binary = await utils.binary(text)
     
            message.channel.send(binary);
  },
}
