//Typescript es compilado

function timeOut(n:number){
    return new Promise((res=>setTimeout(res, n)))
}

export async function suma(a:number, b: number){
    await timeOut(1000)
    return a+b
}

export declare function suma2(a:number, b:number):Promise<number>;


;(async ()=>{
    console.log(await suma(3,4))
})()