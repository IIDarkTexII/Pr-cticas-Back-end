interface Animal{
    isAlive: boolean
}
//Con el extends PODEMOS usar lo que esté ahí dentro
interface Mamifero extends Animal{
    getColorPelo(pelo:string):string
}

interface Perro extends Mamifero{
    getEspecie():string
}

function acariciarAnimal(dog:Perro){
    dog.getColorPelo("cafe")
}

//Con el extends DEBEMOS usar lo que esté ahí dentro

class Gato implements Mamifero{

    isAlive: boolean;
    maullar(){
        return "miau"
    }

    getColorPelo(pelo:string){
        return pelo
    }
}