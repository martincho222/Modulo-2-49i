// estructuras condicionales
//if, else y else if

// let edad = parseFloat(prompt("ingrese su edad"));
// console.log(typeof edad);

// if (edad >= 21) {
// console.log("Sos mayor de edad, ya podes beber alcohol");
// } else if (edad >= 18 && edad <= 20) {
// console.log("Sos mayor de edad, todavia no puedes beber alcohol");
// } else {
//   console.log("Todavia no sos mayor de edad");
// }

//2 - Estructuras condicionales multiples

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// let numeroDia = parseFloat(prompt("ingrese numero de dia"));
// let diaSemana;

// switch (numeroDia) {
//   case 1:
//     diaSemana = "Domingo";
//     break;
//   case 2:
//     diaSemana = "Lunes";
//     break;
//   case 3:
//     diaSemana = "Martes";
//     break;
//   case 4:
//     diaSemana = "Miercoles";
//     break;
//   case 5:
//     diaSemana = "Jueves";
//     break;
//   case 6:
//     diaSemana = "Viernes";
//     break;
//   case 7:
//     diaSemana = "Sabado";
//     break;

//   default:
//     diaSemana = "Numero invalido";
//     break;
// }
// console.log("El dia seleccionado es " + diaSemana);

//Bucles

// 1 - while

// while(condition) {
//     //el codigo que escribamos aqui, se va a ejecutar continuamente
// }

// let numero = 11;

// while(numero <= 10){
//     console.log("El numero es menor o igual a 10 " + numero);
//     numero++ // numero = numero + 1
// }
// console.log(numero);

// 2 do while

// do {
//     //codigo aqui
// } while (condition)

// let valor = 21;

// do {
//     console.log(valor);
//     valor++
// }while(valor <= 20)

// 3 - for

// const array = [1,2,3,4,5,6,7,8,9]
// console.log(array[0]);

// for (inicio; condicion; incremento) {
//     const element = array[index];
//     console.log(element);
// }

// for (let i = 0; i <= 15; i++) {
//     console.log(i);
// }