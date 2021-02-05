const Discord = require('discord.js')
module.exports = {
	name: '8ball',
  aliases: ['que', 'question', '🎱'],
	description: 'ask a question to magic 8-ball!',
	execute(message, args) {
	ans=["● It is certain.","● It is decidedly so.", "● Without a doubt.","● Yes – definitely.","● You may rely on it.","● As I see it, yes.","● Most likely.","● Outlook good.","● Yes.","● Signs point to yes.","● Reply hazy, try again.","● Ask again later.","● Better not tell you now.","● Cannot predict now.","● Concentrate and ask again.","● Don't count on it.","● My reply is no.","● My sources say no.","● Outlook not so good.","● Very doubtful.",]
  
		const que = args.join(' ')

            message.channel.send(`🎱 Question by ${message.author.username}: ` + `${que}` + '```\n' +  ans[Math.floor(Math.random()*ans.length)] + '\n```')
  message.react('🎱')
      
	},
}
