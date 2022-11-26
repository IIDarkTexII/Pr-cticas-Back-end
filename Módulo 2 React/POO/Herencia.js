class Animales{
    
    #especie = "Felis Catus" //Es un atributo privado y solo se puede usar en la clase no en la herencia

    constructor(nombre, edad){
        this.nombre= nombre;
        this.edad=edad;
    }

    canta(){
        return `${this.nombre} puede cantar`;
    }
    correr(){
        return `${this.nombre} puede correr`;
    }

    getespecie(){
        return this.#especie; //Encapsulamiento
    }
}

class Gatos extends Animales{
    constructor(nombre,edad,colorBigotes){
        super(nombre,edad);
        this.colorBigotes=colorBigotes;
    }

    bigotes(){
        return `Tengo bigotes color ${this.colorBigotes}`
    }

    anios(){
        return `Tengo ${this.edad} años`
    }

    especiegato(){
        return `Soy un ${this.getespecie()}`
    }
}

let animal= new Animales("gato", 5);
let gato= new Gatos("gato", 5, "blanco");
console.log(gato.bigotes());
console.log(gato.anios());
console.log(gato.especiegato());

