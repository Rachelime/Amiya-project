module.exports = {
	name: 'surprise',
  aliases: ['gift', 'mystery'],
	description: 'Surprise!',
	execute(message, args) {
	surprise=["https://youtu.be/j5a0jTc9S10","https://youtu.be/HV8IxKtAlrA","https://youtu.be/soq9cLVa5Xo","https://youtu.be/rEtZzcxQ_pA","https://youtu.be/Tt7bzxurJ1I","https://youtu.be/INbRpclIFsE","https://youtu.be/GjyUk_Ebb4o","https://youtu.be/GjyUk_Ebb4o","https://youtu.be/nW0P2hYBm9A","https://youtu.be/eBsIpefmXvE","https://youtu.be/6vBnqJhP7f8","https://youtu.be/Kiz3PM387FI","https://youtu.be/s0akG-V_Y30","https://youtu.be/9oxRDJjAQKI","https://youtu.be/SsiHLiXBlcM","https://youtu.be/LjQZaD9EEJ0","https://youtu.be/E458nb_pPmk","https://youtu.be/qxeokP0n6V0","https://youtu.be/qxeokP0n6V0","https://youtu.be/cAN30xJp2Cs"]
  
	  if(message.mentions.users.size){
	  	taggedUser = message.mentions.users.first()

            message.channel.send(`suprise mystery for ${taggedUser.username} open it ` + surprise[Math.floor(Math.random()*surprise.length)]);
        }
        else{
          

            message.channel.send("<a:rickroll:795685803208605727> | You didn't mentioned anyone This time actually mention someone for surprise!");
        }
  
      
	},
}
