const Discord = require('discord.js')
const utils = require('discord-utilities-js')
module.exports = {
  name: 'winks',
  aliases: ['wink'],
  description: 'Winking Blinking!',
  cooldown: 6,
  async execute(message, args){
    
   let wink = await utils.wink()
       const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage(wink)
            .setTimestamp()
            .setFooter('Powered by discord-utilities-js')
            message.channel.send(embed)
            message.react('👀')
  },
}
