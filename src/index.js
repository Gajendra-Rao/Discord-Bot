require('dotenv').config();
const {Client, IntentsBitField} = require("discord.js");
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})
// The event will invoke when the bot is Ready/online
client.on("Ready",(e)=>{
    console.log(`Bot is ready and logged in as ${client.user.tag}`)
})

// The Event will invoke whenever a message comes/creates to the discord server
client.on("messageCreate",(message)=>{
    if(message.author.bot){
        return
    }
    console.log(message.content)
    if(message.content === "Tenma"){
        message.reply("What the Sigma")
    }
    if(message.content === "Hello"){
        message.reply("Hello")
    }
})
console.log(process.env.TOKEN)
client.login(process.env.TOKEN)