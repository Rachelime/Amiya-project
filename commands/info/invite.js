const Discord = require('discord.js')
const { invite, git } = require('../config.json')

module.exports = {
	name: 'invite',
  aliases: ['support'],
	description: 'Invite Amiya to your server!',
	 execute(message, args) {
const embed = new Discord.MessageEmbed()
 			.setTitle(`Invite Amiya to your server!`)
      .setDescription(`**[INVITE](${invite}) | [GITHUB](${git})**`)
      .addField('Don\'t hesitate to give some permissions to Amiya', 'As it only needs send/receive and manage message permission for better functionality and manage roles permission to creat her own integrated role.')
      .setThumbnail('https://media4.giphy.com/media/jRlHsLVHInvfVsk9aD/giphy.gif')
 			.setColor('RANDOM')
 			.setTimestamp()
   	message.channel.send(embed)
  
      
	},
}
