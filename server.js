var http = require('http');
const { StarRail } =  require("starrail.js");


//Set up client access to Enka API
const client = new StarRail({ cacheDirectory: "/tmp" });
client.cachedAssetsManager.cacheDirectorySetup();

const uid = 600662715;

var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    }
).listen(3000);

app.get('/hsr', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    client.fetchUser(uid).then((data) => {
        res.end(data);
    });
});

console.log("Server running at http://localhost:3000/hsr");