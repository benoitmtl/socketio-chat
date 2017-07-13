var express = require ('express');
var app = express();
var server = require('http').createServer(app);
var io = require ('socket.io').listen(server);

user = [];
connections = [];

server.listen(process.env.PORT || 3000);

app.get('/', function(req,res){
	res.sendFile( __dirname + '/index.html')
});