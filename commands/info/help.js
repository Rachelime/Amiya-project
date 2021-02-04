const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix } = require('../config.json')

module.exports = {
	name: 'help',
	description: 'Sends whole command list',
	usage: '[command name]',
  aliases: ['command', 'commands'],
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
           
	// data.push('List of all commands:')
			data.push(commands.map(command => command.name).join('\n»'))
			data.push(`\n \`${prefix}help [command name]\` to get info on a specific command!`)
          const embed = new Discord.MessageEmbed()
              
              .setTitle(`**Prefix ${prefix} for all**`)
              .setColor('RANDOM')
				      .setDescription('»' + data, { split: true })
              .setTimestamp()
              .setFooter( 'Showing help commands Requested by '+ message.author.tag, message.author.avatarURL())
        return message.author.send(embed)
      
         

				.then(() => {
					if (message.channel.type === 'dm') return;
					message.channel.send('📩| check dm for all commands');
            message.react('🍀')
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('I encountered a strang error! Sorry unable to dm you :(');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid!');
		}

		data.push(`**»** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} seconds`);

   const embed = new Discord.MessageEmbed()
  
             .setTitle('**command help:**')
             .setColor('RANDOM')
             		.setDescription(data, { split: true })
		message.channel.send(embed);

	},
};
