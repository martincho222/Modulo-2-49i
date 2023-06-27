// Tarea (fecha de entrega martes 27/6):

//  Ejercicio 1: Suma de elementos. LISTO
// Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos sus elementos.

//  Ejercicio 2: Número mayor. LISTO
// Escribe una función que encuentre el número mayor en un arreglo de números.

//  Ejercicio 3: Eliminar duplicados. LISTO
// Escribe una función que tome un arreglo y elimine todos los elementos duplicados, devolviendo un nuevo arreglo sin duplicados.

//  Ejercicio 4: Promedio de elementos. LISTO
// Escribe una función que calcule el promedio de todos los elementos en un arreglo de números.

//  Ejercicio 5: Ordenar arreglo. LISTO
// Escribe una función que ordene un arreglo de números de forma ascendente.

//  Ejercicio 6: Filtrar pares. LISTO
// Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo solo con los números pares.

//  Ejercicio 7: Contar elementos. LISTO
// Escribe una función que tome un arreglo y un elemento, y devuelva el número de veces que ese elemento aparece en el arreglo.

//  Ejercicio 8: Concatenar arreglos. LISTO
// Escribe una función que tome dos arreglos y devuelva un nuevo arreglo que contenga todos los elementos de ambos arreglos.

//  Ejercicio 9: Multiplicar elementos. LISTO
// Escribe una función que tome un arreglo de números y un factor, y devuelva un nuevo arreglo donde cada elemento sea multiplicado por ese factor.

//  Ejercicio 10: Elemento único. LISTO
// Escribe una función que encuentre el único elemento no repetido en un arreglo de números, donde todos los demás elementos aparecen al menos dos veces.

//  Ejercicio 11: Buscar subcadena.  LISTO
// Escribe una función que tome un arreglo de strings y una subcadena, y devuelva un nuevo arreglo con solo aquellos strings que contengan la subcadena.

//  Ejercicio 12: Invertir cadena. LISTO
// Escribe una función que tome una cadena de texto y la devuelva invertida.

//  Ejercicio 13: Contar vocales. LISTO
// Escribe una función que tome una cadena de texto y devuelva el número de vocales que contiene.

//  Ejercicio 14: Palíndromo. LISTO
// Escribe una función que determine si una cadena de texto es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda).

//  Ejercicio 15: Sumar matrices. LISTO
// Escribe una función que tome dos matrices bidimensionales y devuelva una nueva matriz que sea la suma de ambas matrices.

//  Ejercicio 16: Filtrar por propiedades. LISTO
// Escribe una función que tome un arreglo de objetos y una propiedad, y devuelva un nuevo arreglo solo con aquellos objetos que tienen esa propiedad.

//  Ejercicio 17: Calcular edad promedio. LISTO
// Escribe una función que tome un arreglo de objetos con propiedades de "nombre" y "edad", y devuelva la edad promedio de todas las personas en el arreglo.

//  Ejercicio 18: Buscar máximo por propiedad. LISTO
// Escribe una función que tome un arreglo de objetos con propiedades numéricas y una propiedad, y devuelva el objeto que tenga el valor máximo en esa propiedad.

//  Ejercicio 19: Contar palabras repetidas. (estoy con inconvenientes con este🙃)
// Escribe una función que tome una cadena de texto y devuelva un objeto que contenga cada palabra como propiedad y el
// número de veces que aparece como valor.

//  Ejercicio 20: Calcular suma acumulada. LISTO
// Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo donde cada elemento sea la suma acumulada de los elementos anteriores.

// DESAROLLO:

//  Ejercicio 1: Suma de elementos.
// Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos sus elementos.

// function sumar(a, b) {
//     return a + b
// }

// let resultado = sumar(10, 5);s
// console.log(`el resultado es ${resultado}`);

//  Ejercicio 2: Número mayor.

// MANERA 1
// Escribe una función que encuentre el número mayor en un arreglo de números.
// function mayor(a, b) {
//     return Math.max(a, b);
// }
// let array = [3, 5];
// resultado = mayor(...array);
// console.log(`${resultado}`);


//  Ejercicio 3: Eliminar duplicados.
// Escribe una función que tome un arreglo y elimine todos los elementos duplicados, devolviendo un nuevo arreglo sin duplicados.

// function quitarDuplicados(arreglo) {
//     let arregloEdit = arreglo.filter(function(elemento, indice) {
//         return arreglo.indexOf(elemento) === indice;
//     });
//     return arregloEdit;
// }

// arregloPrueba = [10, 5, 2, 5, 3, 10, 1];
// resultado = quitarDuplicados(arregloPrueba);

// console.log(`Arreglo original ${arregloPrueba}`);
// console.log(`Arreglo editado ${resultado}`);

//  Ejercicio 4: Promedio de elementos.
// Escribe una función que calcule el promedio de todos los elementos en un arreglo de números.

