let nombres = {
    nombre: 'Alejandro',
    apellido: 'Texis'
};
console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("teléfono"));

console.log(nombres);
///////////////////////////////////////////////////////


function perro (nombre, edad){
    let perro= Object.create(ObjetoConstructor);
    perro.nombre= nombre;
    perro.edad= edad;
    return perro;
}

let ObjetoConstructor= {
    habla: function(){
        return "Hola perros";
    }
}

let firulais = perro("Firulais", 9);
console.log(firulais);