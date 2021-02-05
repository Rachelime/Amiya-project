const Discord = require('discord.js')
module.exports = {
	name: 'amiyadance',
  aliases: ['dance'],
	description: 'Dance Dance Dance!',
	execute(message, args) {
	dance=["https://thumbs.gfycat.com/BetterYoungAlligator-max-1mb.gif","https://thumbs.gfycat.com/MintySingleAntarcticfurseal-max-1mb.gif", "https://danbooru.donmai.us/data/2070218776153e044ca46875399d6f2e.gif", "https://i.redd.it/xhq0uiq2a4461.gif", "https://i.pinimg.com/originals/42/b5/ee/42b5ee8d56b365077e2b7becd09088a1.gif", "https://community.gamepress.gg/uploads/default/original/4X/f/6/c/f6cd283d477de4549605928a640d4963c1b48ceb.gif"]

  	embed = new Discord.MessageEmbed()
 			.setImage(dance[Math.floor(Math.random()*dance.length)])
 			.setColor('RANDOM')
 			.setTimestamp()
   	message.channel.send(embed)
  
      
	},
}
