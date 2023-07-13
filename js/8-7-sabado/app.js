let cadena = prompt("ingrese una cadena");
const rango = /[aeiou]/gi;
let vocales = cadena.match(rango);
console.log("variable vocales:",vocales);