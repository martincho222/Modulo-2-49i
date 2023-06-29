/*
    Nivel de dificultad: Fácil

        1. Ejercicio switch: Verificar el día de la semana según un número del 1 al 7.
        2. Ejercicio switch: Verificar el tipo de animal según una opción seleccionada.
        3. Ejercicio switch: Verificar el nombre del mes según un número del 1 al 12.
        4. Ejercicio switch: Verificar el tipo de vehículo según una opción.

    Nivel de dificultad: Moderado

        5. Ejercicio switch: Calcular el costo de envío según el país seleccionado.
        6. Ejercicio switch: Verificar el rango de edad de una persona según su edad.
        7. Ejercicio switch: Calcular el índice de masa corporal (IMC) según el peso y la altura.
        8. Ejercicio switch: Verificar la calificación según una nota numérica.

    Nivel de dificultad: Difícil

        9. Ejercicio switch: Calcular el resultado de una operación matemática según dos números y un operador.
        10. Ejercicio switch: Verificar el día y la hora actual del sistema.

*/


// Nivel de dificultad: Fácil
// 1. Ejercicio: Verificar el día de la semana según un número del 1 al 7.

const dia = parseInt(prompt("ingrese un numero del 1 al 7"));
switch (dia) {
    case 1:
        console.log("El día es Lunes");
        break;
    case 2:
        console.log("El día es Martes");
        break;
    case 3:
        console.log("El día es Miercoles");
        break;
    case 4:
        console.log("El día es Jueves");
        break;
    case 5:
        console.log("El día es Viernes");
        break;
    case 6:
        console.log("El día es Sabado");
        break;
    case 7:
        console.log("El día es Domingo");
        break;
    default:
        console.log("no ingresó un número valido");
        break;
}


// 3. Ejercicio: Verificar el nombre del mes según un número del 1 al 12.

const mes = parseFloat(prompt("ingrese un numero del mes del 1 al 12"));
switch (mes) {
    case 1:
        console.log("El mes es Enero");
        break;
    case 2:
        console.log("El mes es Febrero");
        break;
    case 3:
        console.log("El mes es Marzo");
        break;
    case 4:
        console.log("El mes es Abril");
        break;
    case 5:
        console.log("El mes es Mayo");
        break;
    case 6:
        console.log("El mes es Junio");
        break;
    case 7:
        console.log("El mes es Julio");
        break;
    case 8:
        console.log("El mes es Agosto");
        break;
    case 9:
        console.log("El mes es Septiembre");
        break;
    case 10:
        console.log("El mes es Octubre");
        break;
    case 11:
        console.log("El mes es Noviembre");
        break;
    case 12:
        console.log("El mes es Diciembre");
        break;
    default:
        console.log("no ingresó un número valido");
        break;
}


// Nivel de dificultad: Moderado
// 5. Ejercicio: Calcular el costo de envío según el país seleccionado.

const pais = prompt("Ingrese el pais a realizar el envio");
switch (pais.toLowerCase()) {
    case "argentina":
        console.log("El costo de envio es U$500")
        break;
    case "uruguay":
        console.log("El costo de envio es U$700")
        break;
    case "brasil":
        console.log("El costo de envio es U$550")
        break;
    case "chile":
        console.log("El costo de envio es U$600")
        break;
    default:
        console.log("Ingreso de pais no valido")
        break;
}


// 6. Ejercicio: Verificar el rango de edad de una persona según su edad.

const edad = prompt("Ingrese su edad");
switch (true) {
    case edad > 0 && edad <= 5:
        console.log("La persona se encuentra en el rango de primera infancia");
        break;
    case edad > 5 && edad <= 11:
        console.log("La persona se encuentra en el rango de infancia");
        break;
    case edad > 11 && edad <= 18:
        console.log("La persona se encuentra en el rango de Adolescencia");
        break;
    case edad > 18 && edad <= 26:
        console.log("La persona se encuentra en el rango de Juventud")
        break;
    case edad > 26 && edad <= 59:
        console.log("La persona se encuentra en el rango de Adultez")
        break;
    case edad > 59:
        console.log("La persona se encuentra en el rango de Mayor")
        break;
    default:
        console.log("EL valor ingresado no es valido")
        break;
}


// 7. Ejercicio: Calcular el índice de masa corporal(nota) según el peso y la altura.

let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
let altura = parseFloat(prompt("Ingrese su altura en metros:"));
let nota7 = peso / (altura * altura);
let calificacion7;

switch (true) {
    case nota7 < 18.5:
        calificacion7 = "Bajo peso";
        break;
    case nota7 >= 18.5 && nota7 < 25:
        calificacion7 = "Peso normal";
        break;
    case nota7 >= 25 && nota7 < 30:
        calificacion7 = "Sobrepeso";
        break;
    case nota7 >= 30:
        calificacion7 = "Obesidad";
        break;
    default:
        calificacion7 = "No se pudo determinar la categoría";
        break;
}

console.log("Su índice de masa corporal es: " + nota7.toFixed(2));
console.log("Categoría: " + calificacion7);


// 8. Ejercicio: Verificar la calificación según una nota numérica.

let nota8 = parseFloat(prompt("Ingrese su nota:"));
let calificacion8;

switch (true) {
    case nota8 < 6:
        calificacion8 = "Reprobado";
        break;
    case nota8 >= 6 && nota8 < 8:
        calificacion8 = "Bueno";
        break;
    case nota8 >= 8 && nota8 < 10:
        calificacion8 = "Muy bueno";
        break;
    case nota8 === 10:
        calificacion8 = "Excelente";
        break;
    default:
        calificacion8 = "Valor invalido";
        break;
}
console.log("Su calificación es: " + calificacion8);


// Nivel de dificultad: Difícil
// 9. Ejercicio: Calcular el resultado de una operación matemática según dos números y un operador.

let numero1 = parseFloat(prompt("Ingrese un numero:"));
let numero2 = parseFloat(prompt("Ingrese otro numero:"));
let operador = prompt("Ingrese el simbolo de la operación a realizar (+,-,/,*):");
let operacion;

switch (true) {
    case operador === "+":
        operacion = numero1 + numero2;
        break;
    case operador === "-":
        operacion = numero1 - numero2;
        break;
    case operador === "/":
        operacion = numero1 / numero2;
        break;
    case operador === "*":
        operacion = numero1 * numero2;
        break;
    default:
        operacion = "Valor invalido";
        break;
}
console.log("El resultado de la operación es:", operacion);
