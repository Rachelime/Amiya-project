const { prefix } = require('../config.json')
const utils = require('discord-utilities-js')
module.exports = {
  name: 'decode',
  description: 'decodes binary message!',
  cooldown: 6,
  async execute(message, args){

		const arg = message.content
			.slice(prefix.length)
			.trim()
			.split(/ +/);
		const commandName = arg.shift().toLowerCase();
		const text = arg.join(' ');

   let decodebinary = await utils.decodebinary(text)
     
            message.channel.send(decodebinary);
  },
}
