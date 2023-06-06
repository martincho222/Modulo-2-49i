/*Tarea Number 1:
Usando métodos matemáticos, ingresar 3 números:
● Indicar cual es el mayor.
● Indicar cual es el menor.
● Obtener la raíz cuadrada del segundo número.
*/

let numero1 = prompt("Ingresa el primer numero");
let numero2 = prompt("Ingresa el segundo numero");
let mayorQue = numero1 <= numero2;

if (numero1 > numero2) {
    alert(numero1 + " es mayor que " + numero2);
} else if (numero1 < numero2) {
    alert(numero1 + " es menor que " + numero2);
} else {
    alert(numero1 + " y " + numero2 + " son iguales");
}

alert("La raiz cuadrada del segundo numero " + "(" + numero2 + ")" + " es " + Math.pow(numero2, 2))