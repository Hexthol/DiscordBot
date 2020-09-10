const { MessageReaction } = require("discord.js");

module.exports = {
    name: 'poll',
    description: 'this is a command to do a simple poll',
    execute(message, args){
        if (!args[0]){
            message.channel.send("please enter your title after -poll like this -poll <title>")
        }
        let msgArgs = args.join(" ");

        message.channel.send("📋"+"**"+msgArgs+"**").then(messageReaction => {
            messageReaction.react("👍");
            messageReaction.react("👎");
            message.delete({ timeout: 1000 }).then(msg => console.log(`Deleted message from ${msg.author.username} after 5 seconds`)).catch(console.error);
        })
    }
}