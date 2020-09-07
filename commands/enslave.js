module.exports = {
    name: 'enslave',
    description: 'this is a command to enslave your self',
    execute(message, args){
        
        if (message.member.roles.cache.has('683517084658958396')){
            message.channel.send('You are already a slave.');
        }
        else{
            message.channel.send('Now you are a slave.');
            message.member.roles.add('683517084658958396').catch(console.error);
        }
    }
}