var http = require('http');

//Método do módulo http
//req = requisição
//res = response
http.createServer(function(req,res){
  res.end("Olá mundo!");
}).listen(8081);

console.log("Servidor está rodando");
