const http = require('http'); //Cargando un módulo de Node.js
const url= require('url')
const rd= require('./Modules/retrievedate') //Cargamos un módulo creado en Modules/retrievedate

http.createServer(function(req , res){
    res.writeHead(200,{'Content-Type':'text/htmml'});
    //res.write("La fecha y hora es: " + rd.RetrieveDate());
    //res.write(req.url);
    //res.end("Hola Mundo");
    const query= url.parse(req.url,true).query;
    const text= query.year + " " + query.month
    res.end(text);
}).listen(8080);
