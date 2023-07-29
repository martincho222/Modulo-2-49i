let fechaDiv = document.querySelector("#fecha")
let horaDiv = document.querySelector("#hora")
let segundosDiv = document.querySelector("#segundos")
let minutosDiv = document.querySelector("#minutos")
let ampm = document.querySelector("#ampm")
let fecha = new Date();
let fechaActual = fecha;
let dia=""
let hora, segundos, minutos;

console.log(fechaActual)

fechaActual = fechaActual.toLocaleString("es-ES", {weekday:"long", day: "2-digit", month: "long", year: "numeric"});
let aux=fechaActual.split(" ");
aux[0]=aux[0].charAt(0).toUpperCase()+aux[0].slice(1)
aux[3]=aux[3].charAt(0).toUpperCase()+aux[3].slice(1)
fechaActual = aux.join(" ");

// fecha = fecha.toLocaleString();
hora = fecha.getHours();
segundos = fecha.getSeconds();
console.log(fecha)

const mostrarFecha = () => {
    fechaDiv.innerHTML = fechaActual
    setInterval(()=>{
        actualizarHora()
    },1000)

    
}

const actualizarHora = ()=>{
    let amPmCheck;
    let fechaUpdate = new Date();
    hora = fechaUpdate.getHours();
    segundos = fechaUpdate.getSeconds();
    minutos = fechaUpdate.getMinutes();
    if (hora>=12) {
        amPmCheck="PM"
    }
    else{
        amPmCheck="AM"
    }
    horaDiv.innerHTML=hora;
    segundosDiv.innerHTML=segundos;
    minutosDiv.innerHTML=minutos;
    ampm.innerHTML=amPmCheck;
}

mostrarFecha()

