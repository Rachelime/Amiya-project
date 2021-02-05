const Discord = require('discord.js')
const fun = require('fun-responses')
module.exports = {
  name: 'pickupline',
  aliases: ['pl'],
  descreption: 'a random pickupline',
  async execute(message, args){
       const embed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setDescription(funRes.pickup())
            .setTimestamp()
             message.channel.send(embed);
  }
}
