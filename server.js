//function to create server, host and port
const http = require("http");
const host =  'localhost';
const port = 8000;

//request listener 
const requestListener =  function(req, res){
	res.writeHead(200);
	res.end("Trial environment!");
};

//Calling the server
const server  =  http.createServer(requestListener);
server.listen(port, host, () => {
	console.log('Server  is running on http://${host}:${port}');
});



