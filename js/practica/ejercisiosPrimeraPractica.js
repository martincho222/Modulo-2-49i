// // Tarea String 1:
// // La Escuela Café de las 3am solicita un sistema, donde le permita a sus estudiantes presentarse de una manera más interactiva y eficiente, por eso deciden acudir a un programador para crear un sistema, en el cual se podrá ingresar el nombre, edad, actividad favorita y deporte favorito en una tarjeta de presentación predeterminada.

// alert("bienvenidos a La Escuela Café de las 3am, por favor presentate!: ");
// let nombreAlumno = prompt("Ingrese su nombre:");
// let edad = prompt("Ingrese su edad:");
// let actividadFavorita = prompt("Ingrese su actividad favorita:");
// let deporteFavorito = prompt("Ingrese su deporte favorito:");


// //  Tarea String 2:
// // Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena en minúsculas.

// let resenia = prompt("¿Que experiencia deseas llevarte de estos meses?");
// console.log(resenia.toLowerCase());


// //  Tarea String 3:
// // Solicitar al usuario que ingrese una cadena y mostrar en consola la primera letra en mayúscula y las demás en minúsculas.

// let cadenaUnoMayusc = prompt("¿De que localidad eres?");
// let extrae = cadenaUnoMayusc.slice(0,1).toUpperCase();
// let concatenado = extrae.concat(cadenaUnoMayusc.slice(1));
// console.log(concatenado);



// //  Tarea String 4:
// // Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena invertida.

// concatenado = concatenado.split("").reverse();
// console.log(concatenado.join("")); // El método join() une todos los elementos de una matriz

// //  Tarea String 5:
// // Solicitar al usuario que ingrese una cadena y un número, y mostrar en consola la cadena truncada en la posición del número ingresado.

// let cadenaExtensa = prompt("ingrese una cadena para buscar:");
// let largoCadena = cadenaExtensa.length;
// let numeroBuscar = prompt(`Ingrese un numero entre 0 y ${largoCadena-1} para extraer`);
// console.log(cadenaExtensa.slice(numeroBuscar));


// //  Tarea String 6:
// // Solicitar al usuario que ingrese una cadena y mostrar en consola la cantidad de vocales que contiene.



// //  Tarea String 7:
// // Solicitar al usuario que ingrese una cadena y una palabra, y mostrar en consola la cantidad de veces que la palabra aparece en la cadena.



// //  Tarea Number 1:
// // Usando métodos matemáticos, ingresar 3 números:
// // ● Indicar cual es el mayor.
// // ● Indicar cual es el menor.
// // ● Obtener la raíz cuadrada del segundo número.

// let numeroUno = parseInt(prompt("ingrese un numero:"));
// let numeroDos = parseInt(prompt("ingrese otro numero:"));
// let numMax
// let numMin

// if (numeroUno > numeroDos) {
// 	numMax = numeroUno;
// 	numMin = numeroDos;
// } else {
// 	numMax = numeroDos;
// 	numMin = numeroUno;
// }

// console.log(`El numero máximo es el ${numMax} y el numero minimo es ${numMin}.
// La raíz cuadra de ${numeroDos} es ${Math.sqrt(numeroDos)}`)


// //  Tarea Number 2:
// // Solicitar al usuario que ingrese dos números y mostrar en consola su suma.

// let numeroUno = parseInt(prompt("ingrese un numero:"));
// let numeroDos = parseInt(prompt("ingrese otro numero:"));

// console.log(`La suma de ${numeroUno} y  ${numeroDos} es ${numeroUno+numeroDos}`);

// //  Tarea Number 3:
// // Solicitar al usuario que ingrese un número y mostrar en consola si es par o impar.

// let numeroPar = parseInt(prompt("ingrese un numero:"));

// if(numeroPar%2 === 0){
// 	console.log(`el numero ${numeroPar} es par`);
// }else{
// 	console.log(`el numero ${numeroPar} es impar`);
// }



// //  Tarea Number 4:
// // Generar un número aleatorio entre 1 y 100 y mostrarlo en consola.

// let numAleteatorio = Math.round(Math.random()*100);
// console.log(numAleteatorio);



// //  Tarea Number 5:
// // Solicitar al usuario que ingrese un número y mostrar en consola su valor absoluto.

// let numAbs = parseInt(prompt("ingrese un numero:"));
// console.log(`La valor absoluto de ${numAbs} es ${Math.abs(numAbs)}`);

// //  Tarea Number 6:
// // Solicitar al usuario que ingrese un número y mostrar en consola su raíz cuadrada.

// let numeroRaiz = parseInt(prompt("ingrese un numero:"));
// console.log(`La raiz cuadrada de ${numeroRaiz} es ${Math.sqrt(numeroRaiz)}`);

// //  Tarea Number 7:
// // Solicitar al usuario que ingrese un número y mostrar en consola su potencia al cuadrado.

// let numeroPotencia = parseInt(prompt("ingrese un numero:"));
// console.log(`La potencia cuadrada de ${numeroPotencia} es ${Math.pow(numeroPotencia , 2)}`);


// //  Tarea Number 8:
// // Solicitar al usuario que ingrese un número y mostrar en consola si es positivo, negativo o cero.

// let numeroCompara = parseInt(prompt("ingrese un numero:"));

// if (numeroCompara > 0) {
// 	console.log(`${numeroCompara} es positivo`);
// }else if (numeroCompara < 0) {
// 	console.log(`${numeroCompara} es negativo`);
// }else {
// 	console.log(`${numeroCompara} es neutro`);
// }


// //  Tarea Number 9:
// // Solicitar al usuario que ingrese dos números y mostrar en consola el mayor de ellos.

// let numeroUno = parseInt(prompt("ingrese un numero:"));
// let numeroDos = parseInt(prompt("ingrese otro numero:"));
// let numMax
// let numMin

// if (numeroUno > numeroDos) {
// 	numMax = numeroUno;
// 	numMin = numeroDos;
// } else {
// 	numMax = numeroDos;
// 	numMin = numeroUno;
// }

// console.log(`El numero máximo es el ${numMax}`)

// //  Tarea Number 10:
// // Solicitar al usuario que ingrese un número y mostrar en consola si es entero o decimal.

// let numeroDecimal = prompt("ingrese un numero:");
// let numeroEntero = parseInt(numeroDecimal);

// if(numeroEntero != numeroDecimal) {
// 	console.log("es decimal")
// }else {
// 	console.log("es entero")
// }


// //  Tarea Number 11:
// // Generar un número aleatorio entre dos valores ingresados por el usuario y mostrarlo en consola.

// let rangemin = parseInt(prompt("ingrese el rango minimo"));
// let rangemax = parseInt(prompt("ingrese el rango maximo"));

// console.log(Math.round(Math.random() * (rangemax - (rangemin+1)) + (rangemin+1)));