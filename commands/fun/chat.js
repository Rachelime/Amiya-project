const { prefix } = require('../config.json')

let alexa = require('alexa-bot-api')
let chatbot = new alexa('aw2plm')
module.exports = {
  name: 'chat',
  aliases: ['c', 'talk'],
  descreption: 'To talk with me. lets chat about a topic for sometime.',
  async execute(message, args){
 
   if(message.content.toLowerCase().startsWith(`${prefix}c`)){
    message.channel.startTyping()
    message.channel.stopTyping()
    }
		const arg = message.content
			.slice(prefix.length)
			.trim()
			.split(/ +/);
		const commandName = arg.shift().toLowerCase();
		const query = arg.join(' ');

		if (!arg.length) {
			return message.channel.send(`What you want to say?`);
		}
		if (message.channel.type === 'dm') {
			const arg = message.content
				.slice(prefix.length)
				.trim()
				.split(/ +/);
			const commandName = arg.shift().toLowerCase();
			const query = arg.join(' ');

			if (!arg.length) {
				return message.channel.send(
					`You didn't provided any arguments, ${message.author}!`
				);

				let content = query;
				chatbot.getReply(content).then(r => message.channel.send(r));
			}
		}

		let content = query;
		chatbot.getReply(content).then(r => message.channel.send(r));
	}



  }
