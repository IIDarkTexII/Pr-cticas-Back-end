// En JavaScript

let carro={
    fabricante:"Toyota",
    modelo:"Prius",
    año:2022
}

// En TypeScript

let carroType:{
    fabricante: string,
    modelo:string,
    año:number
}

function getCar(car:{
    fabricante: string,
    modelo:string,
    año:number,
    color?:string //Este campo es opcional
}) {

    let str= ""

    if(typeof car.color ===undefined){
        str=`${car.fabricante} ${car.modelo} ${car.año} `
    }
    else
        str=`${car.fabricante} ${car.modelo} ${car.año} ${car.color}`

    console.log(str)
}

getCar(carro)
