const Discord = require('discord.js')
const nya = require('nekos.life')
const neki = new nya()
module.exports = {
  name: 'cuddle',
  descreption: 'Cuddle to loved one!',
  cooldown: 3,
  async execute(message, args){
    
    	  if(message.mentions.users.size){
	  	taggedUser = message.mentions.users.first()

    let cuddle = await neki.sfw.cuddle()
       const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`cuddling to ${taggedUser.username}!`)
            .setImage(cuddle.url)
            .setTimestamp()
            .setFooter('Nekos.life | ' +  `${Date.now() - message.createdTimestamp}` + 'ms' , 'https://avatars2.githubusercontent.com/u/34457007?s=200&v=4');

            message.channel.send(embed);
        }
        else{
            message.channel.send('Please tag a valid user!');
        }
  
  }
}
