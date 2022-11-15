let encabezados = "";


window.onclick= function(){
    //Crea una serie de elements por cada tag encontrado
    let encabezados = document.createElement("h1")
    const texto = document.createTextNode("Quieres ser mi morrita?");

    encabezados.appendChild(texto);
    document.body.appendChild(encabezados);
}

