let horaDiv = document.querySelector("#hora")
let segundosDiv = document.querySelector("#segundos")
let minutosDiv = document.querySelector("#minutos")
let miliSegundosDiv = document.querySelector("#milisegundos")
let hora, segundos, minutos, miliSegundos;
let contadorSegundos=document.getElementById("getSegundos");
let contadorMinutos=document.getElementById("getMinutos");
let contadorHora=document.getElementById("getHora");
let pausado=true;

let segundosF, minutosF;
let tiempoTotal;

let play = ()=>{
    contadorHora=document.getElementById("getHora");
    contadorSegundos=document.getElementById("getSegundos");
    contadorMinutos=document.getElementById("getMinutos");
    if(contadorMinutos.value < 0 || contadorSegundos.value < 0 || contadorHora.value < 0 || contadorMinutos.value >60 || contadorSegundos.value>60 || contadorHora.value > 24){
        alert("Debe ingresar un tiempo valido")
    }
    else{
            if(contadorHora.value == "" && contadorMinutos.value =="" && contadorSegundos.value=="" ){
                alert("Debe ingresar un tiempo valido")
            }
            else{
                horaDiv.innerHTML=contadorHora.value.padStart(2,"0");
                segundosDiv.innerHTML=contadorSegundos.value.padStart(2,"0");
                minutosDiv.innerHTML=contadorMinutos.value.padStart(2,"0");
                tiempoTotal= contadorHora.value*3600 +contadorMinutos.value*60+contadorSegundos.value*1;
                console.log(tiempoTotal);
                console.log(contadorHora.value);
                
                pausado=false;
                setInterval(()=>{
                    if(!pausado){
                        if(tiempoTotal>0){
                            tiempoTotal--
                            segundos=tiempoTotal%60;
                            minutos=parseInt(tiempoTotal/60);
                            hora = parseInt(tiempoTotal/3600)
                            segundosDiv.innerHTML=segundos.toString().padStart(2,"0");
                            minutosDiv.innerHTML=minutos.toString().padStart(2,"0");
                            horaDiv.innerHTML=hora.toString().padStart(2,"0");
                        } 
                    }
                },1000)
                document.getElementById("play").classList.add("d-none")
                document.getElementById("reset").classList.remove("d-none")
                document.getElementById("pausa").classList.remove("d-none")
                document.getElementById("finalizar").classList.remove("d-none")
            }
        
    }
}

let pausa = ()=>{
    pausado=true;
    document.getElementById("pausa").classList.add("d-none")
    document.getElementById("reanudar").classList.remove("d-none")    
}

let reset = ()=>{
    pausado=true;

    tiempoTotal=contadorHora*3600+contadorMinutos.value*60+contadorSegundos.value*1;
    horaDiv.innerHTML=contadorHora.value.padStart(2,"0");
    segundosDiv.innerHTML=contadorSegundos.value.padStart(2,"0");
    minutosDiv.innerHTML=contadorMinutos.value.padStart(2,"0");
    document.getElementById("reanudar").classList.remove("d-none")   
    document.getElementById("pausa").classList.add("d-none")
}

const reanudar = ()=>{
    pausado=false;
    document.getElementById("pausa").classList.remove("d-none")
    document.getElementById("reanudar").classList.add("d-none")   
}

const finalizar = ()=>location.reload()