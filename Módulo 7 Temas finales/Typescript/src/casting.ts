/**
 * Este código declara una variable de tipo string llamada "x" y le asigna el valor "hola". Luego, se define una función llamada "saludar" que tiene un parámetro llamado "saludo" que es de tipo number.

La función "saludar" simplemente imprime el valor del parámetro "saludo" en la consola.

Finalmente, se invoca a la función "saludar" y se le pasa el valor de la variable "x" como parámetro. Sin embargo, el tipo de la variable "x" es string y el tipo del parámetro "saludo" es number, por lo que se produce un error de tipo.

Para solucionar este problema, se utiliza el operador "as" para convertir el valor de "x" a un tipo desconocido (unknown) y luego se vuelve a convertir a un tipo number. Esto se conoce como "type assertion" o "type casting" y permite forzar la conversión de un tipo a otro a pesar de que no es una conversión válida de forma nativa.
 */

let x:string = 'hola';

function saludar(saludo:number){
    console.log(saludo)
}
saludar((x as unknown) as number)