// function sacarPromedio(arreglo) {
//     let suma = arreglo.reduce(function(acumulador, numero) {
//         return acumulador + numero;
//     })
//     let promedio = suma / arreglo.length;
//     return promedio
// }
// notas = [5, 9, 8, 10, 5];
// resultado = sacarPromedio(notas);
// console.log(`Las notas ingresadas ${notas}`);
// console.log(`El promedio seria ${resultado}`);

//  Ejercicio 5: Ordenar arreglo.
// Escribe una función que ordene un arreglo de números de forma ascendente.

// function ordenarAsc(arreglo) {
//     let copiaArreglo = arreglo.slice();
//     let ordenados = copiaArreglo.sort();
//     return ordenados
// }
// let ejemplo = [5, 1, 3, 6, 4, 0]
// let resultado = ordenarAsc(ejemplo)
// console.log(`numero normal ${ejemplo}`);
// console.log(`ordenado ${resultado}`);

//  Ejercicio 6: Filtrar pares.
// Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo solo con los números pares.

// function filtrarPares(arreglo) {
//     let filtrados = arreglo.filter(function(numero) {
//         return numero % 2 === 0;
//     })
//     return filtrados;
// }
// let ejemplo = [5, 2, 10, 65, 8]
// let resultado = filtrarPares(ejemplo);
// console.log(`${ejemplo}`);
// console.log(`${resultado}`);

//  Ejercicio 7: Contar elementos.
// Escribe una función que tome un arreglo y un elemento, y devuelva el número de veces que ese elemento aparece en el arreglo.

// function contador(arreglo, comparador) {
//     let filtrados = arreglo.filter(function(elemento) {
//         return elemento === comparador;
//     })
//     let cantidad = filtrados.length;
//     return console.log(`el numero ${comparador} aparece en el arreglo [${arreglo}] ${cantidad} veces`);
// }

// let array = [10, 5, 2, 10, 5, 0]
// resultado = contador(array, 10);

//  Ejercicio 8: Concatenar arreglos.
// Escribe una función que tome dos arreglos y devuelva un nuevo arreglo que contenga todos los elementos de ambos arreglos.

// function concatenar(array1, array2) {
//     let concatenados = [...array1, ...array2]
//     return concatenados
// }
// let ej1 = [10, 5, 2, 1]
// let ej2 = [5, 6, 0, 2]
// console.log(concatenar(ej1, ej2));

//  Ejercicio 9: Multiplicar elementos.
// Escribe una función que tome un arreglo de números y un factor, y devuelva un nuevo arreglo donde cada elemento sea multiplicado por ese factor.

// function multiplicar(array, factor) {
//     operacion = array.map(function(elemento) {
//         return factor * elemento;
//     })
//     return operacion
// }

// let ej1 = [10, 5, 2, 1]
// let mult = 2
// console.log(multiplicar(ej1, mult));


//  Ejercicio 10: Elemento único.
// Escribe una función que encuentre el único elemento no repetido en un arreglo de números, donde todos los demás elementos aparecen al menos dos veces.

// function elementoUnico(arreglo) {
//     resultado = arreglo.filter(function(numero, indice, array) {
//         return array.indexOf(numero) === array.lastIndexOf(numero);
//     });
//     return resultado
// }

// ej1 = [10, 10, 1, 2, 2]
// console.log(elementoUnico(ej1));


//  Ejercicio 11: Buscar subcadena.
// Escribe una función que tome un arreglo de strings y una subcadena, y devuelva un nuevo arreglo con solo aquellos strings que contengan la subcadena.

// function filtrarArray(arrayString, subCadena) {
//     let filtrado = arrayString.filter(function(elemento) {
//         return elemento === subCadena;
//     });
//     return filtrado
// }

// let ej1 = ["perro", "gato", "raton", "oso"];
// let ej2 = "raton";
// console.log(filtrarArray(ej1, ej2));

//  Ejercicio 12: Invertir cadena.
// Escribe una función que tome una cadena de texto y la devuelva invertida.

// function revertir(string) {
//     let palabra = string.split("");
//     return palabra.reverse().join("");
// }

// let ej1 = "perro";
// console.log(revertir(ej1));

//  Ejercicio 13: Contar vocales.
// Escribe una función que tome una cadena de texto y devuelva el número de vocales que contiene.

// function contarVocales(string) {
//     let vocales = ["a", "e", "i", "o", "u"];
//     let palabraSeparada = string.toLowerCase().split("");
//     let arrayPalabra = palabraSeparada.filter(function(elemento) {
//         return vocales.includes(elemento);
//     });
//     vocalesUnidas = arrayPalabra.slice();
//     return `la palabra ${string} tiene ${vocalesUnidas.length} vocales`;
// }

