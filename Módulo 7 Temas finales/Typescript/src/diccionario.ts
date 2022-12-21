// index signature

const telefonos = {
    casa: {
        pais:"+52",
        area: "552",
        numero: "1527721"
    },
    trabajo:{
        pais:"+1",
        area: "331",
        numero: "1527722"
    }
}
//typeScript
const telTypeScript:{
    [k:string]:{
        pais:string,
        area: string,
        numero: string
    }
} = {
    casa: {
        pais:"+52",
        area: "552",
        numero: "1527721"
    },
    trabajo:{
        pais:"+1",
        area: "331",
        numero: "1527722"
    }
}