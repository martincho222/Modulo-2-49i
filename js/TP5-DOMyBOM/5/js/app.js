let horaDiv = document.querySelector("#hora")
let segundosDiv = document.querySelector("#segundos")
let minutosDiv = document.querySelector("#minutos")
let miliSegundosDiv = document.querySelector("#milisegundos")

let hora, segundos, minutos, miliSegundos;
let contadorMiliSegundos=0;
let contadorSegundos=0;
let contadorMinutos=0;
let pausado=true;


segundos = setInterval(()=>{
    if(!pausado){
        contadorSegundos++
        segundosDiv.innerHTML=(contadorSegundos%60).toString().padStart(2,"0");;
        
    }
},1000)

miliSegundos = setInterval(()=>{
    if(!pausado){
        contadorMiliSegundos++
        miliSegundosDiv.innerHTML=(contadorMiliSegundos%60).toString().padStart(2,"0");;
    }

},10)

minutos = setInterval(()=>{
    if(!pausado){
        contadorMinutos++
        minutosDiv.innerHTML=(contadorMinutos%60).toString().padStart(2,"0");

    }
},60000)

let play = ()=>pausado=false;
let pausa = ()=>pausado=true;
let reset = ()=>{
    pausado=true;
    contadorMiliSegundos=0;
    contadorSegundos=0;
    contadorMinutos=0;
    miliSegundosDiv.innerHTML="00";
    segundosDiv.innerHTML="00";
    minutosDiv.innerHTML="00    "
    horaDiv.innerHTML="00";
}


