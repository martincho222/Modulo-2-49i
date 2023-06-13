// Tarea:

//  If-else:

//  Nivel de dificultad: Fácil
// 1- Ejercicio if-else: Determinar si un número es positivo, negativo o cero.

let num = 2;

if(num===0){
    console.log(`el numero ${num} es igual a 0`)
}else if (num>0){
    console.log(`el numero ${num} es positivo`)
}else {
    console.log(`el numero ${num} es negativo`)
}

// 2- Ejercicio if-else: Determinar si un número es par o impar.

let numParImpar = 2;

if(numParImpar%2===0){
    console.log(`el numero ${numParImpar} es par`)
}else {
    console.log(`el numero ${numParImpar} es impar`)
}

// 3- Ejercicio if-else: Verificar si un número es divisible por 3.

let numDiv3 = 6;

if(numDiv3%3===0){
    console.log(`el numero ${numDiv3} es divisible en 3`)
}else {
    console.log(`el numero ${numDiv3} no es divisible en 3`)
}

//  Nivel de dificultad: Moderado
// 4- Ejercicio if-else: Calcular el mayor de tres números.

let num1=0;
let num2=0;
let num3=10;

if(num1==num2 && num2==num3){

    console.log(`son todos iguales`)

}else if(num1>num2){

    if(num1>num3){

        console.log(`el mayor es el numero ${num1} `)

    }else{

        console.log(`el mayor es el numero ${num3} `)

    }
    
}else if(num2>num3){
   
    console.log(`el mayor es el numero ${num2} `)
    
}else{

    console.log(`el mayor es el numero ${num3} `)

}


// 5- Ejercicio if-else: Determinar si un año es bisiesto.

 
let anioBisiesto = 2020;

if(anioBisiesto%4===0){
    console.log(`el año ${anioBisiesto} es bisiesto`)
}else {
    console.log(`el año ${anioBisiesto} no es bisiesto`)
}

//  Nivel de dificultad: Difícil
// 6- Ejercicio if-else: Ordenar tres números de forma ascendente.

let numOrdenado1=1;
let numOrdenado2=5;
let numOrdenado3=8;

if(numOrdenado1<numOrdenado2 && numOrdenado1<numOrdenado3){
    if (numOrdenado2<numOrdenado3){
        console.log(`${numOrdenado1} ${numOrdenado2} ${num3} `)
    }else{
        console.log(`${numOrdenado1} ${num3} ${numOrdenado2} `)
    }
}else if(numOrdenado2<numOrdenado1 && numOrdenado2<numOrdenado3){
    if (numOrdenado1<numOrdenado3){
        console.log(`${numOrdenado2} ${numOrdenado1} ${numOrdenado3} `)
    }else{
        console.log(`${numOrdenado2} ${numOrdenado3} ${numOrdenado1} `)
    }
}else if(numOrdenado3<numOrdenado1 && numOrdenado3<numOrdenado2){
    if (numOrdenado1<numOrdenado2){
        console.log(`${numOrdenado3} ${numOrdenado1} ${numOrdenado2} `)
    }else{
        console.log(`${numOrdenado3} ${numOrdenado2} ${numOrdenado1} `)
    }
}
// 7- Ejercicio if-else: Calcular el descuento aplicable a una compra según el monto.

let importe = 1250;
let totalApagar
let descuento=0;

if(importe<0){
    totalApagar="valor nulo"
}else if(importe<500){
    totalApagar=importe
}else if (importe<1000){
    totalApagar=importe*0.95;
    descuento=5;
}else if (importe<1500){
    totalApagar=importe*0.90;
    descuento=10;
}else if(importe>=1500){
    totalApagar=importe*0.85;
    descuento=15;
}

if(descuento==0){
    console.log(`usted tiene para pagar ${totalApagar}$ sin descuento`)
}else{
    console.log(`usted tiene para pagar ${totalApagar}$ con descuento del ${descuento}% (monoto original ${importe})$`)
}

// 8- Ejercicio if-else: Determinar el tipo de triángulo según sus lados.

let ladoTrianguloUno =1;
let ladoTrianguloDos =2;
let ladoTrianguloTres =3;

if(ladoTrianguloUno===ladoTrianguloDos && ladoTrianguloDos==ladoTrianguloTres){
    console.log(`Triángulo equilátero`)
}else if(ladoTrianguloUno===ladoTrianguloDos || ladoTrianguloDos===ladoTrianguloTres || ladoTrianguloUno===ladoTrianguloTres){
    console.log(`Triángulo isósceles`)
}else {
    console.log(`Triángulo escaleno`)
}

//  Switch:

// //  Nivel de dificultad: Fácil
// // 1- Ejercicio switch: Verificar el día de la semana según un número del 1 al 7.

// var dia = prompt("Ingresa un número del 1 al 7 segun un día de la semana:");

