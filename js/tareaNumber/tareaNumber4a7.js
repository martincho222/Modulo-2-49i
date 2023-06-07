// Tarea Number 4:
// Generar un número aleatorio entre 1 y 100 y mostrarlo en consola.
//
// Tarea Number 5:
// Solicitar al usuario que ingrese un número y mostrar en consola su valor absoluto.
//
// Tarea Number 6:
// Solicitar al usuario que ingrese un número y mostrar en consola su raíz cuadrada.
//
// Tarea Number 7:
// Solicitar al usuario que ingrese un número y mostrar en consola su potencia al cuadrado.

alert("voy a generarte un numero aleatorio entre 10 y 100");
let numeroAleatorio = Math.floor(Math.random() * 91) + 10;
let valorAbsoluto = Math.abs(numeroAleatorio);
let raizCuadrada = Math.sqrt(numeroAleatorio).toFixed(3);
let potencia = Math.pow(numeroAleatorio, 2);

alert("el numero aleatorio es " + numeroAleatorio + ". Su valor absoluto es " + valorAbsoluto + ". Su raíz cuadrada es " + raizCuadrada + ". Y elevado al cuadrado es " + potencia);
console.log("el numero aleatorio es " + numeroAleatorio + ". Su valor absoluto es " + valorAbsoluto + ". Su raíz cuadrada es " + raizCuadrada + ". Y elevado al cuadrado es " + potencia);