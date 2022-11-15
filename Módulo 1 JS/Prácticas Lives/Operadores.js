
let x = 5
let y = 10

//Asignación de adición

x += y //Es exactamente lo mismo que hacer: x = x + y 
x += y

console.log(x);

//Asignación de resta 

y -= x // Es exactamente lo mismo que hacer  

console.log(y);

//Asignación de multiplicación

x*=y

console.log("X = " + x);

//Operador de bit de Desplazamiento a la izquierda
x = 5;
y = 10;

x<<=y
console.log("X = " + x);

//Asignación  de módulo a residuos

x = 5;
y = 11;

console.log(y%x);

y %=x; 
console.log("Y = " + y);

//Arrays
let lista = [];

lista.push(x)
console.log(lista)

//Estructura de control if

let var1 = 3;
let vat2= 3;

//Operador igual 
if (var1 == vat2){
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

//Operador estrictamente igual 
if (var1 === '3'){
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}





