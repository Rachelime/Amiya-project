const Discord = require('discord.js')
const utils = require('discord-utilities-js')
module.exports = {
  name: 'kitty',
  aliases: ['cat'],
  description: 'Shows a random cat image!',
  cooldown: 6,
  async execute(message, args){
    
   let cat = await utils.cat()
       const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Meow!')
            .setImage(cat)
            .setTimestamp()
            .setFooter('Powered by discord-utilities-js');

            message.channel.send(embed);
  },
}
