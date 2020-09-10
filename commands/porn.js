const cheerio =require('cheerio')

const request = require('request')

module.exports = {
    name: 'porn',
    description: 'this is a command to send random pornography',
    execute(message, args){
        var options = {
            url: "https://www.pornhub.com/video/search?search=" + args[0],
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        };
        request(options, function(error, response, responseBody) {
            if (error) {
                return;
            }
     
     
            $ = cheerio.load(responseBody);
     
     
            var links = $(".video a.link");
     
            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
           
            console.log(urls);
     
            if (!urls.length) {
                message.channel.send('Sry, I didnt find related videos')
                return;
            }
     
            // Send result
            message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        });
    }
}