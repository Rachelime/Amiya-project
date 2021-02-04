const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
	name: 'ping',
  aliases: ['pong', 'beep', 'boop'],
	description: 'Ping!',
  cooldown: 5,
	execute(message, args) {
	
        message.channel.send("Ponging...").then(m =>{

       m.edit(`<:online:806776820602634262> Pong! Latency : ${Date.now() - message.createdTimestamp}ms,  Heartbeat : ${Math.round(client.ws.ping)}ms <:googleheart:806777272873779200>`)
       })
       	 console.log(`${message.guild.name}`)
	},
}
