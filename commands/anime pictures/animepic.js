const Discord = require('discord.js')
const randomanime = require('random-anime')
module.exports = {
  name: 'animepic',
  aliases: ['ap',],
  description: 'shows random anime pictures!',
  cooldown: 5,
  usage: ' ',
  async execute(message, args){
    const anime = randomanime.anime()
    const embed = new Discord.MessageEmbed()
    .setImage(anime)
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send(embed)
     
  }
}
