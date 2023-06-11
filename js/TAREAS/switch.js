// Nivel de dificultad: Fácil

//         1. Ejercicio: Verificar el día de la semana según un número del 1 al 7.
// const dia=parseFloat(prompt("ingrese un numero del 1 al 7"));
// switch (dia) {
//     case 1:
//         console.log("El día es Lunes");
//         break;
//     case 2:
//         console.log("El día es Martes");
//         break;
//     case 3:
//         console.log("El día es Miercoles");
//         break;
//     case 4:
//         console.log("El día es Jueves");
//         break;
//     case 5:
//         console.log("El día es Viernes");
//         break;
//     case 6:
//         console.log("El día es Sabado");
//         break;
//     case 7:
//         console.log("El día es Domingo");
//         break;
//     default:
//         console.log("no ingresó un número valido");
//         break;
// }

//         2. Ejercicio: Verificar el tipo de animal según una opción seleccionada.
// const animal=parseFloat(prompt("ingrese un numero del 1 al 7"));
// switch (animal) {
//     case 1:
//         console.log("El animal es una vaca");
//         break;
//     case 2:
//         console.log("El animal es una serpiente");
//         break;
//     case 3:
//         console.log("El animal es un koala");
//         break;
//     case 4:
//         console.log("El animal es un perro");
//         break;
//     case 5:
//         console.log("El animal es un canguro");
//         break;
//     case 6:
//         console.log("El animal es una cebra");
//         break;
//     case 7:
//         console.log("El animal es un gato");
//         break;
//     default:
//         console.log("no ingresó un número valido");
//         break;
// }

//         3. Ejercicio: Verificar el nombre del mes según un número del 1 al 12.
// const mes=parseFloat(prompt("ingrese un numero del mes del 1 al 12"));
// switch (mes) {
//     case 1:
//         console.log("El mes es Enero");
//         break;
//     case 2:
//         console.log("El mes es Febrero");
//         break;
//     case 3:
//         console.log("El mes es Marzo");
//         break;
//     case 4:
//         console.log("El mes es Abril");
//         break;
//     case 5:
//         console.log("El mes es Mayo");
//         break;
//     case 6:
//         console.log("El mes es Junio");
//         break;
//     case 7:
//         console.log("El mes es Julio");
//         break;
//     case 8:
//         console.log("El mes es Agosto");
//         break;
//     case 9:
//         console.log("El mes es Septiembre");
//         break;
//     case 10:
//         console.log("El mes es Octubre");
//         break;
//     case 11:
//         console.log("El mes es Noviembre");
//         break;
//     case 12:
//         console.log("El mes es Diciembre");
//         break;
//     default:
//         console.log("no ingresó un número valido");
//         break;
// }

//         4. Ejercicio: Verificar el tipo de vehículo según una opción.
// const opción=parseFloat(prompt("Elija una opción del 1 al 3"));
// switch (opción) {
//     case 1:
//         console.log("El tipo de vehiculo es una moto");
//         break;
//     case 2:
//         console.log("El tipo de vehiculo es un auto");
//         break;
//     case 3:
//         console.log("El tipo de vehiculo es una bicicleta");
//         break;
//     default:
//         console.log("no ingresó un número valido");
//         break;
// }

//     Nivel de dificultad: Moderado

//         5. Ejercicio: Calcular el costo de envío según el país seleccionado.
// const pais=prompt("Ingrese el pais a realizar el envio");
// switch (pais.toLowerCase()) {
//     case "argentina":
//         console.log("El costo de envio es $4500")
//         break;
//     case "uruguay":
//         console.log("El costo de envio es $4700")
//         break;
//     case "brasil":
//         console.log("El costo de envio es $5500")
//         break;
//     case "chile":
//         console.log("El costo de envio es $6500")
//         break;

//     default:
//         console.log("Ingreso de pais no valido")
//         break;
// }

//         6. Ejercicio: Verificar el rango de edad de una persona según su edad.
// const edad=prompt("Ingrese su edad");
// switch (true) {
//     case edad>0 && edad<=5:
//         console.log("La persona se encuentra en el rango de primera infancia");
//         break;
//     case edad>5 && edad<=11:
//         console.log("La persona se encuentra en el rango de infancia");
//         break;
//     case edad>11 && edad<=18:
//         console.log("La persona se encuentra en el rango de Adolescencia");
//         break;
//     case edad>18 && edad<=26:
//         console.log("La persona se encuentra en el rango de Juventud")
//         break;
//     case edad>26 && edad<=59:
//         console.log("La persona se encuentra en el rango de Adultez")
//         break;
//     case edad>59:
//         console.log("La persona se encuentra en el rango de Mayor")
//         break;

//     default:
//         console.log("EL valor ingresado no es valido")
//         break;
// }

//         7. Ejercicio: Calcular el índice de masa corporal (nota) según el peso y la altura.
// let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
// let altura = parseFloat(prompt("Ingrese su altura en metros:"));
// let nota = peso / (altura * altura);
// let calificacion;

// switch (true) {
//   case nota < 18.5:
//     calificacion = "Bajo peso";
//     break;
//   case nota >= 18.5 && nota < 25:
//     calificacion = "Peso normal";
//     break;
//   case nota >= 25 && nota < 30:
//     calificacion = "Sobrepeso";
//     break;
//   case nota >= 30:
//     calificacion = "Obesidad";
//     break;
//   default:
//     calificacion = "No se pudo determinar la categoría";
//     break;
// }

// console.log("Su índice de masa corporal es: " + nota.toFixed(2));
// console.log("Categoría: " + calificacion);

//         8. Ejercicio: Verificar la calificación según una nota numérica.
// let nota = parseFloat(prompt("Ingrese su nota:"));
// let calificacion;

// switch (true) {
//   case nota < 6:
//     calificacion = "Reprobado";
//     break;
//   case nota >= 6 && nota < 8:
//     calificacion = "Bueno";
//     break;
//   case nota >=8  && nota < 10:
//     calificacion = "Muy bueno";
//     break;
//   case nota === 10:
//     calificacion = "Excelente";
//     break;
//   default:
//     calificacion = "Valor invalido";
//     break;
// }

// console.log("Su calificación es: " + calificacion);



//     Nivel de dificultad: Difícil

//         9. Ejercicio: Calcular el resultado de una operación matemática según dos números y un operador.
// let numero1 = parseFloat(prompt("Ingrese un numero:"));
// let numero2 = parseFloat(prompt("Ingrese otro numero:"));
// let operador = prompt("Ingrese el simbolo de la operación a realizar (+,-,/,*):");
// let operacion;

// switch (true) {
//   case operador === "+":
//     operacion=numero1+numero2;
//     break;
//   case operador === "-":
//     operacion=numero1-numero2;
//     break;
//   case operador === "/":
//     operacion=numero1/numero2;
//     break;
//   case operador === "*":
//     operacion=numero1*numero2;
//     break;
  
//   default:
//     calificacion = "Valor invalido";
//     break;
// }

// console.log("El resultado de la operación es:", operacion);


//         10. Ejercicio: Verificar el día y la hora actual del sistema.