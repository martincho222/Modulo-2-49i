/*
    Nivel de dificultad: Fácil

        1. Ejercicio bucles: Imprimir los números del 1 al 10.
        2. Ejercicio bucles: Imprimir los números pares del 1 al 20.
        3. Ejercicio bucles: Imprimir los números impares del 1 al 15.
        4. Ejercicio bucles: Calcular la suma de los primeros 50 números enteros positivos.

    Nivel de dificultad: Moderado

        5. Ejercicio bucles: Imprimir la tabla de multiplicar del 5 (del 5 al 50).
        6. Ejercicio bucles: Imprimir los caracteres de un string en orden inverso.
        7. Ejercicio bucles: Calcular el factorial de un número dado (por ejemplo, 5! = 5 x 4 x 3 x 2 x 1).

    Nivel de dificultad: Difícil

        8. Ejercicio bucles: Imprimir los números primos del 1 al 50.
        9. Ejercicio bucles: Imprimir los elementos de un array de números.
        10. Ejercicio bucles: Calcular la suma de los dígitos de un número entero positivo.
        11. Ejercicio bucles: Imprimir una serie numérica especial: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...

    Nivel de dificultad: Experto

        12. Ejercicio bucles: Calcular el número de dígitos de un número entero.
        13. Ejercicio bucles: Imprimir una serie numérica especial: 1, -2, 3, -4, 5, -6, 7, -8, 9, -10, ...
        14. Ejercicio bucles: Calcular la suma de los dígitos pares de un número entero positivo.
*/


//  Nivel de dificultad: Fácil
//  1. Ejercicio: Imprimir los números del 1 al 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//  2. Ejercicio: Imprimir los números pares del 1 al 20.

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//  3. Ejercicio: Imprimir los números impares del 1 al 15.

for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


//  4. Ejercicio: Calcular la suma de los primeros 50 números enteros positivos.

function suma() {
    let suma = 0;
    for (let i = 0; i <= 50; i++) {
        suma += i;
    }
    console.log(suma);
}
suma();


//  Nivel de dificultad: Moderado
//  5. Ejercicio: Imprimir la tabla de multiplicar del 5 (del 5 al 50).

for (let i = 1; i <= 10; i++) {
    console.log("5 x", i, "=", 5 * i);
}


// 6. Ejercicio: Imprimir los caracteres de un string en orden inverso.

let cadena = prompt("Ingrese una cadena de texto");
let cadenaIvertida = cadena.split("").reverse().join("");
console.log(cadenaIvertida);


// 7. Ejercicio: Calcular el factorial de un número dado (por ejemplo, 5! = 5 x 4 x 3 x 2 x 1).

const num = parseInt(prompt("Ingrese un numero"));
let factorial = 1;
if(num > 1){
    for (let i = num; i > 0; i--) {
        factorial = factorial * i;
    }
    console.log("El factorial de ", num, " es ", factorial);
} else if(num === 1 || num === 0){
    console.log("El factorial de ", num, " es ", factorial);
} else{
    console.log("Numero ingresado no valido")
}


// Nivel de dificultad: Difícil
// 8. Ejercicio: Imprimir los números primos del 1 al 50.

const numPrimo = parseInt(prompt("Ingrese un numero"));
let esPrimo = true;
for (let i = 2; i < numPrimo; i++) {
    if (numPrimo % i === 0) {
        esPrimo = false;
        break;
    }
}
if (esPrimo === true) {
    console.log("El número es primo");
}
else {
    console.log("El número no es primo");
}


// 9. Ejercicio: Imprimir los elementos de un array de números.

const arrayNumeros = [12, 23, 43, 54, 6, 1];
for (let i = 0; i < arrayNumeros.length; i++) {
    console.log("Posición", i, ": valor:", arrayNumeros[i]);
}


// 10. Ejercicio: Calcular la suma de los dígitos de un número entero positivo.

let band = 0;
let numero10 = prompt("ingrese un numero entero positivo");
let arregloNumero10;
let suma10 = 0;

while (band === 0) {
    if (Number.isInteger(numero10 * 1) && numero10 > 0) {
        band = 1;
    }
    else {
        numero10 = prompt("El numero debe ser entero y positivo, vuelva a ingresar un número valido");
    }
}
arregloNumero10 = numero10.split("");

for (let i = 0; i < arregloNumero10.length; i++) {
    suma10 += parseInt(arregloNumero10[i]);
}
console.log("La suma de los digitos del número ingresado es ", suma10);


// 11. Ejercicio: Imprimir una serie numérica especial: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...

const numero11 = parseInt(prompt("Ingrese el número final de la serie a mostrar"));
let serie = "";

for (let i = 1; i <= numero11; i++) {
    if (i === numero11) {
        for (let index = 1; index <= i; index++) {
            if (index === i) {
                serie = serie.concat(i);
            }
            else {
                serie = serie.concat(i, ",");
            }
        }
    }
    else {
        for (let index = 1; index <= i; index++) {
            serie = serie.concat(i, ",");
        }
    }
}
console.log(serie);
    

// Nivel de dificultad: Experto
// 12. Ejercicio: Calcular el número de dígitos de un número entero.

const numero12 = prompt("Ingrese un número");
let bandera12 = 0;
while (bandera12 === 0) {

    if (Number.isInteger(numero12 * 1) && numero12 > 0) {
        bandera12 = 1;
    }
    else {
        numero12 = prompt("El numero debe ser entero y positivo, vuelva a ingresar un número valido");
    }
}
const arregloNumero = numero12.split("");
console.log("El número ingresado posee ", arregloNumero.length, " digitos");


// 13. Ejercicio: Imprimir una serie numérica especial: 1, -2, 3, -4, 5, -6, 7, -8, 9, -10, ...

const numero13 = parseInt(prompt("Ingrese el número final de la serie a mostrar"));
for (let i = 1; i <= numero13; i++) {
    if (i % 2 === 0) {
        console.log(i * (-1));
    }
    else {
        console.log(i);
    }
}


// 14. Ejercicio: Calcular la suma de los dígitos pares de un número entero positivo.

const numero14 = prompt("Ingrese un número");
let bandera14 = 0;
let suma14 = 0;
while (bandera14 === 0) {
    if (Number.isInteger(numero14 * 1) && numero14 > 0) {
        bandera14 = 1;
    }
    else {
        numero14 = prompt("El numero debe ser entero y positivo, vuelva a ingresar un número valido");
    }
}
let arreglonumero14 = numero14.split("");
for (let i = 0 ; i < arreglonumero14.length ; i++) {
    if (parseInt(arreglonumero14[i]) % 2 === 0) {
        suma14 += parseInt(arreglonumero14[i]);
    }
}
console.log("La suma de los digitos pares del numero ingresado es", suma14);

