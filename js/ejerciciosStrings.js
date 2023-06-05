/*
1. Solicitar al usuario que ingrese un nombre y apellido y concatenarlos en una unica cadena
usar un prompt para obtener esos datos
2. Solicitar al usuario que ingrese una cadena de texto y mostrar en consola la longitud de la misma.
3. Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena en mayusculas.


*/

// // punto 1
// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");
// console.log("Su nombre completo es:", nombre + " " + apellido); // clg("${variable}")

// // punto 2
// let texto = prompt("Ingrese una cadena de texto");
// console.log("La longitud de su cadena es: " + texto.length);

// // punto 3
// let texto2 = prompt("Ingrese otra cadena de texto");
// console.log("La cadena en mayusculas es: ", texto2.toUpperCase());

/*Tarea String 1:
La Escuela Café de las 3am solicita un sistema, donde le permita a sus estudiantes presentarse de una manera más interactiva y eficiente, por eso deciden acudir a un programador para crear un sistema, en el cual se podrá ingresar el nombre, edad, actividad favorita y deporte favorito en una tarjeta de presentación predeterminada.

Tarea String 2:
Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena en minúsculas.

Tarea String 3:
Solicitar al usuario que ingrese una cadena y mostrar en consola la primera letra en mayúscula y las demás en minúsculas.

Tarea String 4:
Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena invertida.

Tarea String 5:
Solicitar al usuario que ingrese una cadena y un número, y mostrar en consola la cadena truncada en la posición del número ingresado.

Tarea String 6:
Solicitar al usuario que ingrese una cadena y mostrar en consola la cantidad de vocales que contiene.

Tarea String 7:
Solicitar al usuario que ingrese una cadena y una palabra, y mostrar en consola la cantidad de veces que la palabra aparece en la cadena.
*/

// ejercicio 1

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let actFav = prompt("Cual es su actividad favorita?");
let depFav = prompt("Cual es su deporte favorito?");

console.log("Su tarjeta de presentacion es la siguiente. \nNombre:", nombre, "\nEdad:", edad, "\nActividad Favorita:", actFav, "\nDeporte Favorito:", depFav);

// ejercicio 2

let cadenaTexto = prompt("Ingrese una cadena de texto");
console.log(cadenaTexto.toLowerCase());

// ejercicio 3

let cadenaTexto2 = prompt("Ingrese una cadena de texto");
console.log(cadenaTexto2.slice(0, 1).toUpperCase() + cadenaTexto2.slice(1, cadenaTexto2.length).toLowerCase());

// ejercicio 4

let cadenaInvertida = prompt("Ingrese una cadena de texto");
console.log(cadenaInvertida.split("").reverse().join(""));

// ejercicio 5

cadenaTexto2 = prompt("Ingrese una cadena de texto");
let numero = parseInt(prompt("Ingrese un numero al que truncará su cadena"));

console.log("Su cadena truncada es:", cadenaTexto2.slice(0, numero) + "...");

// ejercicio 6

cadenaTexto = prompt("Ingrese una cadena de texto");
let caracter = null;
let contador = 0;
for (let i = 0; i < cadenaTexto.length; i++) {
  caracter = cadenaTexto[i].toLowerCase();
  if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
    contador++;
  }
}

console.log("La cantidad de vocales que tiene la cadena de texto ingresada es:", contador);

// ejercicio 7

cadenaTexto2 = prompt("Ingrese una cadena de texto");
let palabraBuscada = prompt("Ingrese una palabra a buscar");

let palabra = cadenaTexto2.split(" ");
let contador2 = 0;
for (let i = 0; i < palabra.length; i++) {
  if (palabra[i] === palabraBuscada) {
    contador2++;
  }
}

console.log(`La palabra "${palabraBuscada}" aparece`, contador2, "veces en la cadena de texto ingresada");
