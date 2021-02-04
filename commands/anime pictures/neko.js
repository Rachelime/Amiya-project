const Discord = require('discord.js')
const Neko = require('neko-love')
const axios = require('axios')
module.exports = {
  name: 'neko',
  descreption: 'shows a random cat-girl image',
  cooldown: 3,
  async execute(message, args){
             const response = await axios.get('https://neko-love.xyz/api/v1/neko');    
       const embed = new Discord.MessageEmbed()
            .setTitle('\❤ Nya!')
            .setColor(`RANDOM`)
            .setImage(response.data.url)
            .setTimestamp()
            .setFooter('Powered by Neko-Love')
             message.channel.send(embed)
  }
}
