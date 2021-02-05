const Discord = require('discord.js')
const fun = require('fun-responses')
module.exports = {
  name: 'roast',
  descreption: 'roast lines!',
  async execute(message, args){
           const embed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setDescription(funRes.roast())
            .setTimestamp()
            message.channel.send(embed);
  }
}
