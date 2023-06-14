//Nivel de dificultad: Fácil
//1- Ejercicio bucles: Imprimir los números del 1 al 10.
/*
for (let index = 0; index < 11; index++) {
    console.log(index)
}
*/

//2- Ejercicio bucles: Imprimir los números pares del 1 al 20.

/*
for (let index = 1; index < 21; index++) {
    if(index % 2 === 0){
        console.log(index)
    }
}
*/

//3- Ejercicio bucles: Imprimir los números impares del 1 al 15.

/*
for (let index = 1; index < 16; index++) {
    if(index % 2 !== 0){
        console.log(index)
    }
}
*/

//4- Ejercicio bucles: Calcular la suma de los primeros 50 números enteros positivos.

/*
let suma = 0

for (let index = 1; index <= 50; index++) {
    suma += index
    }
 console.log(suma)
 */

//Nivel de dificultad: Moderado
//5- Ejercicio bucles: Imprimir la tabla de multiplicar del 5 (del 5 al 50).

/*
let tabla = parseFloat(prompt("Ingrese un numero"))

for (let index = 1; index < 11; index++) {
    let resultado = tabla * index
    console.log(resultado)
}
*/

//6- Ejercicio bucles: Imprimir los caracteres de un string en orden inverso.

/*
let palabra = "mundo";

for (let index = palabra.length - 1; index >= 0; index--) {
    console.log(palabra[index]);
}
*/

//7- Ejercicio bucles: Calcular el factorial de un número dado(por ejemplo, 5! = 5 x 4 x 3 x 2 x 1).

/*
let numero= parseFloat(prompt("Ingrese un numero"))

let factorial = 1

for (let index = numero; index > 1; index--) {
    factorial*= index
    
}

console.log(`El factoral es: ${factorial} `)
*/

//Nivel de dificultad: Difícil
//8- Ejercicio bucles: Imprimir los números primos del 1 al 50.

/*
for (let numero = 2; numero <= 50; numero++) {
    let esPrimo = true;
  
    for (let index = 2; index < numero; index++) {
      if (numero % index === 0) {
        esPrimo = false;
        break;
      }
    }
  
    if (esPrimo) {
      console.log(numero);
    }
  }
  */

//9- Ejercicio bucles: Imprimir los elementos de un array de números.

/*
const array = [1,2,3,4,5,6,7,8,9,10]

for (let index = 0; index < array.length; index++) {
    console.log(array[index])
}
*/

//10- Ejercicio bucles: Calcular la suma de los dígitos de un número entero positivo.

/*
let numero = 155
let suma = 0
let numeroString = numero.toString()

for (let index = 0; index < numeroString.length; index++) {
  suma+= parseInt(numeroString[index])   
}

console.log(`La suma de los digitos de ${numero} es: ${suma}`)
*/

//11- Ejercicio bucles: Imprimir una serie numérica especial: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...

/*
for (let index = 1; index <= 4; index++) {
    for (let j = 0; j < index; j++) {
        console.log(index);
    }
}
*/

//Nivel de dificultad: Experto
//12- Ejercicio bucles: Calcular el número de dígitos de un número entero.
/*

let numero = 15555
let acumulador = 0
let calcularDigitos = numero.toString()

for (let index = 0; index < calcularDigitos.length; index++) {
    acumulador ++
  }
  
  console.log(`El numero de dígitos del numero ${numero} es: ${acumulador}`)

*/
//13- Ejercicio bucles: Imprimir una serie numérica especial: 1, -2, 3, -4, 5, -6, 7, -8, 9, -10, ...

/*
for (let index = 1; index < 11; index++) {
    if (index % 2 !== 0) {
        console.log(index)
    } else {
        console.log(-index)
    }
}
*/

//14- Ejercicio bucles: Calcular la suma de los dígitos pares de un número entero positivo.

/*
let numero = 20221
let suma = 0
let numeroString = numero.toString()

for (let index = 0; index < numeroString.length; index++) {
    if ( parseInt(numeroString[index])  % 2 === 0)
  suma+= parseInt(numeroString[index])   
}

console.log(`La suma de los digitos parades del ${numero} es: ${suma}`)
*/