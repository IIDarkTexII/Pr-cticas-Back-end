// Mi promesa
/**
 * No toma ningún argumento y siempre devuelve la cadena "Algo"
 * @returns {String} Algo
 */
function miFuncion(){
    return "Algo";
}

miFuncion()
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log(error);
    });

//Forma eficiente 
//Async_/await

try {
    const data = await miFuncion()
    console.log(data)
} catch (error) {
    console.log("Error")
}