for(let i = 0; i<19; i++){
    if ((i%2)!=0){
        continue;
    }
    if (i==10){
        break;
    }
    console.log(i);
    
}

console.log("Aquí sale");
/////////////////////////////////
//if/else

function validarEdad(edad){
    if(confirm('¿Estás seguro de seguir con esto?')){
        console.log("Sigue bajo tu propio riesgo");
        if(edad>=18 && edad<=150){
            console.log("Ya puedes hacer lo que quieras mano")
        }else if( edad>150){
            console.log("Salúdame a los fantasmas");
        }else if(edad>=0){
            console.log("Eres un bb");
        }else{
            console.log("No existes carnal");
        }
    }else{
        console.log("Que miedoso");
    }
}


//Switch

function mandarMensajes(edad){
    switch(edad){
        case '13':
            console.log("Deberías estar en la secundaria");
            break;
        case '17':
            console.log("Espera un año más");
            break;
        default:
            console.log("UWU")
    }
}


let edad= prompt("Introduce tu edad");
if(edad && !isNaN(edad)){
    validarEdad(edad);
    mandarMensajes(edad);
} else{
    alert("Introduce una edad válida");
    location.reload();
}


////////////////////////////
// While
let boletosDisponibles= 100;

while(boletosDisponibles > 0){
    console.log("Boleto para el corona");
    boletosDisponibles--;
    console.log("Quedan: " + boletosDisponibles)
}

// do while

do{
    console.log("Boleto para el corona");
    boletosDisponibles--;
    console.log("Quedan: " + boletosDisponibles);

} while(boletosDisponibles>0);

///////////////////////////////////////////////////////7

//Try-catch finally

try{
    // código suceptible a falla
    throw "Orden 66";
} catch(error){
    console.error("ERROOOOOOOOOOOOR");
    console.warn(error)
} finally{
    console.warn("no existe");
}
