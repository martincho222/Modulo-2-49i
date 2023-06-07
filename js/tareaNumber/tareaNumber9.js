// Tarea 9
// Solicitar al usuario que ingrese dos números y mostrar en consola el mayor de ellos.

alert("Te pediré dos numeros y te dire cual es el mayor");
let numero1 = parseFloat(prompt("ingresa el primer numero"));
let numero2 = parseFloat(prompt("ingresa el segundo numero"));

if (numero1 > numero2) {
    alert("El numero " + numero1 + " es mayor");
} else if (numero2 > numero1) {
    alert("El numero " + numero2 + " es mayor");
} else if (numero1 === numero2) {
    alert("Ambos numeros son iguales");
} else {
    alert("El numero es inválido");
}