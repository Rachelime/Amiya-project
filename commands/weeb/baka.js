const Discord = require('discord.js')
const nya = require('nekos.life')
const neki = new nya()
module.exports = {
  name: 'baka',
  descreption: 'BAKA!',
  cooldown: 3,
  async execute(message, args){
    
     taggedUser = message.author
 	  if(message.mentions.users.size > 0){
	  	taggedUser = message.mentions.users.first()
     }
    let baka = await neki.sfw.baka()
       const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`Hey ${taggedUser.username} BAKA!`)
            .setImage(baka.url)
            .setTimestamp()
            .setFooter('Nekos.life | ' +  `${Date.now() - message.createdTimestamp}` + 'ms' , 'https://avatars2.githubusercontent.com/u/34457007?s=200&v=4');

            message.channel.send(embed);
        
     
  
  }
}
