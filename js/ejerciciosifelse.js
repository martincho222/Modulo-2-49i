/* 
Nivel de dificultad: Fácil
1- Ejercicio if-else: Determinar si un número es positivo, negativo o cero.
2- Ejercicio if-else: Determinar si un número es par o impar.
3- Ejercicio if-else: Verificar si un número es divisible por 3.

Nivel de dificultad: Moderado
4- Ejercicio if-else: Calcular el mayor de tres números.
5- Ejercicio if-else: Determinar si un año es bisiesto.

Nivel de dificultad: Difícil
6- Ejercicio if-else: Ordenar tres números de forma ascendente.
7- Ejercicio if-else: Calcular el descuento aplicable a una compra según el monto.
8- Ejercicio if-else: Determinar el tipo de triángulo según sus lados.

*/

// const num1 = parseInt(prompt("Ingrese el numero 1:"));
// const num2 = parseInt(prompt("Ingrese el numero 2:"));
// const num3 = parseInt(prompt("Ingrese el numero 3:"));

// ejercicio 1

let num1 = parseInt(prompt("Ingrese un numero:"));

if (num1 > 0) {
  console.log(`El numero ${num1} es mayor que 0`);
} else {
  if (num1 < 0) {
    console.log(`El numero ${num1} es menor que 0`);
  } else {
    if ((num1 = 0)) {
      console.log(`El numero ${num1} es 0`);
    }
  }
}

// ejercicio 2

num1 = parseInt(prompt("Ingrese un numero:"));

if (num1 % 2 === 0) {
  console.log(`El numero ${num1} es par`);
} else {
  console.log(`El numero ${num1} es impar`);
}

// ejercicio 3

num1 = parseInt(prompt("Ingrese un numero:"));

if (num1 % 3 === 0) {
  console.log(`El numero ${num1} es divisible por 3`);
} else {
  console.log(`El numero ${num1} no es divisible por 3`);
}

// ejercicio 4

num1 = parseInt(prompt("Ingrese el numero 1:"));
let num2 = parseInt(prompt("Ingrese el numero 2:"));
let num3 = parseInt(prompt("Ingrese el numero 3:"));

if (num1 > num2 && num1 > num3) {
  console.log(`El numero ${num1} es mayor que ${num2} y que ${num3}`);
} else {
  if (num2 > num1 && num2 > num3) {
    console.log(`El numero ${num2} es mayor que ${num1} y que ${num3}`);
  } else {
    if (num3 > num1 && num3 > num1) {
      console.log(`El numero ${num3} es mayor que ${num1} y que ${num2}`);
    }
  }
}

// ejercicio 5

num1 = parseInt(prompt("Ingrese el año que desea analizar:"));

if ((num1 % 4 === 0 && num1 % 100 !== 0) || num1 % 400 === 0) {
  console.log(`El año ${num1} es bisiesto`);
} else {
  console.log(`El año ${num1} no es bisiesto`);
}

// ejercicio 6

num1 = parseInt(prompt("Ingrese el numero 1:"));
num2 = parseInt(prompt("Ingrese el numero 2:"));
num3 = parseInt(prompt("Ingrese el numero 3:"));

if (num1 < num2 && num1 < num3 && num2 < num3) {
  console.log(`En orden ascendente ${num1}, ${num2}, ${num3}`);
} else {
  if (num1 < num2 && num1 < num3 && num3 < num2) {
    console.log(`En orden ascendente ${num1}, ${num3}, ${num2}`);
  } else {
    if (num2 < num1 && num2 < num3 && num1 < num3) {
      console.log(`En orden ascendente ${num2}, ${num1}, ${num3}`);
    } else {
      if (num2 < num1 && num2 < num3 && num3 < num1) {
        console.log(`En orden ascendente ${num2}, ${num3}, ${num1}`);
      } else {
        if (num3 < num1 && num3 < num2 && num2 < num1) {
          console.log(`En orden ascendente ${num3}, ${num2}, ${num1}`);
        } else {
          if (num3 < num1 && num3 < num2 && num1 < num2) {
            console.log(`En orden ascendente ${num3}, ${num1}, ${num2}`);
          }
        }
      }
    }
  }
}

// ejercicio 8

let ladoA = parseInt(prompt("Ingrese la longitud del lado 1:"));
let ladoB = parseInt(prompt("Ingrese la longitud del lado 2:"));
let ladoC = parseInt(prompt("Ingrese la longitud del lado 3:"));

if (ladoA === ladoB && ladoA === ladoC) {
  console.log(`Como los tres lados ingresados son iguales (${ladoA}), el triangulo es EQUILÁTERO.`);
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
  console.log(`Como dos lados ingresados son iguales, el triangulo es ISÓSCELES.`);
} else {
  console.log(`Como los tres lados ingresados son diferentes (${ladoA}, ${ladoB}, ${ladoC}), el triangulo es  ESCALENO.`);
}
