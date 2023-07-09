// objeto window

// console.log(window.navigator.userAgent);

// console.log(window.location);


// console.log(window.screen.width);
// console.log(window.screen.height);
// console.log(window.screen.colorDepth);


//Funciones de tiempo

//setInterval

// const intervalID = setInterval(function(){
//     console.log("Ejecutando la funcion")
// }, 2000)

// //clearInterval

// clearInterval(intervalID)

//setTimeout

// setTimeout(() => {
//     clearInterval(intervalID)
// }, 8000)


//Date

// const fechaActual = new Date();
// console.log(fechaActual);
// console.log(fechaActual.getFullYear());
// console.log(fechaActual.getMonth() + 1);
// console.log(fechaActual.getDate());
// console.log(`hoy es: ${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`);

//getTime()

// const fecha = new Date();

// console.log(fecha.getTime());

// const fechaInicio = new Date('2022-01-01')
// const fechaFinal = new Date('2022-12-31');
// const tiempoTranscurrido = fechaFinal.getTime() - fechaInicio.getTime();
// console.log(tiempoTranscurrido);

//toLocaleDateString

// const fecha = new Date();
// console.log(fecha);

// const fechaFormateada = fecha.toLocaleDateString();
// console.log(fechaFormateada);

// obtener la ubicacion geografica del usuario

// if('geolocation' in navigator){
//     window.navigator.geolocation.getCurrentPosition((position) => {
//         console.log(position)
//         console.log('Latitud', position.coords.latitude);
//         console.log('Longitud', position.coords.longitude);
//     })
// } else {
//     alert('No se ha podido encontrar su localizacion, intentelo de nuevo.')
// }

// document.write("<h1>Hola a todos</h1>")


// document.write("<h1>Lo sobreescribe</h1>")

//redirigir a una nueva url despues de un cierto tiempo
// let tiempo= 0;

// setInterval(() => {
//     tiempo++
//     console.log(tiempo);
// }, 1000);

// setTimeout(()=>{
//     window.location.href = "https://www.google.com";
// }, 5000)
//sintaxis de setTimeout
// setTimeout(() => {
    
// }, timeout);

console.log(window.history.forward());



