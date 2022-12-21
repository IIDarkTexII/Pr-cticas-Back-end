interface UserInfo{
    nombre:string
    email:string
}

function printUserInfo(info:UserInfo){
    console.log(info)
    console.log(info.email)
}

const mama = {
    nombre:"Mine",
    email:"correo@innovaccion.mx",
    colorFavorito: "Blanco"
}

printUserInfo(mama)