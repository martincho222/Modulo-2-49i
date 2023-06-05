/*
Tarea Number 1:
Usando métodos matemáticos, ingresar 3 números:
● Indicar cual es el mayor.
● Indicar cual es el menor.
● Obtener la raíz cuadrada del segundo número.

Tarea Number 2:
Solicitar al usuario que ingrese dos números y mostrar en consola su suma.

Tarea Number 3:
Solicitar al usuario que ingrese un número y mostrar en consola si es par o impar.

Tarea Number 4:
Generar un número aleatorio entre 1 y 100 y mostrarlo en consola.

Tarea Number 5:
Solicitar al usuario que ingrese un número y mostrar en consola su valor absoluto.

Tarea Number 6:
Solicitar al usuario que ingrese un número y mostrar en consola su raíz cuadrada.

Tarea Number 7:
Solicitar al usuario que ingrese un número y mostrar en consola su potencia al cuadrado.

Tarea Number 8:
Solicitar al usuario que ingrese un número y mostrar en consola si es positivo, negativo o cero.

Tarea Number 9:
Solicitar al usuario que ingrese dos números y mostrar en consola el mayor de ellos.

Tarea Number 10:
Solicitar al usuario que ingrese un número y mostrar en consola si es entero o decimal.

Tarea Number 11:
Generar un número aleatorio entre dos valores ingresados por el usuario y mostrarlo en consola.
*/

// ejercicio 1

let num1 = prompt("Ingrese el num 1.");
let num2 = prompt("Ingrese el num 2.");
let num3 = prompt("Ingrese el num 3.");

console.log("El menor de", num1, num2, num3, "es", Math.min(num1, num2, num3));
console.log("El mayor de", num1, num2, num3, "es", Math.max(num1, num2, num3));
console.log("La raiz cuadrada de", num2, "es", Math.sqrt(num2));

// ejercicio 2

num1 = prompt("Ingrese el num 1.");
num2 = prompt("Ingrese el num 2.");

console.log("La suma entre", num1, "y", num2, "es", parseInt(num1) + parseInt(num2));

// ejercicio 3

num1 = parseInt(prompt("Ingrese el num."));
if (num1 % 2 == 0) {
  console.log("El numero", num1, "es par");
} else {
  console.log("El numero", num1, "es impar");
}

// ejercicio 4

numAleatorio = Math.floor(Math.random() * 100) + 1;
console.log("El numero aleatorio entre 1 y 100 es", numAleatorio);

// ejercicio 5

num1 = prompt("Ingrese un num.");
console.log("El valor absoluto de", num1, "es", Math.abs(num1));

// ejercicio 6

num1 = prompt("Ingrese un num.");
console.log("La raiz cuadrada de", num1, "es", Math.sqrt(num1));

// ejercicio 7

num1 = prompt("Ingrese un num.");
console.log(num1, "Elevado al cuadrado es:", Math.pow(num1, 2));

// ejercicio 8

num1 = prompt("Ingrese un num.");

if (num1 > 0) {
  console.log("El número es positivo");
} else if (num1 < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

// ejercicio 9

num1 = prompt("Ingrese el num 1.");
num2 = prompt("Ingrese el num 2.");

console.log("El mayor entre", num1, "y", num2, "es", Math.max(num1, num2));

// ejercicio 10

num1 = parseFloat(prompt("Ingresa el num."));

if (Number.isInteger(num1)) {
  console.log("El número es entero");
} else {
  console.log("El número es decimal");
}

// ejercicio 11

num1 = parseInt(prompt("Ingrese el num 1."));
num2 = parseInt(prompt("Ingrese el num 2."));

numAleatorio = Math.floor(Math.random() * (Math.max(num1, num2) - Math.min(num1, num2) + 1)) + Math.min(num1, num2);

console.log("El numero aleatorio entre", num1, "y", num2, "es", numAleatorio);
