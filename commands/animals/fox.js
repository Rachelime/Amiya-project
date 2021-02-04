const Discord = require('discord.js')
const utils = require('discord-utilities-js')
module.exports = {
  name: 'fox',
  description: 'Shows a random fox image!',
  cooldown: 6,
  async execute(message, args){
    
   let fox = await utils.fox()
       const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage(fox)
            .setTimestamp()
            .setFooter('Powered by discord-utilities-js'); message.channel.send(embed);
  },
}
