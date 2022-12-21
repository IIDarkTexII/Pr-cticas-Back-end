interface Figura{
    getArea:()=>number;
}

class Rectangulo implements Figura{

    //protected significa que el ancho solo se puede usar en esa clase
    public constructor(protected readonly ancho:number, protected readonly alto:number){}

    public getArea(): number{
        return this.ancho * this.alto
    }

    public toString():string{
        return `Rectángulo con ancho de ${this.ancho} y alto de ${this.alto} `
    }
}

class Cuadrado extends Rectangulo{
    public constructor(ancho:number){
        super(ancho,ancho)
    }

    public override toString(): string {
        return `Cuadrado con lados de ${this.ancho} `
    }
}

let cuadro = new Cuadrado(5)

console.log(cuadro.toString())