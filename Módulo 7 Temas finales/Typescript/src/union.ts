//Le estamos diciendo a TypeScript que podemos recibir tanto números como strings

function printStatusCode(code: number|string){
    console.log(`Mi status code es: ${code}`)
}

printStatusCode(404)