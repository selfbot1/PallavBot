const Discord = require("discord.js");
const client = new Discord.Client();
// Set the prefix
let prefix = "p";

client.on("ready", () => {
  console.log("I am ready!");
  //client.user.setPresence({ status: 'Do Not Disturb', game: { name: 'with Pallav.' } });
  client.user.setGame("with Pallav.", "https://go.twitch.tv/pallavbs"); // a game
  client.user.setStatus("Do Not Disturb"); // Set status to DnD

});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general-discussions');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "ping") {
    message.channel.send("pong!");
  if(command === "say"){
  let text = args.slice(1).join(" ");
  message.delete();
  message.channel.send(text);
}
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
