// Tarea Number 10:
// Solicitar al usuario que ingrese un número y mostrar en consola si es entero o decimal.

let numero = parseFloat(prompt("ingresa un numero, yo te diré si es entero o decimal"));

if (numero === Math.floor(numero)) {
    alert("El número es entero");
} else {
    alert("El número es decimal");
}