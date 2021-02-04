const Discord = require('discord.js')
const Neko = require('neko-love')
const axios = require('axios')
module.exports = {
  name: 'waifu',
  descreption: 'shows a random waifu image',
  cooldown: 3,
  async execute(message, args){
             const response = await axios.get('https://neko-love.xyz/api/v1/waifu');    
       const embed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
           
            .setImage(response.data.url)
            .setTimestamp()
            .setFooter('Powered by Neko-Love');

            message.channel.send(embed);
  }
}
