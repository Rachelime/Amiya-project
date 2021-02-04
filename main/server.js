var http = require('http');

http
	.createServer(function(req, res) {
		res.write('Amiya');
		res.end();
	})
	.listen(8080);


const express = require('express');
const server = express();


server.all('/' , (req, res)=>{

})

function keepAlive(){
  server.listen(3000, ()=>{console.log("Server Is Ready!")
  });
}

module.exports = keepAlive;

