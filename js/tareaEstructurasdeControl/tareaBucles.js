// Bucles:

//  Nivel de dificultad: Fácil
// 1- Ejercicio bucles: Imprimir los números del 1 al 10. LISTO
// 2- Ejercicio bucles: Imprimir los números pares del 1 al 20. LISTO
// 3- Ejercicio bucles: Imprimir los números impares del 1 al 15. LISTO
// 4- Ejercicio bucles: Calcular la suma de los primeros 50 números enteros positivos. LISTO

//  Nivel de dificultad: Moderado
// 5- Ejercicio bucles: Imprimir la tabla de multiplicar del 5 (del 5 al 50). LISTO
// 6- Ejercicio bucles: Imprimir los caracteres de un string en orden inverso. LISTO
// 7- Ejercicio bucles: Calcular el factorial de un número dado LISTO
// (por ejemplo, 5! = 5 x 4 x 3 x 2 x 1).

//  Nivel de dificultad: Difícil
// 8- Ejercicio bucles: Imprimir los números primos del 1 al 50.
// 9- Ejercicio bucles: Imprimir los elementos de un array de números.
// 10- Ejercicio bucles: Calcular la suma de los dígitos de un número entero positivo.
// 11- Ejercicio bucles: Imprimir una serie numérica especial: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...

//  Nivel de dificultad: Experto
// 12- Ejercicio bucles: Calcular el número de dígitos de un número entero.
// 13- Ejercicio bucles: Imprimir una serie numérica especial: 1, -2, 3, -4, 5, -6, 7, -8, 9, -10, ...
// 14- Ejercicio bucles: Calcular la suma de los dígitos pares de un número entero positivo.

// / ------RESUELTOS------

// 1- Ejercicio bucles: Imprimir los números del 1 al 10.

// let numero = 1;
// while (numero <= 10) {
//     console.log(`${numero}`)
//     numero++
// }

// 2- Ejercicio bucles: Imprimir los números pares del 1 al 20.

// let numero = 2;
// do {
//     console.log(numero);
//     numero += 2
// } while (numero <= 20 && numero % 2 === 0);

// 3- Ejercicio bucles: Imprimir los números impares del 1 al 15.

// let numero = 1;
// do {
//     console.log(numero);
//     numero += 2
// } while (numero <= 15 && numero % 2 !== 0);

// 4- Ejercicio bucles: Calcular la suma de los primeros 50 números enteros positivos.

// let numero1 = 1;
// let numero2 = 2;
// let resultado;

// do {
//     resultado = numero1 + numero2;
//     console.log(`${numero1} + ${numero2} = ${resultado}`);
//     numero1 += 1;
//     numero2 += 1;
// } while (numero2 <= 50);

// 5- Ejercicio bucles: Imprimir la tabla de multiplicar del 5 (del 5 al 50).

// let numero1 = 5;
// let numero2 = 1;
// let resultado = 0;

// while (resultado < 50) {
//     resultado = numero1 * numero2;
//     console.log(`${numero1} x ${numero2} = ${resultado}`)
//     numero2 += 1;
// }

// 6- Ejercicio bucles: Imprimir los caracteres de un string en orden inverso.

// let palabra = prompt(`Ingresa una palabra y se imprimirán las letras`);
// let numero1 = 0;
// let numero2 = 1;
// let palabraInvertida = palabra.split('').reverse().join('');

// while (numero1 <= palabra.length) {

//     console.log(palabraInvertida.slice(numero1, numero2));
//     numero1++;
//     numero2++;
// }

// 7- Ejercicio bucles: Calcular el factorial de un número dado
// (por ejemplo, 5! = 5 x 4 x 3 x 2 x 1).

// let numero = prompt("Ingresa un número y te diré su factorial:");
// let contador = numero;
// let resultado = 1;

// do {
//     resultado *= contador;
//     contador--;
// } while (contador > 0);

// console.log(`El factorial de ${numero} es: ${resultado}`);