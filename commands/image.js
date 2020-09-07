const cheerio =require('cheerio')

const request = require('request')

module.exports = {
    name: 'image',
    description: 'this is a command to send random images',
    execute(message, args){
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q=" + args[0],
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
     
     
            var links = $(".image a.link");
     
            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
           
            console.log(urls);
     
            if (!urls.length) {
                message.channel.send('Sry, I didnt find related images')
                return;
            }
     
            // Send result
            message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        });
    }
}