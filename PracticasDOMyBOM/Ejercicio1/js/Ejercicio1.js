/*
1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/
let numeroMagico;
let botonComenzar = document.getElementById("button1");
let inputNumero = document.getElementById("inputNumero");
let botonEnviar = document.getElementById("button2");

function generarNumeroAleatorio() {
  numeroMagico = Math.floor(Math.random() * 100) + 1;
  console.log(numeroMagico);
  botonEnviar.disabled = false;
  inputNumero.value = '';
}

function adivinar() {
  let numeroIngresado = parseInt(inputNumero.value);

  if (numeroIngresado === numeroMagico) {
    alert("¡Adivinaste el número!");
    botonEnviar.disabled = true;
  } else if (numeroIngresado < numeroMagico) {
    alert("El número que ingresaste es menor al número mágico.");
  } else {
    alert("El número que ingresaste es mayor al número mágico.");
  }
}

botonComenzar.addEventListener("click", generarNumeroAleatorio);
botonEnviar.addEventListener("click", adivinar);