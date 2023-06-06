/*Tarea String 4:
Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena invertida.*/

let texto = prompt("Ingresa una texto por favor")
let textoAlReves = texto.split("").reverse().join("");
alert(textoAlReves);

/*preguntarle a Martin si hay otra manera de hacerlo que no sea con array y si join es una buena opción a concat (que no se usa mucho)*/