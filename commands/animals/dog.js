const Discord = require('discord.js')
const utils = require('discord-utilities-js')
module.exports = {
  name: 'dog',
  description: 'Shows a random dog image!',
  cooldown: 6,
  async execute(message, args){
    
   let dog = await utils.dog()
       const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Woof!')
            .setImage(dog)
            .setTimestamp()
            .setFooter('Powered by discord-utilities-js');

            message.channel.send(embed);
  },
}
