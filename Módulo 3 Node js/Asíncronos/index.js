//Proceso asíncrono o Non-Blocking

http = require('http');
console.log("Hola");
http.get('http://httpstat.us/200',(res)=>{
    console.log(`La API devolvió: ${res.statusCode}`);
});

console.log("Adios");

//Hilo asíncrono
/*setTimeout(()=>{
    console.log("Me has esperado");
}, 2000);
*/

