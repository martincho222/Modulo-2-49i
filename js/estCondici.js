//Nivel de dificultad: Fácil
//1- Ejercicio if-else: Determinar si un número es positivo, negativo o cero.*/

/*
const numero = parseFloat(prompt("ingresar un numero"))

 if(numero === 0){
    console.log(`El numero ${numero} es Cero`)
}else if(numero >=1){
    console.log(`El numero ${numero} es Positivo`)
}else if(numero <1){
    console.log(`El numero ${numero} es Negativo`)
}
*/


//2- Ejercicio if-else: Determinar si un número es par o impar.

/*
const numero = parseFloat(prompt("ingresar un numero"))

if(numero % 2 === 0){
    console.log(`el numero ${numero} es par`)
} else{
    console.log(`el numero ${numero} es impar`)
}
*/

//3- Ejercicio if-else: Verificar si un número es divisible por 3.

/*
const numero = parseFloat(prompt("ingresar un numero"))

if(numero % 3 === 0){
    console.log(`el numero ${numero} es divisible por 3`)
} else{
    console.log(`el numero ${numero} no es divisible por 3`)
}
*/


//Nivel de dificultad: Moderado
//4- Ejercicio if-else: Calcular el mayor de tres números.

/*
const numero1 = parseFloat(prompt("ingresar un numero"))
const numero2 = parseFloat(prompt("ingresar un numero"))
const numero3 = parseFloat(prompt("ingresar un numero"))


        if ( numero1 > numero2 && numero1 > numero3){
            console.log(numero1)
        } else if( numero2 > numero1 && numero2 > numero3){
            console.log(numero2)
        } else if( numero3 > numero1 && numero3 > numero2){
            console.log(numero3)
        }
*/

//5- Ejercicio if-else: Determinar si un año es bisiesto.

/*
const anios = parseFloat(prompt("ingrese el año"))

if(anios % 4 === 0){
    console.log(`El años ${anios} es bisiestro`)
} else {
    console.log(`El años ${anios} no es bisiestro`)
}
*/


//Nivel de dificultad: Difícil


//6- Ejercicio if-else: Ordenar tres números de forma ascendente.

/*
const array = [580,240,1050]

for (let index = 0; index < array.sort; index++) {
    const element = array[index];
}

console.log(array)
*/

//7- Ejercicio if-else: Calcular el descuento aplicable a una compra según el monto.

/*
const monto = parseFloat(prompt("Ingrese el monto de la compra:"));

if (monto <= 500) {
    const descuento1 = monto * 0.15;
    const totalDescuento1 = monto - descuento1;
    console.log(`El precio del producto tiene un descuento del 15% y queda en un total de: ${totalDescuento1}`);
} else if (monto >= 1000) {
    const descuento2 = monto * 0.25;
    const totalDescuento2 = monto - descuento2;
    console.log(`El precio del producto tiene un descuento del 25% y queda en un total de: ${totalDescuento2}`);
} else {
    console.log("El monto de la compra no cumple con los requisitos para aplicar descuento.");
}
*/

//8- Ejercicio if-else: Determinar el tipo de triángulo según sus lados.

/*
const lado1 = parseFloat(prompt("Ingrese la longitud del primer lado del triángulo:"));
const lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado del triángulo:"));
const lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado del triángulo:"));

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Es un triángulo equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Es un triángulo isósceles.");
} else {
    console.log("Es un triángulo escaleno.");
}
*/
