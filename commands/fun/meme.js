const Discord = require('discord.js')
const utils = require('discord-utilities-js')
module.exports = {
  name: 'meme',
  description: 'shows a random meme!',
  cooldown: 10,
  async execute(message, args){
        let meme = await utils.meme()
       const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription("Showing result for a random meme!")
            .setImage(meme)
            .setTimestamp()
            .setFooter('Powered by discord-utilities-js');

            message.channel.send(embed);
  }
}
