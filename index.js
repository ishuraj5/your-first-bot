const Discord = require('discord.js')
const client = new Discord.Client();

client.once('ready', () => {
  console.log("ready");
});

client.login('put-bot-token-here')

client.on("ready", () => {
  client.user.setStatus("idle");
  client.user.setActivity(`REPO BY https://github.com/ishuraj28`, { type: "LISTENING" });
});
