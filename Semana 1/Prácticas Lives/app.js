function moverPosicionRandom(elm){
    elm.style.position = 'absolute';
    elm.style.top=Math.random() * (window.innerHeight-elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth-elm.offsetWidth) + 'px';
}

let si= document.getElementById("si");
let no= document.getElementById("no");
let divmodosexo= document.getElementsByClassName("modosexo")[0];

no.addEventListener('mouseenter', function(e){moverPosicionRandom(e.target)});

si.addEventListener('click', function(e){alert('SABÍA QUE DIRÍAS QUE SI. CASÉMONOS YA BB ❤')});