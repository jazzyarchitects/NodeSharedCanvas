module.exports = function(server){
	var io = require('socket.io').listen(server);
	io.sockets.on('connection', function(socket){
		console.log('Socket connected');

    socket.on('draw', function(data){
      socket.broadcast.emit('draw', data);
    });

    socket.on('clear', function(data){
      socket.broadcast.emit('clear',{});
    })

	});



};


/**


 Gets event for line drawn every 25ms
 stores in canvas



































 */
