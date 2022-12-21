// Una clase abstracta se usa como base para otras clases
// Es como la interfaz pero podemos meterle funcionalidad
/**
 * Este código define una clase abstracta llamada "Poligono" que tiene un método abstracto llamado "getArea". Esto significa que la clase "Poligono" es una plantilla para otras clases que deben implementar el método "getArea" para poder ser utilizadas.

La clase "Rectangulo2" es una subclase de "Poligono" y, por lo tanto, tiene que implementar el método "getArea". La clase "Rectangulo2" tiene dos atributos protegidos llamados "ancho" y "alto" que son inicializados en su constructor. El método "getArea" de la clase "Rectangulo2" devuelve el área del rectángulo multiplicando el alto por el ancho.

Es importante tener en cuenta que no se puede crear una instancia de una clase abstracta directamente, sino que se debe crear una subclase que implemente todos los métodos abstractos de la clase abstracta.
 */
abstract class Poligono {
    public abstract getArea():number;
}

class Rectangulo2 extends Poligono{
    public constructor(protected readonly ancho:number, protected readonly alto:number){
        super()
    }

    public getArea(): number {
        return this.alto * this.ancho
    }
}