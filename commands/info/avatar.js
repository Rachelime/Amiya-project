const Discord = require('discord.js')
module.exports = {
	name: 'avatar',
  aliases: ['a', 'pfp'],
	description: 'shows avatar of a mentioned user.',
  cooldown: 8,
	execute(message, args) {
     taggedUser = message.author
 	  if(message.mentions.users.size > 0){
	  	taggedUser = message.mentions.users.first()
     }
   	embed = new Discord.MessageEmbed()
 			.setTitle(taggedUser.tag)
 			.setImage(taggedUser.avatarURL({ dynamic: true, size: 2048 }))
 			.setColor('RANDOM')
 			.setTimestamp()
   	message.channel.send(embed)

	
  }
}
