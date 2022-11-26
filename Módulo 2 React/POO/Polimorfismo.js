function Persona(nombre){
    this.nombre=nombre;
    this.caminar=function(){
        console.log("Caminando");
    }
}

function Alumno(nombre, llorando){
    Persona.call(this, nombre);

    this.llorando=llorando;
    this.caminar= function(){
        console.log("Caminando y llorando");
    }
}

Alumno.prototype= Object.create(Persona.prototype);
Alumno.prototype.constructor =Alumno

let estudiante1= new Alumno('Alejandro Texis' , "js");
let persona1= new Persona('Erni');

console.log(estudiante1.caminar());
console.log(persona1.caminar());
