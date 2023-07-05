/*
    Nivel de dificultad: Fácil

        1. Ejercicio if-else: Determinar si un número es positivo, negativo o cero.
        2. Ejercicio if-else: Determinar si un número es par o impar.
        3. Ejercicio if-else: Verificar si un número es divisible por 3.

    Nivel de dificultad: Moderado

        4. Ejercicio if-else: Calcular el mayor de tres números.
        5. Ejercicio if-else: Determinar si un año es bisiesto.

    Nivel de dificultad: Difícil

        6. Ejercicio if-else: Ordenar tres números de forma ascendente.
        7. Ejercicio if-else: Calcular el descuento aplicable a una compra según el monto.
        8.  Ejercicio if-else: Determinar el tipo de triángulo según sus lados.

*/

// EJERCICIO 1
// let x = prompt("Ingrese un numero")

// if (x > 0) {
//     console.log("El numero es positivo");
// }
// else if (x < 0) {
//     console.log ("El numero es negativo");
// }
// else {
//     console.log("El numero es cero");
// }

// EJERCICIO 2
// let numero = parseFloat(prompt("Ingrese un numero")); 

// if (numero % 2 === 0 ){
//     console.log("El numero es par");
// }
// else{
//     console.log("El numero es impar");
// }

// EJERCICIO 3
// let numero = parseFloat(prompt("Ingrese un numero"));

// if (numero % 3 === 0) {
//     console.log("El numero es divisible en 3");
// }
// else {
//     console.log("El numero no es divisible en 3");
// }

// EJERCICIO 4
// let num1 = parseFloat (prompt("Ingrese un numero"));
// let num2 = parseFloat(prompt("Ingrese un segundo numero"));
// let num3 = parseFloat(prompt ("Ingrese un tercer numero"));

// if (num1 > num2 && num1 > num3){
//     console.log("El primer numero es el mayor");
// }
// else if (num2 > num1 && num2 > num3){
//     console.log("El segundo numero es el mayor");
// }
// else if (num3 > num1 && num3 > num2){
//     console.log("El tercer numero es el mayor");
// }
// else{
//     console.log("Algun numero es invalido");
// }

// EJERCICIO 5
// let año = parseFloat (prompt("Ingrese el año"));

// if (año%4 === 0) {
//     console.log("El año es bisiesto");
// }
// else {
//     console.log("El año no es bisiesto");
// }

// EJERCICIO 6
// let num1 = parseFloat (prompt("Ingrese un primer numero"));
// let num2 = parseFloat (prompt("Ingrese un segundo numero"));
// let num3 = parseFloat (prompt("Ingrese un tercer numero")); 

// if (num1 > num2 && num1 > num3) {
//     if (num2 > num3) {
//         console.log(num1, num2, num3);
//     }
// }
// else if (num3 > num2) {
//     console.log(num1,num3,num2); 
// }
// else if (numero2 > numero1 && numero2 > numero3) {
//         if (numero1 > numero3) {
//             console.log(num2,num1,num3)
//         } else if (numero3 > numero1) {
//            console.log(num2,num3,num1)
//         }
//     } else if (numero3 > numero1 && numero3 > numero2) {
//         if (numero1 > numero2) {
//             console.log(num3,num1,num2)
//         } else if (numero2 > numero1) {
//            console.log(num3,num2,num1)
//         }
//     }


// EJERCICIO 7
// let montoCompra= parseFloat (prompt ("Ingrese el monto total de compra"));

// if (montoCompra >= 15000 && montoCompra < 30000) {
//     console.log("Ud tiene un descuento del 15%: ",(montoCompra - montoCompra * 0.15), "precio total");
// }
// else if (montoCompra >= 30000) {
//     console.log("Ud. tiene un descuento del 20%: ",(montoCompra - montoCompra * 0.20), "precio total");
// }
// else {
//     console.log("Ud no tiene ningun descuento");
// }

// EJERCICIO 8
// let lado1 = prompt ("Ingrese la medida del lado 1");
// let lado2 = prompt ("Ingrese la medida del lado 2");
// let lado3 = prompt ("Ingrese la medida del lado 3");

// if (lado1 === lado2 && lado2 === lado3){
//     console.log("El triangulo es equilatero"); 
// }
// else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
//     console.log("El triangulo es isosceles");

// }
// else {
//     console.log("El triangulo es escaleno");
// }