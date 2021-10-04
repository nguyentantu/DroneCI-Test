var http = require("http");
var sleep = require("system-sleep");
var os = require("os");

var hostname = os.hostname();

http.createServer(function(request, response) {

response.writeHead(200, {'Content-Type':'text/plain'});
response.end("Swarm service (Node App), hostname: " + hostname);

}).listen(8085);

console.log("Node APP, port 8085; hostname: " + hostname);