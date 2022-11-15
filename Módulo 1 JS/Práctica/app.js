

function moverPosicionRandom(elm){
    elm.style.position = 'absolute';
    elm.style.top=Math.random() * (window.innerHeight-elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth-elm.offsetWidth) + 'px';
}

let si= document.getElementById("si");
let no= document.getElementById("no");
let divmodosexo= document.getElementsByClassName("modosexo")[0];

no.addEventListener('mouseenter', function(e){moverPosicionRandom(e.target)});

si.addEventListener('click', function(e){
    alert('SABÍA QUE DIRÍAS QUE SI. CASÉMONOS YA BB ❤')
    divmodosexo.style.display='block';
});

divmodosexo.addEventListener('click', function(e){
    const img = document.createElement("img");
    img.src= "C:\Users\jaime rios\OneDrive - INSTITUTO TECNOLOGICO DE PUEBLA\Escritorio\Prácticas Back-end\Semana 1\Práctica\IMG\corazon.webp";
    console.log(img)
    divmodosexo.appendChild(img)
});

botones = document.getElementsByTagName('button')
console.log(botones)

window.addEventListener('beforeunload', (event)=>{
    event.preventDefault()
    event.returnValue= "";
});