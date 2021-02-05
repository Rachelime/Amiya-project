const Discord = require('discord.js')
const fun = require('fun-responses')
module.exports = {
  name: 'toast',
  descreption: 'phrases <3',
  async execute(message, args){
           const embed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setDescription(funRes.toast())
            .setTimestamp()
            message.channel.send(embed);
  }
}
