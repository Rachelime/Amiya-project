const Discord = require('discord.js')
const fun = require('fun-responses')
module.exports = {
  name: 'joke',
  aliases: ['pj', 'jokes'],
  descreption: 'sends a random pj! :P',
  async execute(message, args){
           const embed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setDescription(funRes.joke())
            .setTimestamp()
            message.channel.send(embed);
  }
}