// switch (dia) {
//     case '1':
//         console.log("lunes");
//         break;
//     case '2':
//         console.log("martes");
//         break;
//     case '3':
//         console.log("miércoles");
//         break;
//     case '4':
//         console.log("jueves");
//         break;
//     case '5':
//         console.log("viernes");
//         break;
//     case '6':
//         console.log("sábado");
//         break;
//     case '7':
//         console.log("domingo");
//         break;
//     default:
//         console.log("El número ingresado no corresponde a un día de la semana válido.");
//         break;
// }

// // 2- Ejercicio switch: Verificar el tipo de animal según una opción seleccionada.
// var animal = prompt("elija una mascota: ");

// switch (animal) {
//     case '1':
//         console.log("perro");
//         break;
//     case '2':
//         console.log("gato");
//         break;
//     case '3':
//         console.log("loro");
//         break;
//     case '4':
//         console.log("puerco potter");
//         break;
//     default:
//         console.log("lo sentimos no disponemos de esa mascota.");
//         break;
// }
// // 3- Ejercicio switch: Verificar el nombre del mes según un número del 1 al 12.

// var mes = prompt("ingrese el mes del 1 al 12: ");

// switch (mes) {
//     case '1':
//         console.log("enero");
//         break;
//     case '2':
//         console.log("febrero");
//         break;
//     case '3':
//         console.log("marzo");
//         break;
//     case '4':
//         console.log("abril");
//         break;
//     case '5':
//         console.log("mayo");
//         break;
//     case '6':
//         console.log("junio");
//         break;
//     case '7':
//         console.log("julio");
//         break;
//     case '8':
//         console.log("agosto");
//         break;
//     case '9':
//         console.log("septiembre");
//         break;
//     case '10':
//         console.log("octubre");
//         break;
//     case '11':
//         console.log("noviembre");
//         break;
//     case '12':
//         console.log("diciembre");
//         break;
        
//   default:
//     console.log("este numero no hace referencia a un mes.");
//     break;
// }
// // 4- Ejercicio switch: Verificar el tipo de vehículo según una opción.
// var auto = prompt("elija un auto: ");

// switch (auto) {
//     case '1':
//         console.log("ford");
//         break;
//     case '2':
//         console.log("fiat");
//         break;
//     case '3':
//         console.log("renault");
//         break;
//     case '4':
//         console.log("peugeot");
//         break;
//     default:
//         console.log("lo sentimos no disponemos de esa gama.");
//         break;
// }
// //  Nivel de dificultad: Moderado
// // 5- Ejercicio switch: Calcular el costo de envío según el país seleccionado.

// let cantidadDeKilos = 10;
// let paisDestino = prompt (`A donde desa enviar sus ${cantidadDeKilos} kilos?`)

// switch (paisDestino) {
//     case '1':
//         console.log(`el envio a Argentina le cuesta ${cantidadDeKilos*10}$ por sus ${cantidadDeKilos} kilos`);
//         break;
//     case '2':
//         console.log(`el envio a Brasil le cuesta ${cantidadDeKilos*15}$ por sus ${cantidadDeKilos} kilos`);
//         break;
//     case '3':
//         console.log(`el envio a Chile le cuesta ${cantidadDeKilos*18}$ por sus ${cantidadDeKilos} kilos`);
//         break;
//     case '4':
//         cconsole.log(`el envio a Bolivia le cuesta ${cantidadDeKilos*19}$ por sus ${cantidadDeKilos} kilos`);
//         break;
//     default:
//         console.log("lo sentimos no realizamos envios a este pais por el momento.");
//         break;
// }

// 6- Ejercicio switch: Verificar el rango de edad de una persona según su edad.

var edad = 18;

switch (true) {
    case (edad>0 && edad <4):
        console.log("Eres un bebé");
        break;
    case (edad>=4 && edad <11):
        console.log("Eres un niño");
        break;
    case (edad>=11 && edad <17):
        console.log("Eres un adolecente");
        break;
    case (edad >= 18 && edad <= 65):
        console.log("Eres mayor de edad");
        break;
    case (edad > 65):
        console.log("Eres jubilado");
        break;
    default:
        console.log("Edad inválida");
        break;
}

// 7- Ejercicio switch: Calcular el índice de masa corporal (IMC) según el peso y la altura.
// 8- Ejercicio switch: Verificar la calificación según una nota numérica.

//  Nivel de dificultad: Difícil
// 9- Ejercicio switch: Calcular el resultado de una operación matemática según dos números y un operador.
// 10- Ejercicio switch: Verificar el día y la hora actual del sistema.



//  Bucles:

//  Nivel de dificultad: Fácil
// 1- Ejercicio bucles: Imprimir los números del 1 al 10.
// 2- Ejercicio bucles: Imprimir los números pares del 1 al 20.
// 3- Ejercicio bucles: Imprimir los números impares del 1 al 15.
// 4- Ejercicio bucles: Calcular la suma de los primeros 50 números enteros positivos.

//  Nivel de dificultad: Moderado
// 5- Ejercicio bucles: Imprimir la tabla de multiplicar del 5 (del 5 al 50).
// 6- Ejercicio bucles: Imprimir los caracteres de un string en orden inverso.
// 7- Ejercicio bucles: Calcular el factorial de un número dado
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