const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

const cheerio =require('cheerio')

const request = require('request')

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}


client.once('ready', ()=>{
    console.log('Luer is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();
    
    if (command === 'test'){
        //message.channel.send('NMSL');
        client.commands.get('test').execute(message,args);
    }else if (command === 'curse'){
        message.channel.send('NMSL');
    }else if (command === 'author'){
        client.commands.get('author').execute(message,args);
    }else if (command === 'enslave'){
        client.commands.get('enslave').execute(message,args);
    }else if (command === 'image'){
        client.commands.get('image').execute(message,args);
    }else if (command === 'porn'){
        client.commands.get('porn').execute(message,args);
    }else if(command === 'poll'){
        client.commands.get('poll').execute(message,args);
    }
});

//NzUxNTg4NTY5NDQ1MDQwMjA4.X1LRZg.HcY8CnA09zox73_TVc5BJr03l6o
client.login('NzUxNTg4NTY5NDQ1MDQwMjA4.X1LRZg.HcY8CnA09zox73_TVc5BJr03l6o');
