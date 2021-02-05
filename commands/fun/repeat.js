
const Discord = require('discord.js')
const { ownerID } = require('../config.json')
module.exports = {
	name: 'repeat',
  aliases: ['say'],
	description: 'repeats the given text!',
	execute(message, args) {
  
const text = args.join(' ')
if(message.author.id = `${ownerID}`){
   message.channel.send(`${text}`)
  message.delete()
}
else{
  const embed = new Discord.MessageEmbed
  .setColor('RANDOM')
  .setDescription(`${text}` + '\n' + message.author.id)
}      
	}
}
