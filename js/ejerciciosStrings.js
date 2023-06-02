/*
1. Solicitar al usuario que ingrese un nombre y apellido y concatenarlos en una unica cadena
usar un prompt para obtener esos datos
2. Solicitar al usuario que ingrese una cadena de texto y mostrar en consola la longitud de la misma.
3. Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena en mayusculas.


*/

// punto 1
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
console.log("Su nombre completo es:", nombre + " " + apellido); // clg("${variable}")

// punto 2
let texto = prompt("Ingrese una cadena de texto");
console.log("La longitud de su cadena es: " + texto.length);

// punto 3
let texto2 = prompt("Ingrese otra cadena de texto");
console.log("La cadena en mayusculas es: ", texto2.toUpperCase());
