const Discord = require("discord.js");
const client = new Discord.Client();

// Set the prefix
let prefix = "p";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    bot.user.setGame('GAME HERE')
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
