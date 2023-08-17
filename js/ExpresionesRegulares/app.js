//Expresiones regulares

//creamos una instancia de regexp
// const expresion = new RegExp();

//sintaxis literal
//Coincidencia básica

// const string = "Buenas noches, como estan?"
// const patron = /estan/;
// console.log(patron.test(string));

//Coincidencia de múltiples opciones
// const texto = "Hola Pinky, te extrañamos";
// const patron = /hola|adios/;

// console.log(patron.test(texto.toLowerCase()));

//Cuantificadores
// const texto = "No pisen el, por que habra tabla";
// const patron = /main?/;

// console.log(patron.test(texto));

// clases de caracteres []

// const text = "Pinky va a estar el sabado";
// const patron = /[aeiou]/
// console.log(patron.test(text));

// Metacaracteres y secuencias de escape

// const texto = "Hola, como estan?";
// const patron = /\?/;
// console.log(patron.test(texto));

// Métodos

// test

// const textoTest = "El que dice Java, hace 20 ejercicios mas";
// const patron = /Java/;
// console.log(patron.test(textoTest)); // output = true


// exec 
// const textExec = "Hola, como estan?";
// const patron = /estan/;
// console.log(patron.exec(textExec));

// match
// const textMatch = "El sabado va a sonar peso pluma en el break";
// const patron = /pluma/;
// console.log(textMatch.match(patron));

//replace

// const textoToReplace = "Hola a todos";
// const patron = /todos/;
// const nuevoTexto = textoToReplace.replace(patron, "todes");
// console.log(nuevoTexto);

// search

// const texto = "jueguense con una oracion";
// const patron = /oracion/;
// console.log(texto.search(patron))

// Patrones o Modificadores

// g(global)

// const texto = "hola, hola, hola, hola";
// const patron = /hola/g;
// console.log(texto.match(patron));

// i(ignore case)

// const texto = "Hola, hola, hola, hola";
// const patron = /hola/i;
// console.log(patron.test(texto));

// m(multiline / multilinea)

// const texto = `Linea
//     Linea
//     Linea
// `
// const patron = /Linea/m;
// console.log(patron.test(texto));


//Rangos, cuantificadores, anclas y metacaracteres básicos

// Rangos [a-z]

// const texto = "AVIONCITO DE ROLLING";
// const patron = /[a-z]/;
// console.log(patron.test(texto));

// Cuantificadores {n}, {n,}, {n,m}

// const texto = "hola, holaaa, hola"
// const patron = /hol?a/;
// console.log(patron.test(texto));

// Anclas ^, $

// const texto = "no se nos ocurre ningun texto";
// const patron = /^se/;
// console.log(patron.test(texto));

//Metacaracteres

const texto = "Ponganse las pilas para el proximo proyecto. ";
const patron = /proyecto./;
console.log(patron.test(texto));


// Ejemplos

// Validar contraseñas

// const validarContrasena = (contrasena) => {
//     /*
//     contraseña cumple con los siguientes criterios:
//         - Tiene al menos una letra minúscula.
//         - Tiene al menos una letra mayúscula.
//         - Tiene al menos un dígito numérico.
//         - Tiene una longitud mínima de 8 caracteres.
    
//     */
//     const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//     return patron.test(contrasena);

// }
// console.log(validarContrasena("Abcd1234"));
// console.log(validarContrasena("abc123"));

//validar email

// const validarEmail = (email) => {
//     const patron = /^[^\s@!#$%^&]+@[^\s@\d]+\.[^\s@]+$/;

//     return patron.test(email);
// }

// console.log(validarEmail("martin123@gmail.com"));
// console.log(validarEmail("martin!123@gmail.com"));