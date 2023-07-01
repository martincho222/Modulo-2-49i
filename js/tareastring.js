
//La Escuela Café de las 3am solicita un sistema, donde le permita a sus estudiantes presentarse de una manera más interactiva y eficiente, por eso deciden acudir a un programador para crear un sistema, en el cual se podrá ingresar el nombre, edad, actividad favorita y deporte favorito en una tarjeta de presentación predeterminada.

alert("bienvenidos a La Escuela Café de las 3am, por favor presentate!: ");
let nombreAlumno = prompt("Ingrese su nombre:");
let edad = prompt("Ingrese su edad:");
let actividadFavorita = prompt("Ingrese su actividad favorita:");
let deporteFavorito = prompt("Ingrese su deporte favorito:");



//Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena en minúsculas.

let resenia = prompt("¿Que experiencia deseas llevarte de estos meses?");
console.log(resenia.toLowerCase());



//Solicitar al usuario que ingrese una cadena y mostrar en consola la primera letra en mayúscula y las demás en minúsculas.

let cadenaUnoMayusc = prompt("¿De que localidad eres?");
let extrae = cadenaUnoMayusc.slice(0,1).toUpperCase();
let concatenado = extrae.concat(cadenaUnoMayusc.slice(1));
console.log(concatenado);




//Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena invertida.

concatenado = concatenado.split("").reverse();
console.log(concatenado.join("")); // El método join() une todos los elementos de una matriz


//Solicitar al usuario que ingrese una cadena y un número, y mostrar en consola la cadena truncada en la posición del número ingresado.

let cadenaExtensa = prompt("ingrese una cadena para buscar:");
let largoCadena = cadenaExtensa.length;
let numeroBuscar = prompt(`Ingrese un numero entre 0 y ${largoCadena-1} para extraer`);
console.log(cadenaExtensa.slice(numeroBuscar));



//Solicitar al usuario que ingrese una cadena y mostrar en consola la cantidad de vocales que contiene.

let cadenaingresada = prompt("ingrese una cadena de texto y le dieremos cuantas vocale tiene");

let contador = 0;

let cadenaAclonar = cadenaingresada.toLowerCase();

for (i=0;i<cadenaAclonar.length;i++){
     if(cadenaAclonar[i]=="a" || cadenaAclonar[i]=="e" || cadenaAclonar[i]=="i" || cadenaAclonar[i]=="o" || cadenaAclonar[i]=="u"){
        contador += 1
     }

 }

console.log(`el string ingresado tiene ${contador} vocales`);



//Solicitar al usuario que ingrese una cadena y una palabra, y mostrar en consola la cantidad de veces que la palabra aparece en la cadena.

var cadena = prompt("Ingresa una cadena:");
var palabra = prompt("Ingresa una palabra:");
cadena = cadena.toLowerCase();
palabra = palabra.toLowerCase();
// var contador = 0;


// var posicion = cadena.indexOf(palabra);

// while (posicion !== -1) {
//   contador++;
//   posicion = cadena.indexOf(palabra, posicion + 1);
// }


console.log(`la palabra ${palabra} aparece ${contador} veces en el string "${cadena}"`);
