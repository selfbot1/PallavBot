const Discord = require("discord.js");
const client = new Discord.Client();
// Set the prefix
let prefix = "p";

client.on("ready", () => {
  console.log("I am ready!");
  //client.user.setPresence({ status: 'Do Not Disturb', game: { name: 'with Pallav.' } });
  client.user.setGame("phelp", "https://go.twitch.tv/pallavbs"); // a game
  client.user.setStatus("dnd"); // Set status to DnD

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
    
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    var chanell=args[0];
    var len = chanell.length;
    if(len === 21){
      let text = args.slice(1).join(" ");      
      let str=args[0];
      var targetchannel=args[0].replace("<#","").replace(">","");
      let channel = client.channels.get(targetchannel);
      channel.send(text);}
    else{
       message.channel.send(sayMessage);}
  }
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
