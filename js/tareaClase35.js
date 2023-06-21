// Tarea (fecha de entrega martes 27/6):

//  Ejercicio 1: Suma de elementos. LISTO
// Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos sus elementos.

//  Ejercicio 2: Número mayor. LISTO
// Escribe una función que encuentre el número mayor en un arreglo de números.

//  Ejercicio 3: Eliminar duplicados. LISTO
// Escribe una función que tome un arreglo y elimine todos los elementos duplicados, devolviendo un nuevo arreglo sin duplicados.

//  Ejercicio 4: Promedio de elementos. LISTO
// Escribe una función que calcule el promedio de todos los elementos en un arreglo de números.

//  Ejercicio 5: Ordenar arreglo.
// Escribe una función que ordene un arreglo de números de forma ascendente.

//  Ejercicio 6: Filtrar pares.
// Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo solo con los números pares.

//  Ejercicio 7: Contar elementos.
// Escribe una función que tome un arreglo y un elemento, y devuelva el número de veces que ese elemento aparece en el arreglo.

//  Ejercicio 8: Concatenar arreglos.
// Escribe una función que tome dos arreglos y devuelva un nuevo arreglo que contenga todos los elementos de ambos arreglos.

//  Ejercicio 9: Multiplicar elementos.
// Escribe una función que tome un arreglo de números y un factor, y devuelva un nuevo arreglo donde cada elemento sea multiplicado por ese factor.

//  Ejercicio 10: Elemento único.
// Escribe una función que encuentre el único elemento no repetido en un arreglo de números, donde todos los demás elementos aparecen al menos dos veces.

//  Ejercicio 11: Buscar subcadena.
// Escribe una función que tome un arreglo de strings y una subcadena, y devuelva un nuevo arreglo con solo aquellos strings que contengan la subcadena.

//  Ejercicio 12: Invertir cadena.
// Escribe una función que tome una cadena de texto y la devuelva invertida.

//  Ejercicio 13: Contar vocales.
// Escribe una función que tome una cadena de texto y devuelva el número de vocales que contiene.

//  Ejercicio 14: Palíndromo.
// Escribe una función que determine si una cadena de texto es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda).

//  Ejercicio 15: Sumar matrices.
// Escribe una función que tome dos matrices bidimensionales y devuelva una nueva matriz que sea la suma de ambas matrices.

//  Ejercicio 16: Filtrar por propiedades.
// Escribe una función que tome un arreglo de objetos y una propiedad, y devuelva un nuevo arreglo solo con aquellos objetos que tienen esa propiedad.

//  Ejercicio 17: Calcular edad promedio.
// Escribe una función que tome un arreglo de objetos con propiedades de "nombre" y "edad", y devuelva la edad promedio de todas las personas en el arreglo.

//  Ejercicio 18: Buscar máximo por propiedad.
// Escribe una función que tome un arreglo de objetos con propiedades numéricas y una propiedad, y devuelva el objeto que tenga el valor máximo en esa propiedad.

//  Ejercicio 19: Contar palabras repetidas.
// Escribe una función que tome una cadena de texto y devuelva un objeto que contenga cada palabra como propiedad y el
// número de veces que aparece como valor.

//  Ejercicio 20: Calcular suma acumulada.
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

// MANERA 2 (no la entiendo)

// array.forEach(function(elemento) {
//     if (elemento > mayor) {
//         mayor = elemento;
//     }
// })

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