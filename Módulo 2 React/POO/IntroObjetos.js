let nombres = {
    nombre: 'Alejandro',
    apellido: 'Texis'
};
console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("teléfono"));

console.log(nombres);
///////////////////////////////////////////////////////


function perro (nombre, edad){
    perro.nombre= nombre;
    perro.edad= edad;
}

perro.prototype.habla = function() {
    return "Hola perros";
}

let firulais = new perro("Firulais", 9);
console.log(firulais.habla());