var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	io = require('socket.io').listen(server);

server.listen(8585);

app.use(express.static(__dirname));

//Ruta(s) que se manejaran
app.get('/', function(req, res){
	res.sendfiled(__dirname + '/index.html');
});

//variable 'usernames' para los usuarios conectados
var usernames = {};

io.sockets.on('connection', function(socket){
	//Cuando el cliente, browser, emite el evento 'sendchat', este debe escuchar y ejecutar
	socket.on('sendchat', function(data){
		//Le enviamos 'emit' al cliente que ejecute 'updatechat' con los parametros 'socket.username' y 'data'
		io.sockets.emit('updatechat', socket.username, data);
	});
	//Cuando el cliente emite un evento 'adduser', este escucha y ejecuta
	socket.on('adduser', function(username){
		//Almacenamiento del nombre de usuario en la sesión de toma de info del cliente
		socket.username = username;
		//Adicionamos el usuario 'socket.username' al objeto 'usernames'
		usernames[username] = username;
		//Enviamos al cliente el objeto con las listas de usuarios en el objeto 'usernames'
		socket.broadcast.emit('updatechat', 'SERVER', username + ' Esta conectado');
		//Enviamos peticion al mismo cliente de la peticion con al conexion de el mismo
		socket.emit('updatechat', 'SERVER', 'Usted esta conectado');
		//Actulaizamos la lista de usuarios en el chat, en el cliente
		io.sockets.emit('updateusers', usernames);
	});

	//Cuando el usuario se desconecta
	socket.on('disconnect', function(){
		delete usernames[socket.username];
		//Actualizamos la de usuarios en el cliente
		io.sockets.emit('updateusers', usernames);
		//Envio global de la actualizacion de la lista de clientes conectados
		socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' Esta desconectado');
	});
});