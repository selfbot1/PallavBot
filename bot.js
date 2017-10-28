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
    message.channel.send("pong!");}
  if(command === "say"){
    console.log(args)
    let origtext = args.slice(0).join(" "); 
    var chanell=args[0];
    console.log(chanell)
    var len = chanell.length;
    console.log(len)
    if(len === 21){
      let text = args.slice(1).join(" ");      
      let str=args[0];
      args[1].replace("<#","");
      var targetchannel=args[0].replace("<#","").replace(">","");
      let channel = client.channels.get(targetchannel);
      console.log(targetchannel);
      console.log(channel);
      message.delete();
      channel.send(text);}
    else{
       message.delete();
       message.channel.send(origtext);}


  }
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
