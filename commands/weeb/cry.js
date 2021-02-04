const Discord = require('discord.js')
const Neko = require('neko-love')
const axios = require('axios')
module.exports = {
  name: 'cry',
  descreption: 'Crying can reduce your pain!',
  cooldown: 3,
  async execute(message, args){
  if(message.mentions.users.size){
	  	taggedUser = message.mentions.users.first()
             const response = await axios.get('https://neko-love.xyz/api/v1/cry');    
       const embed = new Discord.MessageEmbed()
      .setDescription(`What you done ${taggedUser.username}! to make them cry?`)
            .setColor(`RANDOM`)
            .setImage(response.data.url)
            .setTimestamp()
            .setFooter('Powered by Neko-Love')
             message.channel.send(embed)
  }
  else{
           const embed = new Discord.MessageEmbed()
      .setDescription(`Aww why are you crying ${message.author.username}?`)
            .setColor(`RANDOM`)
            .setImage(response.data.url)
            .setTimestamp()
            .setFooter('Powered by Neko-Love')
             message.channel.send(embed)
  }
}
}
