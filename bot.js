const Discord = require("discord.js");
const client = new Discord.Client();
// Set the prefix
let prefix = "p";

client.on("ready", () => {
  console.log("I am ready!");
  client.setGame("Brawl Stars", "https://go.twitch.tv/pallavbs"); // a game

});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
