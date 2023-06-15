// Switch:
//  Nivel de dificultad: Fácil

// 1- Ejercicio switch: Verificar el día de la semana según un número del 1 al 7. LISTO
// 2- Ejercicio switch: Verificar el tipo de animal según una opción seleccionada. LISTO
// 3- Ejercicio switch: Verificar el nombre del mes según un número del 1 al 12. LISTO
// 4- Ejercicio switch: Verificar el tipo de vehículo según una opción. LISTO

//  Nivel de dificultad: Moderado
// 5- Ejercicio switch: Calcular el costo de envío según el país seleccionado. LISTO
// 6- Ejercicio switch: Verificar el rango de edad de una persona según su edad. LISTO
// 7- Ejercicio switch: Calcular el índice de masa corporal (IMC) según el peso y la altura.
// 8- Ejercicio switch: Verificar la calificación según una nota numérica.

//  Nivel de dificultad: Difícil
// 9- Ejercicio switch: Calcular el resultado de una operación matemática según dos números y un operador. LISTO
// 10- Ejercicio switch: Verificar el día y la hora actual del sistema.

// ------RESUELTOS------

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

// 3- Ejercicio switch: Verificar el nombre del mes según un número del 1 al 12.

// let numero = parseInt(prompt(`Ingresa el numero de mes`));
// switch (numero) {
//     case 1:
//         alert(`Enero`);
//         break;
//     case 2:
//         alert(`Febrero`);
//         break;
//     case 3:
//         alert(`Marzo`);
//         break;
//     case 4:
//         alert(`Abril`);
//         break;
//     case 5:
//         alert(`Mayo`);
//         break;
//     case 6:
//         alert(`Junio`);
//         break;
//     case 7:
//         alert(`Julio`);
//         break;
//     case 8:
//         alert(`Agosto`);
//         break;
//     case 9:
//         alert(`Septiembre`);
//         break;
//     case 10:
//         alert(`Octubre`);
//         break;
//     case 11:
//         alert(`Noviembre`);
//         break;
//     case 12:
//         alert(`Diciembre`);
//         break;
//     default:
//         alert(`dato invalido`);
//         break;
// }

// 4- Ejercicio switch: Verificar el tipo de vehículo según una opción.

// let vehiculo = prompt(`Ingresa el tipo de vehículo (moto, auto, barco)`).toLowerCase();

// switch (vehiculo) {
//     case "auto":
//     case "moto":
//     case "tractor":
//     case "bicicleta":
//     case "camioneta":
//         alert(`Usted seleccionó ${vehiculo} y es un Vehículo Terrestre`);
//         break;
//     case "lancha":
//     case "yate":
//     case "barco":
//     case "velero":
//     case "crusero":
//         alert(`Usted seleccionó ${vehiculo} y es un Vehículo Acuático`);
//         break;
//     case "avión":
//     case "avion":
//     case "avioneta":
//     case "helicóptero":
//     case "helicoptero":
//     case "parapente":
//         alert(`Usted seleccionó ${vehiculo} y es un Vehículo Aéreo`);
//         break;
//     default:
//         alert(`dato invalido o no se encuentra en la base de datos`);
//         break;

// }


//  Nivel de dificultad: Moderado

// 5- Ejercicio switch: Calcular el costo de envío según el país seleccionado.

// let ingresoUsuario = prompt(`ingresa tu pais y te diremos el costo de envio`).toLowerCase();

// switch (ingresoUsuario) {
//     case "argentina":
//         alert(`Envío Gratis a Argentina!`);
//         break;
//     case "brasil":
//         alert(`El envío a Brasil cuesta $16 USD`);
//         break;
//     case "méxico":
//     case "mexico":
//         alert(`El envío a México cuesta $22 USD`);
//         break;
//     case "colombia":
//         alert(`El envío a Colombia cuesta $19 USD`);
//         break;
//     case "perú":
//         alert(`El envío a Perú cuesta $15 USD`);
//         break;
//     case "chile":
//         alert(`El envío a Chile cuesta $12 USD`);
//         break;
//     case "ecuador":
//         alert(`El envío a Ecuador cuesta $16 USD`);
//         break;
//     case "venezuela":
//         alert(`El envío a Venezuela cuesta $21 USD`);
//         break;
//     case "bolivia":
//         alert(`El envío a Bolivia cuesta $14 USD`);
//         break;
//     case "paraguay":
//         alert(`El envío a Paraguay cuesta $12 USD`);
//         break;
//     case "uruguay":
//         alert(`El envío a Uruguay cuesta $13 USD`);
//         break;
//     case "costa rica":
//         alert(`El envío a Costa Rica cuesta $18 USD`);
//         break;
//     case "panamá":
//         alert(`El envío a Panamá cuesta $20 USD`);
//         break;
//     case "honduras":
//         alert(`El envío a Honduras cuesta $19 USD`);
//         break;
//     case "guatemala":
//         alert(`El envío a Guatemala cuesta $20 USD`);
//         break;
//     default:
//         alert(`Dato inválido o no llegamos hasta ahi`);
//         break;
// }

// 6- Ejercicio switch: Verificar el rango de edad de una persona según su edad.

// let edad = prompt(`ingresa tu edad`);

// switch (true) {
//     case (edad >= 0 && edad <= 3):
//         alert(`tienes ${edad} años y eres un bebé`);
//         break
//     case (edad >= 4 && edad <= 14):
//         alert(`tienes ${edad} años y eres un niño`);
//         break
//     case (edad >= 15 && edad <= 17):
//         alert(`tienes ${edad} años y eres un adolescente`);
//         break
//     case (edad >= 18 && edad <= 24):
//         alert(`tienes ${edad} años y eres un joven adulto`);
//         break
//     case (edad >= 25 && edad <= 39):
//         alert(`tienes ${edad} años y eres un adulto`);
//         break
//     case (edad >= 40 && edad <= 56):
//         alert(`tienes ${edad} años y eres un adulto mayor`);
//         break
//     case (edad >= 57):
//         alert(`tienes ${edad} años y eres un anciano`);
//         break
//     default:
//         alert(`Edad inválida`);
//         break;
// }




//  Nivel de dificultad: Difícil
// 9- Ejercicio switch: Calcular el resultado de una operación matemática según dos números y un operador.

// let numero1 = parseFloat(prompt("Ingresa el primer numero"));
// let operador = prompt("Ingresa el operador, si quieres sumar o restar (+ o -)");
// let numero2 = parseFloat(prompt("Ingresa el segundo numero"));
// let resultado;

// switch (operador) {
//     case "+":
//         resultado = numero1 + numero2;
//         break;
//     case "-":
//         resultado = numero1 - numero2;
//         break;
// }

// alert(`${numero1} ${operador} ${numero2} es igual a ${resultado}`);

// 5- Ejercicio switch: Calcular el costo de envío según el país seleccionado.