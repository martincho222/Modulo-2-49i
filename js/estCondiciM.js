//Nivel de dificultad: Fácil
//1- Ejercicio switch: Verificar el día de la semana según un número del 1 al 7.

/*
let dia = 3

switch (dia) {
    case 1: console.log("Hoy es Domingo");
        break;
    case 2: console.log("Hoy es Lunes");;
        break;
    case 3: console.log("Hoy es Martes");;
        break;
    case 4: console.log("Hoy es Miercoles");;
        break;
    case 5: console.log("Hoy es Jueves");;
        break;
    case 6: console.log("Hoy es Viernes");;
        break;
    case 7: console.log("Hoy es Sabado");;
        break;
    default: console.log("No es un día existente");
}
*/

//2- Ejercicio switch: Verificar el tipo de animal según una opción seleccionada.

/*
let animal = 3

switch (animal) {
    case 1: console.log("Mono");
        break;
    case 2: console.log("Leon");;
        break;
    case 3: console.log("Jirafa");;
        break;
    case 4: console.log("Elefante");;
        break;
    case 5: console.log("Hipopotamo");;
        break;
    case 6: console.log("Rana");;
        break;
    case 7: console.log("cebra");;
        break;
    default: console.log("No es un animal");
}
*/

//3- Ejercicio switch: Verificar el nombre del mes según un número del 1 al 12.

/*
let meses = 3

switch (meses) {
    case 1: console.log("Enero");
        break;
    case 2: console.log("Febrero");;
        break;
    case 3: console.log("Marzo");;
        break;
    case 4: console.log("Abril");;
        break;
    case 5: console.log("Mayo");;
        break;
    case 6: console.log("Junio");;
        break;
    case 7: console.log("Julio");;
        break;
    case 8: console.log("Agosto");;
        break;
    case 9: console.log("Septiembre");;
        break;
    case 10: console.log("Octubre");;
        break;
    case 11: console.log("Noviembre");;
        break;
    case 12: console.log("Diciembre");;
        break;

    default: console.log("No es un Mes");
}
*/

//4- Ejercicio switch: Verificar el tipo de vehículo según una opción.

/*
let vehiculo = 3

switch (vehiculo) {
    case 1: console.log("Moto");
        break;
    case 2: console.log("Auto");;
        break;
    case 3: console.log("Camion");;
        break;
    case 4: console.log("Bicicleta");;
        break;
    case 5: console.log("Avion");;
        break;
    case 6: console.log("Barco");;
        break;
    case 7: console.log("Submarino");;
        break;
    default: console.log("No es un animal");
}
*/

//Nivel de dificultad: Moderado
//5- Ejercicio switch: Calcular el costo de envío según el país seleccionado.

/*
let pais = "argentina";

switch (pais) {
    case "argentina":
        console.log("El costo de envío es gratis");
        break;
    case "brazil":
        console.log("El costo de envío es 10 dólares");
        break;
    case "uruguay":
        console.log("El costo de envío es 15 dólares");
        break;
    case "chile":
        console.log("El costo de envío es 20 dólares");
        break;
    case "paraguay":
        console.log("El costo de envío es 25 dólares");
        break;
    case "bolivia":
        console.log("El costo de envío es 30 dólares");
        break;
    default:
        console.log("No hacemos envíos a este país");
}
*/

//6- Ejercicio switch: Verificar el rango de edad de una persona según su edad.

/*
let edad = 17;

switch (true) {
    case (edad >= 0 && edad <= 3): 
    console.log("Eres un bebe")
        break;
    case (edad >= 4 && edad <= 12): 
    console.log("Eres un niño")
        break;
    case (edad >= 13 && edad <= 17): 
    console.log("Eres un adolecente")
        break;
    case (edad >= 18 && edad <= 30): 
    console.log("Eres un adulto joven")
        break;
    case (edad >= 31 && edad <= 65): 
    console.log("Eres un adulto")
        break;
    case (edad >= 66 && edad <= 110): 
    console.log("Eres un adulto mayor")
        break;
    default: 
    console.log("No es una edad posible")
}
*/

//7- Ejercicio switch: Calcular el índice de masa corporal (IMC) según el peso y la altura.

/*
const peso = parseFloat(prompt("ingresar tu peso"))
const talla = parseFloat(prompt("ingresar tu talla"))

let imc = peso/(talla*talla)

switch(true){
    case (imc < 18.5): 
    console.log("Tenes un peso bajo")
    break;
    case (imc >= 18.5 && imc <= 24.9): 
    console.log("Tenes un peso normal")
    break;
    case (imc >= 25 && imc <= 29.9): 
    console.log("Tenes un sobrepeso")
    break;
    case (imc >= 30 && imc <= 34.9): 
    console.log("Tenes una obesidad grado I")
    break;
    case (imc >= 35 && imc <= 39.9): 
    console.log("Tenes una obesidad grado II")
    break;
    case (imc >= 40): 
    console.log("Tenes una obesidad grado III")
    break;
}
*/

//8- Ejercicio switch: Verificar la calificación según una nota numérica.

/*
let calificacion = 8;

switch (true) {
    case (calificacion >= 0 && calificacion <= 4):
        console.log("Estas desaprobado")
        break;
    case (calificacion >= 5 && calificacion <= 7):
        console.log("Tu nota es buena")
        break;
    case (calificacion >= 8 && calificacion <= 9):
        console.log("Tu nota es muy buena")
        break;
    case (calificacion === 10):
        console.log("Tu nota es excelente")
        break;
    default:
        console.log("No es una nota posible")
}
*/

//Nivel de dificultad: Difícil
//9- Ejercicio switch: Calcular el resultado de una operación matemática según dos números y un operador.

/*
let a = 5
let b = 10
let operador = "+"
let resultado

switch(operador){
    case "+":
        resultado = a + b
    console.log(`La suma de ${a} + ${b} es igual a ${resultado}`)
    break;
}
*/

//10- Ejercicio switch: Verificar el día y la hora actual del sistema.

/*
let fecha = new Date()
let diaSemana = fecha.getDay()
let hora = fecha.getHours()
let minuto = fecha.getMinutes()

switch (diaSemana) {
    case 1: console.log("Hoy es Domingo");
        break;
    case 2: console.log("Hoy es Lunes");;
        break;
    case 3: console.log("Hoy es Martes");;
        break;
    case 4: console.log("Hoy es Miercoles");;
        break;
    case 5: console.log("Hoy es Jueves");;
        break;
    case 6: console.log("Hoy es Viernes");;
        break;
    case 7: console.log("Hoy es Sabado");;
        break;
    default: console.log("No es un día existente");
}

console.log(`La hora es ${hora}:${minuto}`)
*/