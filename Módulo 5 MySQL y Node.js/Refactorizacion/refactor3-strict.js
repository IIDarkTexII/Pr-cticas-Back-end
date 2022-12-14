//use strict
'use strict'
let varibleNoDeclarada=10;
console.log(varibleNoDeclarada); 
//Esta variable no está declarada y debería mandar un error


/**
 * 
 */
function funcionEstricta(){
    'use strict'
    let varibleNoDeclarada="Estricta";
    console.log(varibleNoDeclarada);
}


function funcionNoEstricta(){
    varibleNoDeclarada="No estricta";
    console.log(varibleNoDeclarada);
}

funcionNoEstricta();
funcionEstricta();