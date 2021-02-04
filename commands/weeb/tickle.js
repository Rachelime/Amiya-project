const Discord = require('discord.js')
const nya = require('nekos.life')
const neki = new nya()
module.exports = {
  name: 'tickle',
  descreption: 'Tickle! hehe!',
  cooldown: 3,
  async execute(message, args){
    
    	  if(message.mentions.users.size){
	  	taggedUser = message.mentions.users.first()

    let tickle = await neki.sfw.tickle()
       const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`Tickle to ${taggedUser.username}!`)
            .setImage(tickle.url)
            .setTimestamp()
            .setFooter('Nekos.life | ' +  `${Date.now() - message.createdTimestamp}` + 'ms' , 'https://avatars2.githubusercontent.com/u/34457007?s=200&v=4');

            message.channel.send(embed);
        }
        else{
              let tickle = await neki.sfw.tickle()
       const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`Tickle to ${message.author.username}!`)
            .setImage(tickle.url)
            .setTimestamp()
            .setFooter('Nekos.life | ' +  `${Date.now() - message.createdTimestamp}` + 'ms' , 'https://avatars2.githubusercontent.com/u/34457007?s=200&v=4');

            message.channel.send(embed);
        }
  
  }
}
