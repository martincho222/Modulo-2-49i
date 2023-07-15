//Event Handlers

// let boton = document.getElementById('miBoton');

// function mostrarMensaje () {
//     console.log("Hiciste Click en el Boton");
// }

// boton.addEventListener("click", mostrarMensaje)


//Modelo de eventos de nivel superior
// function mostrarMensaje () {
//     alert("Hiciste Click en el Boton");
// }

//Modelo de eventos basado en objetos

// let boton = document.getElementById("miBoton");

// function mostrarMensaje () {
//     console.log("Hiciste Click en el Boton");
// }

// const finalizarSaludo = () => {
//     alert("Hasta pronto, gracias por participar")
// }

// boton.addEventListener("click", () => {
//     mostrarMensaje()
//     finalizarSaludo()
// })

//Tipos de Eventos

//click 

// let boton = document.getElementById("miBoton");

//click o dblclick
// const finalizarSaludo = () => {
//     alert("Hasta pronto, gracias por participar")
// }

// boton.addEventListener("click", finalizarSaludo)

//Evento de teclado (`keydown`, `keyup`, `keypress`)
// let input = document.getElementById("key");

// const finalizarSaludo = () => {
//     alert("Hasta pronto, gracias por participar")
// }

// input.addEventListener("keypress", finalizarSaludo)

//Evento de carga de página (`load`)

// window.addEventListener("load", () => {
//     alert("la pagina esta cargada")
// })


//Evento de cambio de valor (`change`)
// let formulario = document.getElementById("form")
// let input = document.getElementById("key");
// formulario.addEventListener("submit", (evento) => {
//     evento.preventDefault();
//     // console.log(evento);
// })

// input.addEventListener("change", (evento) => {
//     console.log(evento);
//     console.log(evento.target.value.length);
// })


//Evento de enfoque y desenfoque (`focus`, `blur`)
// input.addEventListener("focus", () => {
//     console.log("imprime por consola");
// })

// input.addEventListener("blur", () => {
//     console.log("imprime por consola");
// })

// let contenedor = document.getElementById("contenedor");
// let boton = document.getElementById("boton");

// function manejarContenedor(event) {
//     console.log(event);
//     // event.stopPropagation();
//     console.log("Evento Capturado por el contenedor");
// }

// function manejarBoton() {
//     console.log("Evento capturado en el boton");
// }
// contenedor.addEventListener("click", manejarContenedor);
// boton.addEventListener("click", manejarBoton)
