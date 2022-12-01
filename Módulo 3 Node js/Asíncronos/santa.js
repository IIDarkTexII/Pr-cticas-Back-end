//Con SetTimeOu
function leerCarta(carta, callback){
    return setTimeout(()=>{
        callback(carta.split("").reverse("").join("")); 
    },2000);
}

function construirJuguete(instruccion, callback){
    return setTimeout(()=>{
        const juguete= instruccion.split("").reverse().join("")
        if(juguete.includes("madera"))
            return callback(`${juguete} de madera fina`);
        else if (juguete.includes("xbox"))
            return callback(`No te puedo mandar tu Xbos ${juguete}`);
        else 
            return callback(`Aquí tienes tu cosa ${juguete}`);
        
        callback(juguete);
    },5000);
}

function envolverRegalo(juguete, callback){
    return setTimeout(()=>{
        callback(`${juguete} envuelto`); 
    },3000);
}

// Call Back Hell
/*
leerCarta("carrito de madera", (instruccion)=>{
    construirJuguete(instruccion, (juguete)=>{
        envolverRegalo(juguete, console.log);
    });
});
*/

//Modularizar las llamadas, es decir, hacer funciones aparte para las llamadas

function construirJ(juguete){
    envolverRegalo(juguete, console.log);
}

function leerC(instruccion){
    construirJuguete(instruccion, construirJ);
}

leerCarta("Carrto de madera", leerC);