const Discord = require("discord.js");
const client = new Discord.Client();
const responseObject = {
  "hi": "Hey!",
  "?": "Say what?",
  "lol": "roflmaotntpmp"
};
// Set the prefix
let prefix = "p";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
    if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);}
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
 
x
  }
});
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
