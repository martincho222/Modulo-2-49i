/*Tarea String 3:
Solicitar al usuario que ingrese una cadena y mostrar en consola la primera letra en mayúscula y las demás en minúsculas.
*/

let nombre = prompt("Ingresa tu nombre en cualquier formato (mayusculas, minusculas o variado) voy a transformarlo para que la primera letra este en mayúsculas y lo demas en minúsculas");
let nombreMin = nombre.toLowerCase();
let inicial = nombreMin.slice(0, 1);
let inicialMayus = inicial.toUpperCase();
let nombreTransformado = inicialMayus + nombreMin.slice((1))
console.log("Tu nombre es " + nombreTransformado);
alert("Tu nombre es " + nombreTransformado);