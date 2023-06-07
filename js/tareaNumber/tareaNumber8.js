// Tarea Number 8:
// Solicitar al usuario que ingrese un número y mostrar en consola si es positivo, negativo o cero.

let numero = parseFloat(prompt("Ingresa un numero por favor. Yo te diré si es positivo, negativo o cero"));

if (numero >= 1) {
    alert("El numero " + numero + " es un numero positivo");
} else if (numero === 0) {
    alert("El numero es 0");
} else if (numero <= -1) {
    alert("El numero " + numero + " es un numero negativo");
} else {
    alert("El numero es inválido");
}