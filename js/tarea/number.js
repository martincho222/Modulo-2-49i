// Tarea Number 1:
// Usando métodos matemáticos, ingresar 3 números:
// ● Indicar cual es el mayor.
// ● Indicar cual es el menor.
// ● Obtener la raíz cuadrada del segundo número.

// let num1 = prompt("Ingrese el primer número");
// let num2 = prompt("Ingrese el segundo número");
// let num3 = prompt("Ingrese el tercer número");

// let mayor = Math.max(num1, num2, num3);
// let menor = Math.min(num1, num2, num3);
// let raiz = Math.sqrt(num2);

// console.log(`De sus números ingresados, el mayor es: ${mayor} | El menor es: ${menor} | La raíz del segundo número es: ${raiz}`);

//  Tarea Number 2:
// Solicitar al usuario que ingrese dos números y mostrar en consola su suma.

// let num1 = parseInt(prompt("Ingrese el primer número"));
// let num2 = parseInt(prompt("Ingrese el segundo número"));
// let suma = num1 + num2;

// console.log("La suma de ambos números es:", suma);

//  Tarea Number 3:
// Solicitar al usuario que ingrese un número y mostrar en consola si es par o impar.

// let num1 = parseInt(prompt("Ingrese el primer número"));

// let resultado = num1 % 2 === 0 ? "Es par": "Es impar";
// console.log(resultado);

//  Tarea Number 4:
// Generar un número aleatorio entre 1 y 100 y mostrarlo en consola.

// let random = Math.random() * 100;
// console.log(Math.trunc(random));

//  Tarea Number 5:
// Solicitar al usuario que ingrese un número y mostrar en consola su valor absoluto.

// let num1 = parseInt(prompt("Ingrese un número"));
// console.log(`Su valor absoluto es ${Math.abs(num1)}`);

//  Tarea Number 6:
// Solicitar al usuario que ingrese un número y mostrar en consola su raíz cuadrada.

// let num1 = parseInt(prompt("Ingrese un número"));
// console.log(Math.trunc(Math.sqrt(num1)));

//  Tarea Number 7:
// Solicitar al usuario que ingrese un número y mostrar en consola su potencia al cuadrado.

// let num1 = parseInt(prompt("Ingrese un número"));
// console.log(Math.pow(num1, 2));

//  Tarea Number 8:
// Solicitar al usuario que ingrese un número y mostrar en consola si es positivo, negativo o cero.

// let num1 = parseInt(prompt("Ingrese un número"));
// console.log(num1 === 0 ? "Es cero": num1 >= 1 ? "Es positivo": "Es negativo");

//  Tarea Number 9:
// Solicitar al usuario que ingrese dos números y mostrar en consola el mayor de ellos.

// let num1 = parseInt(prompt("Ingrese un número"));
// let num2 = parseInt(prompt("Ingrese un número"));
// console.log(`${Math.max(num1, num2)} Es mayor`);

//  Tarea Number 10:
// Solicitar al usuario que ingrese un número y mostrar en consola si es entero o decimal.

// let num1 = parseInt(prompt("Ingrese un número"));
// console.log(num1 % 2 === 0 ? "Es un número Entero": "Es un número Decimal");

//  Tarea Number 11:
// Generar un número aleatorio entre dos valores ingresados por el usuario y mostrarlo en consola.

// let num1 = parseInt(prompt("Ingrese un número máximo"));
// let num2 = parseInt(prompt("Ingrese un número mínimo"));

// console.log(Math.floor((Math.random() * (num1 - num2 + 1)) + num2));