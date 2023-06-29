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
        8. Ejercicio if-else: Determinar el tipo de triángulo según sus lados.

*/


// Nivel de dificultad: Fácil
// 1. Ejercicio: Determinar si un número es positivo, negativo o cero.

const num1 = parseFloat(prompt("ingrese un numero"));
if (num1 > 0) {
    console.log("El numero es positivo");
}else if (num1 < 0) {
    console.log("El numero es negativo");
}else {
    console.log("El numero es 0");
}


// 2. Ejercicio: Determinar si un número es par o impar.

const num2 = parseInt(prompt("ingrese un numero"));
if (num2 % 2 === 0) {
    console.log("El numero es par");
}else {
    console.log("El número es impar");
}


// 3. Ejercicio: Verificar si un número es divisible por 3.

const num3 = parseInt(prompt("ingrese un numero"));
if (num3 % 3 === 0) {
    console.log("El número es divisible en 3");
}else {
    console.log("El número no es divisible en 3");
}


// Nivel de dificultad: Moderado
// 4. Ejercicio: Calcular el mayor de tres números.

const num3_1 = parseFloat(prompt("Ingrese un num1"))
const num3_2 = parseFloat(prompt("Ingrese un num2"))
const num3_3 = parseFloat(prompt("Ingrese un num3"))

if (num3_1 > num3_2) {
    if (num3_1> num3_3) {
        console.log("El mayor es", num3_1);
    }
} else if (num3_2 > num3_3) {
    console.log("El mayor es", num3_2);
} else{
        console.log("El mayor es", num3_3);
}


// 5. Ejercicio: Determinar si un año es bisiesto.

const año = parseInt(prompt("Ingrese un año"));
if (año % 4 === 0) {
    console.log("El año es bisiesto");
}
else {
    console.log("El año no es bisiesto");
}


// Nivel de dificultad: Difícil
// 6. Ejercicio: Ordenar tres números de forma ascendente.

const num6_1 = parseFloat(prompt("Ingrese un num"));
const num6_2 = parseFloat(prompt("Ingrese un num"));
const num6_3 = parseFloat(prompt("Ingrese un num"));

let menor, mayor, medio;

if (num6_1 < num6_2) {
    if (num6_1 < num6_3) {
        menor = num6_1;
        if (num6_2 < num6_3) {
            medio = num6_2;
            mayor = num6_3;
        }
        else {
            medio = num6_3;
            mayor = num6_2;
        }
    }
    else {
        menor = num6_3;
        medio = num6_1;
        mayor = num6_2;
    }
}
else {
    if (num6_2 < num6_3) {
        menor = num6_2;
        if (num6_1 < num6_3) {
            medio = num6_1;
            mayor = num6_3;
        }
        else {
            medio = num6_3;
            mayor = num6_1;
        }
    }
    else {
        menor = num6_3;
        medio = num6_2;
        mayor = num6_1;
    }
}
console.log(menor, medio, mayor);


// 7. Ejercicio: Calcular el descuento aplicable a una compra según el monto.

const monto = parseFloat(prompt("Ingrese el monto de la compra"));
if (monto >= 5000 && monto < 10000) {
    console.log("Usted obtiene un descuento del 5% igual a $", monto * 0.05);
}
else if (monto >= 10000 && monto < 20000) {
    console.log("Usted obtiene un descuento del 10% igual a $", monto * 0.1);
}
else if (monto >= 20000) {
    console.log("Usted obtiene un descuento del 15% igual a $", monto * 0.15);
}
else {
    console.log("Usted no tiene ningun descuento disponible");
}


// 8.  Ejercicio: Determinar el tipo de triángulo según sus lados.

const lado1 = parseFloat(prompt("Ingrese un lado del triangulo"));
const lado2 = parseFloat(prompt("Ingrese otro lado del triangulo"));
const lado3 = parseFloat(prompt("Ingrese otro lado del triangulo"));

if (lado1 === lado2) {
    if (lado1 === lado3) {
        console.log("El triangulo es equilatero");
    }
    else {
        console.log("El triangulo es isoceles");
    }
}
else {
    if (lado1 === lado3) {
        console.log("El triangulo es isoceles");
    }
    else {
        console.log("El triangulo es escaleno");
    }
}