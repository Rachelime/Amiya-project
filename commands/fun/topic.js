const Discord = require('discord.js')
const fun = require('fun-responses')
module.exports = {
  name: 'topic',
  descreption: 'gives a random topic',
  async execute(message, args){
           const embed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setDescription(funRes.topic())
            .setTimestamp()
            message.channel.send(embed);
  }
}
