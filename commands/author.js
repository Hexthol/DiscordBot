module.exports = {
    name: 'author',
    description: 'this is a command to get the origin repo of this bot',
    execute(message, args){
        message.channel.send('https://github.com/Hexthol/DiscordBot')
    }
}