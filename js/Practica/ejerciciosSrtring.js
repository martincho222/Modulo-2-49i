/*
    1. Solicitar al usuario que ingrese su nombre y apellido, y concatenarlos en una única cadena. 
*/

// let nombre = prompt("Ingresa tu nombre");
// let apellido = prompt("Ingresa tu apellido");
// let nombreCompleto = nombre + ' ' + apellido;

// console.log(nombre);
// console.log(apellido);
// console.log("Tu nombre completo es: " + nombreCompleto);


/*
    2. Solicitar al usuario que ingrese una cadena y mostrar en consola la longitud de la misma.
*/

// let cadena = prompt('Ingrese una cadena de texto');
// console.log("La longitud de la cadea es: " + cadena.length);


/*
    3. Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena en mayúsculas.
*/

// let cadena = prompt("ingrese una cadena");

// console.log("la cadena en mayuscula es " + cadena.toUpperCase());


/*
Tarea:

 Tarea String 1:
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
/* Ejercicio 1 

let nombre = prompt ("Escriba su nombre");
let edad = prompt ("Escriba su edad");
let actividadFavorita = prompt ("Escriba su actividad favorita");
let deporteFavorito = prompt ("Escriba su deporte favorito");

console.log(nombre);
console.log(edad);
console.log(actividadFavorita);
console.log(deporteFavorito);
console.log("Su tarjeta de presentacion es la siguiente: \nNombre:", nombre, "\nEdad:", edad, "\nActividad Favorita:", actividadFavorita, "\nDeporte Favorito:", deporteFavorito); */

/* Ejercicio 2 

let cadena = prompt ("Inserte su texto en mayuscula")
console.log("Su texto en minuscula es: " + cadena.toLowerCase()) */

/* Ejercicio 3 

let cadena2 = prompt ("Escriba un texto en minuscula") 
console.log(cadena2.slice(0,1).toUpperCase() + cadena2.slice(1,cadena2.length).toLocaleLowerCase())*/

/* Ejercicio 4 

let cadena3 = prompt ("Ingrese un texto");
console.log(cadena3.split("").reverse().join(""));*/

/* Ejercicio 5 

const cadena = prompt ("Escriba una oracion");
let numero = prompt ("Elija un numero")
if (numero > cadena.length) {
    console.log("El numero es mayor a la longitud de la cadena")
}
console.log(cadena.slice(numero)); */


// // /* Ejercicio 6 

// let cadena = prompt ("Ingrese una cadena de texto:");
//  let contadorVocales=0;
//  const vocales="aáeéiíoóuú"
//  cadena = cadena.toLowerCase();
//  for (let letra of cadena){
//      if (vocales.includes(letra) )
//          ++contadorVocales;
//      }
//  }

//  console.log('La cadena posee ', contadorVocales, ' vocales');

// OPCION 2 
// let cadena = prompt ("Ingrese un texto");

// function contarVocales(cadena) {
//     cadena = cadena.toLowerCase();
//     let contador = 0;
//     const vocales = [ "a", "e", "i", "o","u"];
//     for (let i = 0 ; i < cadena.length; i++) {
//     let letras = cadena[i];
//     if (vocales.includes(letras)){
//         contador ++
//     }
// }
//     return contador;
// }

// console.log(contarVocales(cadena));

// EJERCICIO 7
// let cadena = prompt ("Ingrese una cadena de texto");
// let palabra = prompt ("Escriba la palabra a buscar");


// function buscarPalabra(cadena) {
//     cadena = cadena.toLowerCase();
//     let cadenaArray = cadena.split (" ");
//     let contador = 0
//     for (let i = 0 ; i < cadenaArray.length; i++ ) {   
//     if (cadenaArray[i]===palabra){
//         contador++;
//         console.log("Se encontró ", contador, "vez/veces la palabra buscada");  
//     }
    
// }
// return contador;
// }
// console.log(buscarPalabra(cadena));