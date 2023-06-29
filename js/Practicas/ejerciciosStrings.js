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




// Tarea String 2:
// Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena en minúsculas.

const cadena2 = prompt('Ingrese una cadena: ');
console.log(cadena2.toLowerCase());


// Tarea String 3:
// Solicitar al usuario que ingrese una cadena y mostrar en consola la primera letra en mayúscula y las demás en minúsculas.

const cadena3 = prompt('Ingrese una cadena: ');
console.log(cadena3.charAt(0).toUpperCase() + cadena3.slice(1));


// Tarea String 4:
// Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena invertida.

const cadena4 = prompt('Ingrese una cadena: ');
console.log(cadena4.split("").reverse().join(""));


// Tarea String 5:
// Solicitar al usuario que ingrese una cadena y un número, y mostrar en consola la cadena truncada en la posición del número ingresado.

const cadena5 = prompt('Ingrese una cadena de texto: ');
let numero5 = prompt('Ingrese un número: ');
if (numero5 > cadena5.length){
    console.log("El número ingresado es mayor a la longitud de la cadena");
}
console.log(cadena5.slice(numero5));


// Tarea String 6:
// Solicitar al usuario que ingrese una cadena y mostrar en consola la cantidad de vocales que contiene.

let cadena6 = prompt("Ingrese una cadena de texto:");
let contadorVocales = 0;
const vocales = "aáeéiíoóuú"
cadena6 = cadena6.toLowerCase();
for (let letra of cadena6) {
    if (vocales.includes(letra)) {
        ++contadorVocales;
    }
}
console.log('La cadena posee ', contadorVocales, ' vocales'); 


// Tarea String 7:
// Solicitar al usuario que ingrese una cadena y una palabra, y mostrar en consola la cantidad de veces que la palabra aparece en la cadena.

const cadena7 = prompt("Ingrese una cadena de texto:");
const cadenaBuscar = prompt("Ingrese una palabra:"); 

let arregloCadena = cadena7.split(" ");  
let contadorPalabra = 0; 1

for (let i = 0; i < arregloCadena.length; i++) {
    if (arregloCadena[i] === cadenaBuscar) {
        contadorPalabra++;
    }
}
if (contadorPalabra === 0) {
    console.log("La palabra ingresa no se encuentra dentro de la cadena");
}
else {
    console.log("La palabra se encuentra ", contadorPalabra, " veces dentro de la cadena");
}

