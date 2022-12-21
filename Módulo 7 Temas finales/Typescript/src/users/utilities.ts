import { UserContactInfo } from "./types";  //Este es un alías porque definimos un tipo

function printContactInfo(info:UserContactInfo){
    console.log(info)
    console.log(info.email)
}

const mama = {
    nombre:"Mine",
    email:"correo@innovaccion.mx",
    colorFavorito: "Blanco"
}

printContactInfo(mama)