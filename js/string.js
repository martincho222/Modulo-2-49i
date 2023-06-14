/*String 1:
La Escuela Café de las 3am solicita un sistema, donde le permita a sus estudiantes presentarse de una manera más interactiva y eficiente, por eso deciden acudir a un programador para crear un sistema, en el cual se podrá ingresar el nombre, edad, actividad favorita y deporte favorito en una tarjeta de presentación predeterminada.
*/
/*
const nombre = prompt("¿Cual es tu nombre?");

const edad = prompt("¿Cual es tu edad?");

const actividadFavorita = prompt("Ingrese su actividad favorita:");

const deporteFavorito = prompt("Ingrese su deporte favorito:");

console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años, mi actividad favorita es ${actividadFavorita} y mi deporte favorito ${deporteFavorito}`)
*/
/*String 2:
Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena en minúsculas.
*/
/*
const cadena = prompt("Ingrese una cadena");
console.log(cadena.toLocaleLowerCase())
*/
/*String 3:
Solicitar al usuario que ingrese una cadena y mostrar en consola la primera letra en mayúscula y las demás en minúsculas.
*/
/*
const cadena = prompt("Ingrese una cadena:");


const primeraLetraMayuscula = cadena.charAt(0).toUpperCase();


const restoCadenaMinuscula = cadena.slice(1).toLowerCase();


const resultado = primeraLetraMayuscula + restoCadenaMinuscula;


console.log(resultado);
*/
/*String 4:
Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena invertida.
*/

/*
const cadena = prompt("Ingrese una cadena:");
const invertirCadena = cadena.split("").reverse().join("")

console.log(invertirCadena)
*/

/*String 5:
Solicitar al usuario que ingrese una cadena y un número, y mostrar en consola la cadena truncada en la posición del número ingresado.
*/
/*
const cadena = prompt("Ingrese una cadena:");

const numero = prompt("Ingrese un numero:");

const truncarCadena = cadena.slice(0, numero)

console.log(truncarCadena)
*/

/*String 6:
Solicitar al usuario que ingrese una cadena y mostrar en consola la cantidad de vocales que contiene.
*/

/*
const cadena = prompt("Ingrese una cadena:");
const vocales = 'aeiouAEIOU';
let cantidadVocales = 0;

for (let i = 0; i < cadena.length; i++) {
  if (vocales.includes(cadena[i])) {
    cantidadVocales++;
  }
}

console.log(`La cadena "${cadena}" contiene ${cantidadVocales} vocales.`);
*/

/*String 7:
Solicitar al usuario que ingrese una cadena y una palabra, y mostrar en consola la cantidad de veces que la palabra aparece en la cadena.
*/

/*
const cadena = prompt("Ingrese una cadena:");

const palabra = prompt("Ingrese una palabra:");

const buscarPalabra = cadena.toLowerCase().split(" ")

const cantidad = buscarPalabra.filter(function(pal) {
    return pal.includes(palabra.toLowerCase());
  }).length;

console.log(`La palabra ${palabra} se repite ${cantidad} veces`)
*/