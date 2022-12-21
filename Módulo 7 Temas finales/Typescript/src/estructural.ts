//Las definiciones en TypeScript son estructurales

// Esta es una definición nominal en JAVA
/*
public class Carro{
    String fabricante;
    String modelo;
    int año;
}

public class CarChecker{
    public static String printCar(Car car){

    }
}
Car myCar = new Carro();
CarChecker.printCar(mycar);
*/

class Carro {
    fabricante: string
    modelo: string
    año: number
    isElectric: boolean
}
class Traile{
    fabricante: string
    modelo: string
    año: number
    capacidad: number
}

const vehiculo ={
    fabricante: "Ford",
    modelo: "Fiesta",
    año: 2022
}

function printCar(car:{
    fabricante: string
    modelo: string
    año: number
}) {
    console.log(`${car.fabricante} ${car.modelo} ${car.año}`)
}

printCar(new Carro())
printCar(new Traile())
printCar(vehiculo)