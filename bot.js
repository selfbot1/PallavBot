const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    
    if (message.content === 'pspam') {
        var count = 0;
         while (count < 10){
            message.reply('spam');
            message.reply('spam');
            message.reply('spam');
            count++;
         }

       
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
