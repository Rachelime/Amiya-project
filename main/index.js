const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix, token } = require('./config.json')
const { ownerID } = require('./config.json')
const keepAlive = require('./server.js')
const server = require('./server')
const axios = require('axios')
const fs = require('fs')
const cooldowns = new Discord.Collection()
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
client.events = new Discord.Collection()
const TicTacToe = require('discord-tictactoe')
	new TicTacToe({
  language: 'en',
  command: `${prefix}ttt`
}, client)

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	client.commands.set(command.name, command)
}
 
 require('dotenv').config()
const fetch = require('node-fetch');
keepAlive();
client.on('ready', () => {
	console.log('Bot revived ' + client.user.tag);

	 client.user.setActivity(`${prefix}help`, { type: 'LISTENING' })
    client.user.setPresence({
        status: "idle",  // online, idle... Do not disturb is dnd
        // game: {
        //     name: `${prefix}help`,  // The message shown
        //     type: "LISTENING" // PLAYING, WATCHING, LISTENING, STREAMING,
        // }
    })

})




//THANKS to https://github.com/discordjs/guide and bunch of stackoverflow, yt and tutorials 

client.on('message', message => {
	if (!message.content.toLowerCase().startsWith(`${prefix}`) || message.author.bot) return;
else (!message.content.toLowerCase().startsWith(`${prefix}`))
   
	const args = message.content.slice(prefix.length).trim().split(/ +/);

	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply('you do not have permissions to use this command!');
		}
	}

	if (command.args && !args.length) {
		let reply = `Provide few arguments!`;

		if (command.usage) {
			reply += `\nUmm I didn't get it try \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.channel.send(`You just used this command wait for ${timeLeft.toFixed(1)} seconds to use \`${command.name}\` again.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		
	}

  if (message.content === '<@800825382176555028>') {
		message.channel.send(`My prefix is \`${prefix}\` type \`${prefix}help\` for my commands`);

  } 
  
  if (message.content === '<@!800825382176555028>') {
		message.channel.send(`My prefix is \`${prefix}\` type \`${prefix}help\` for my commands`);
    
	} 
})

client.login(process.env.TOKEN);
