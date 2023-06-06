/*Solicitar al usuario que ingrese una cadena y mostrar en consola la cantidad de vocales que contiene.*/

let texto = prompt("Ingresa un texto y te diré cuantas vocales tiene🧙🏻‍♂️");
let textoSoloVocales = texto.split(/[^aeiou]/gi).join("");
let cantidadVocales = textoSoloVocales.length;
console.log("Este texto tiene " + cantidadVocales + " vocales");
alert("Este texto tiene " + cantidadVocales + " vocales");


/*explicacion de (/[^aeiou]/gi)

/: Delimitadores de inicio y fin de la expresión regular.
[^aeiou]: El ^ dentro de los corchetes ([]) indica que se debe negar cualquier carácter que se encuentre dentro del rango especificado. En este caso, se niegan todas las vocales (a, e, i, o, u).
g: Modificador "global". Con este modificador, la expresión regular buscará todas las coincidencias en lugar de detenerse en la primera coincidencia.
i: Modificador "ignore case" (ignorar mayúsculas y minúsculas). Con este modificador, la expresión regular considerará tanto las vocales en minúsculas como en mayúsculas.
*/