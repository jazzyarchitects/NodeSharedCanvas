var config = require('./config/development');
var http = require('http');
var express = require('./framework/bootstrap')(config);


var server_port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '127.0.0.1';

var server = http.Server(express);
require('./framework/socketio')(server);

server.listen(server_port, server_ip_address, function(){
    console.log("Listening on: "+config.server.PORT);
});
