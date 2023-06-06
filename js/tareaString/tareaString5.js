/*Tarea 5
Solicitar al usuario que ingrese una cadena y un número, y mostrar en consola la cadena truncada en la posición del número ingresado.*/

let texto = prompt("Ingresa un texto");
let numero = prompt("Ingresa un numero");
let textoTruncado = texto.slice(0, numero);
alert(textoTruncado);