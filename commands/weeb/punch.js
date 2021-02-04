const Discord = require('discord.js')
const Neko = require('neko-love')
const axios = require('axios')
module.exports = {
  name: 'punch',
  descreption: 'Punch hard to enemy!',
  cooldown: 3,
  async execute(message, args){
    
  if(message.mentions.users.size){
	  	taggedUser = message.mentions.users.first()
             const response = await axios.get('https://neko-love.xyz/api/v1/punch');    
       const embed = new Discord.MessageEmbed()
      .setDescription(`Punching hard to ${taggedUser.username}!`)
            .setColor(`RANDOM`)
            .setImage(response.data.url)
            .setTimestamp()
            .setFooter('Powered by Neko-Love')
             message.channel.send(embed)
  }
  else{
     message.channel.send("Please tag a valid user!")
  }
}
}
