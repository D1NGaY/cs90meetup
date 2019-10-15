const Discord = require('discord.js');
const bot = new Discord.Client();
const cheerio = require('cheerio');
const request = require('request');
const PREFIX = 'CS!';

const token = process.env.token;
;

bot.on('ready', () =>{
    console.log("D1NGY's bot is online" ) 
});

bot.on('message', msg=>{
    if(msg.content ===  "CS!lfg"){
        msg.reply('Is searching for Teammate(s), react to his message to show that you are interested! @here')
        msg.react('🎮')
    }
})

bot.on('message', msg=>{
    if(msg.content === "CS!help"){
        msg.reply('``` \n Here are the Commands! \n  - CS!help = opens command list \n  - CS!lfg = makes an LFG advertisement. \n  - CS!ping = Tests if the bot is active or not. ``` ')
        msg.react('✅')
    }
});

bot.on('message', msg=>{
    if(msg.content === "CS!ping"){
        msg.reply('```pong!```')
    }
});

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'CS!help',
            type: "STREAMING",
            url: "http://www.twitch.tv/dingyclips"
        }
    });
});

bot.login(token);