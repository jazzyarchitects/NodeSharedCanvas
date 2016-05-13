var config = require('./config/development');
var http = require('http');
var express = require('./framework/bootstrap')(config);

var server = http.Server(express);
require('./framework/socketio')(server);

server.listen(process.env.PORT || config.server.PORT, function(){
    console.log("Listening on: "+config.server.PORT);
});