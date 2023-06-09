// Switch:

// 3- Ejercicio switch: Verificar el nombre del mes según un número del 1 al 12.
// 4- Ejercicio switch: Verificar el tipo de vehículo según una opción.

//  Nivel de dificultad: Moderado
// 5- Ejercicio switch: Calcular el costo de envío según el país seleccionado.
// 6- Ejercicio switch: Verificar el rango de edad de una persona según su edad.
// 7- Ejercicio switch: Calcular el índice de masa corporal (IMC) según el peso y la altura.
// 8- Ejercicio switch: Verificar la calificación según una nota numérica.

//  Nivel de dificultad: Difícil
// 9- Ejercicio switch: Calcular el resultado de una operación matemática según dos números y un operador.
// 10- Ejercicio switch: Verificar el día y la hora actual del sistema.

// ------------

//  Nivel de dificultad: Fácil

// 1- Ejercicio switch: Verificar el día de la semana según un número del 1 al 7.

// let numeroDeDia = parseFloat(prompt("ingrese un numero del 1 al 7"));
// let diaSemana;

// let numeroDia = 3;
// let dia;

// switch (numeroDeDia) {
//     case 1:
//         dia = "Domingo"
//         break;
//     case 2:
//         dia = "Lunes"
//         break;
//     case 3:
//         dia = "Martes"
//         break;
//     case 4:
//         dia = "Miercoles"
//         break;
//     case 5:
//         dia = "Jueves"
//         break;
//     case 6:
//         dia = "Viernes"
//         break;
//     case 7:
//         dia = "Sabado"
//         break;
//     default:
//         dia = "Ingrese un número válido del 1 al 7"
//         break;
// }
// alert(`usted seleccionó el dia ${dia}`);

// 2- Ejercicio switch: Verificar el tipo de animal según una opción seleccionada..

// let animal = prompt("Ingresa el nombre de una animal y yo te dire que tipo de animal es").toLowerCase();
// let tipoDeAnimal;

// switch (animal) {
//     case "perro":
//     case "gato":
//     case "elefante":
//     case "leon":
//         tipoDeAnimal = "Mamífero";
//         alert(`El animal ${animal} es un ${tipoDeAnimal}.`);
//         break;
//     case "aguila":
//     case "pinguino":
//     case "loro":
//     case "buho":
//         tipoDeAnimal = "Ave";
//         alert(`El animal ${animal} es un ${tipoDeAnimal}.`);
//         break;
//     case "serpiente":
//     case "cocodrilo":
//     case "lagarto":
//     case "tortuga":
//         tipoDeAnimal = "Reptil";
//         alert(`El animal ${animal} es un ${tipoDeAnimal}.`);
//         break;
//     case "abeja":
//     case "mariposa":
//     case "escarabajo":
//     case "hormiga":
//     case "mosquito":
//         tipoDeAnimal = "Insecto";
//         alert(`El animal ${animal} es un ${tipoDeAnimal}.`);
//         break;
//     case "rana":
//     case "sapo":
//     case "salamandra":
//         tipoDeAnimal = "Anfibio";
//         alert(`El animal ${animal} es un ${tipoDeAnimal}.`);
//         break;
//     default:
//         tipoDeAnimal = "Desconocido";
//         alert("Has ingresado un animal desconocido");

//         break;
// }