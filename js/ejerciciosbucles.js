/*
Nivel de dificultad: Fácil
1- Ejercicio bucles: Imprimir los números del 1 al 10.
2- Ejercicio bucles: Imprimir los números pares del 1 al 20.
3- Ejercicio bucles: Imprimir los números impares del 1 al 15.
4- Ejercicio bucles: Calcular la suma de los primeros 50 números enteros positivos.

Nivel de dificultad: Moderado
5- Ejercicio bucles: Imprimir la tabla de multiplicar del 5 (del 5 al 50).
6- Ejercicio bucles: Imprimir los caracteres de un string en orden inverso.
7- Ejercicio bucles: Calcular el factorial de un número dado
(por ejemplo, 5! = 5 x 4 x 3 x 2 x 1).

Nivel de dificultad: Difícil
8- Ejercicio bucles: Imprimir los números primos del 1 al 50.
9- Ejercicio bucles: Imprimir los elementos de un array de números.
10- Ejercicio bucles: Calcular la suma de los dígitos de un número entero positivo.
11- Ejercicio bucles: Imprimir una serie numérica especial: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...

Nivel de dificultad: Experto
12- Ejercicio bucles: Calcular el número de dígitos de un número entero.
13- Ejercicio bucles: Imprimir una serie numérica especial: 1, -2, 3, -4, 5, -6, 7, -8, 9, -10, ...
14- Ejercicio bucles: Calcular la suma de los dígitos pares de un número entero positivo.
*/

// ejercicio 1

for (let i = 1; i < 11; i++) {
  console.log(`Número: ${i}`);
}

// ejercicio 2

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(`${i} es un numero par`);
  }
}

// ejercicio 3

for (let i = 1; i < 16; i++) {
  if (i % 2 === 1) {
    console.log(`${i} es un numero impar`);
  }
}

// ejercicio 4

let acumulador = 0;

for (let i = 1; i < 51; i++) {
  acumulador += i;
}

console.log(`La suma de los 50 primeros enteros positivos es ${acumulador}`);

// ejercicio 5

let j = 1;
for (let i = 1; i < 51; i++) {
  if (i % 5 === 0) {
    console.log(`5 x ${j} = ${i}`);
    j++;
  }
}

// ejercicio 6

const texto = prompt("Ingrese una cadena");

for (let i = texto.length - 1; i >= 0; i--) {
  console.log(texto[i]);
}

// ejercicio 7

let numero = parseInt(prompt("Ingrese un numero (max. 14)"));
let factorial = 1;

if (numero > 0 && numero <= 14) {
  for (let i = 1; i < numero + 1; i++) {
    factorial *= i;
  }
} else {
  console.log("No es posible calcular el factorial de dicho numero");
}

console.log(factorial);

// ejercicio 8

for (let numero = 2; numero <= 50; numero++) {
  let esPrimo = true;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }

  if (esPrimo) {
    console.log(numero + " es primo");
  }
}

// ejercicio 9

let arrayNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arrayNumerico.length; i++) {
  console.log(`Elemento [${i}] = ${arrayNumerico[i]}`);
}

// ejercicio 10

numero = parseInt(prompt("Ingrese un numero entero positivo"));
let sumador = 0;
let aux = numero;
let ultDig = 0;

if (numero > 0) {
  while (aux > 0) {
    ultDig = aux % 10;
    sumador += ultDig;
    aux = parseInt(aux / 10);
  }
  console.log(`La suma de los digitos de ${numero} es ${sumador}`);
} else {
  console.log(`El numero ingresado (${numero}) es incorrecto`);
}

// ejercicio 11

numero = parseInt(prompt("Ingrese la cantidad de numeros especiales (max. 20)"));

if (numero < 21) {
  for (let i = 1; i <= numero; i++) {
    for (let j = 0; j < i; j++) {
      console.log(i);
    }
  }
} else {
  console.log(`El numero ingresado (${numero}) es incorrecto`);
}

// ejercicio 12

numero = parseInt(prompt("Ingrese un numero entero positivo"));
sumador = 0;
aux = numero;
ultDig = 0;

if (numero > 0) {
  while (aux > 0) {
    ultDig = aux % 10;
    sumador++;
    aux = parseInt(aux / 10);
  }
  console.log(`El numero de digitos de ${numero} es ${sumador}`);
} else {
  console.log(`El numero ingresado (${numero}) es incorrecto`);
}

// ejercicio 13

numero = parseInt(prompt("Ingrese la cantidad de digitos que tendrá su serie numérica"));
let arregloNum = [];

for (let i = 0; i < numero; i++) {
  if (i % 2 === 0) {
    arregloNum[i] = (i + 1) * 1;
  } else {
    arregloNum[i] = (i + 1) * -1;
  }
}

console.log(`La serie numerica especial es ${arregloNum}`);

// ejercicio 14

numero = parseInt(prompt("Ingrese un numero entero positivo"));
sumador = 0;
aux = numero;
ultDig = 0;

if (numero > 0) {
  while (aux > 0) {
    ultDig = aux % 10;
    if (ultDig % 2 === 0) {
      sumador += ultDig;
    }
    aux = parseInt(aux / 10);
  }
  console.log(`La suma de los digitos pares de ${numero} es ${sumador}`);
} else {
  console.log(`El numero ingresado (${numero}) es incorrecto`);
}