// let ej1 = "Arte"
// console.log(contarVocales(ej1));

//  Ejercicio 14: Palíndromo.
// Escribe una función que determine si una cadena de texto es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda).

// function esPalindromo(palabra) {
//     let contador = 1;
//     let contadorNoEs = 0;
//     for (let i = 0; i < palabra.length; i++) {

//         let letra1 = palabra[i];
//         let letra2 = palabra[(i + palabra.length) - contador];
//         if (letra1.toLowerCase() === letra2.toLowerCase()) {
//             // console.log(`${letra1} y ${letra2} son iguales. i actual ${i}`);
//             // console.log(`contador en ${contador}`);
//         } else {
//             contadorNoEs--;
//         }
//         contador++;
//         contador++;
//         // lo pongo dos veces porque la primera iteracion necesito que sea asi, pero luego hay que sumar dos para que no se cancele contador con el indice

//     }

//     if (contadorNoEs < 0) {
//         console.log(`su palabra ${palabra} NO es un palindromo`);

//     } else { console.log(`su palabra ${palabra} es un PALINDROMO`); } {}

// }

// let ej1 = "perro";
// resultado = esPalindromo(ej1);


//  Ejercicio 15: Sumar matrices.
// Escribe una función que tome dos matrices bidimensionales y devuelva una nueva matriz que sea la suma de ambas matrices.


// function sumarArray(array1, array2) {
//     // tome de idea representarlos como [a,b][c,d]
//     let a = array1.slice(0, 1);
//     let b = array1.slice(1, 2);
//     let c = array2.slice(0, 1);
//     let d = array2.slice(1, 2);
//     let suma1 = parseInt(a) + parseInt(c);
//     let suma2 = parseInt(b) + parseInt(d);
//     resultado = suma1 + suma2;
//     console.log([suma1, suma2]);
// }

// let array1 = [1, 2]
// let array2 = [3, 4]

// console.log(sumarArray(array1, array2));

//  Ejercicio 16: Filtrar por propiedades.
// Escribe una función que tome un arreglo de objetos y una propiedad, y devuelva un nuevo arreglo solo con aquellos objetos que tienen esa propiedad.

// function tieneProp(array, propiedad) {
//     let filtrado = array.filter(function(elemento) {
//         return elemento.hasOwnProperty(propiedad);
//     })
//     return filtrado;
// }

// let remera1 = {
//     precio: 100,
//     color: "rojo",
// }
// let remera2 = {
//     precio: 150,
//     color: "verde",
// }
// let remera3 = {
//     precio: 150,
// }

// let remeras = [remera1, remera2, remera3];
// let color = "color"

// console.log(tieneProp(remeras, color));


//  Ejercicio 17: Calcular edad promedio.
// Escribe una función que tome un arreglo de objetos con propiedades de "nombre" y "edad", y devuelva la edad promedio de todas las personas en el arreglo.

// let persona1 = { nombre: "Gonzalo", edad: 25 }
// let persona2 = { nombre: "Severo", edad: 25 }
// let persona3 = { nombre: "Jose", edad: 24 }
// let persona4 = { nombre: "Emilio", edad: 29 }

// function sumarEdades(obj) {
//     let suma = 0;
//     for (i = 0; i < obj.length; i++) {
//         suma += obj[i].edad
//     }
//     return suma / obj.length;
// }

// let personas = [persona1, persona2, persona3, persona4]
// console.log(sumarEdades(personas));

//  Ejercicio 18: Buscar máximo por propiedad.
// Escribe una función que tome un arreglo de objetos con propiedades numéricas y una propiedad, y devuelva el objeto que tenga el valor máximo en esa propiedad.

// let persona1 = { nombre: "Gonzalo", edad: 25 }
// let persona2 = { nombre: "Severo", edad: 25 }
// let persona3 = { nombre: "Jose", edad: 24 }
// let persona4 = { nombre: "Emilio", edad: 29 }

// function cualEsMayor(obj) {

//     function mayor(array) {
//         return Math.max(...array);
//     }
//     arrayEdades = [];
//     for (i = 0; i < obj.length; i++) {
//         resultado = arrayEdades.push(obj[i].edad);
//     }
//     return console.log(mayor(arrayEdades));
// }

// let personas = [persona1, persona2, persona3, persona4]
// console.log(cualEsMayor(personas));


//  Ejercicio 20: Calcular suma acumulada.
// Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo donde cada elemento sea la suma acumulada de los elementos anteriores.


// function sumaAcumulada(arreglo) {
//     let resultado = []
//     let suma = 0;
//     for (i = 0; i < arreglo.length; i++) {
//         suma += arreglo[i];
//         resultado.push(suma);
//     }
//     return resultado;
// }

// ej1 = [1, 2, 10, 2]
// console.log(sumaAcumulada(ej1));