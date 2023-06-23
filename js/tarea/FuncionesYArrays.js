/*
Ejercicio 1: Suma de elementos
Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos sus elementos.
*/

    // function suma(a, b) {
    //     return a + b;
    // }
    // console.log(suma(8, 5));

/*
Ejercicio 2: Número mayor
Escribe una función que encuentre el número mayor en un arreglo de números.
*/

// let array = [5, 4, 1, 8, 7, 9, 3];
// function encontrarMayor() {
//     let mayor = 0;
        
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > mayor) {
//             mayor = array[i];
//         }
//     }
        
//     return mayor;
// }
// console.log(encontrarMayor(array));  

/*
Ejercicio 3: Eliminar duplicados
Escribe una función que tome un arreglo y elimine todos los elementos duplicados, devolviendo un nuevo arreglo sin duplicados.
*/

// let numeros = [1, 2, 3, 4, 2, 3, 5, 1];
// console.log(numeros);
// function eliminarDuplicados(arreglo) {
//     const arregloSinDuplicados = [];
  
//     for (let i = 0; i < arreglo.length; i++) {
//       if (arregloSinDuplicados.indexOf(arreglo[i]) === -1) {
//         arregloSinDuplicados.push(arreglo[i]);
//       }
//     }
  
//     return arregloSinDuplicados;
// }
// console.log(eliminarDuplicados(numeros));


/*
Ejercicio 4: Promedio de elementos
Escribe una función que calcule el promedio de todos los elementos en un arreglo de números.
*/

// let numeros = [7, 5, 7, 4, 6, 10, 9];
// function promedio(array) {
//     let x = 0;
//     for(let i = 0; i < array.length; i++) {
//         x += array[i];
//     }
//     const promedio = x / array.length;
//     return Math.floor(promedio);
// }
// console.log(promedio(numeros));

/*
Ejercicio 5: Ordenar arreglo
Escribe una función que ordene un arreglo de números de forma ascendente.
*/

// let numeros = [5, 3, 5, 4, 6, 10, 9];
// function ordenarAscendente(array) {
//     return array.sort((a, b) => a - b);
// }
// console.log(ordenarAscendente(numeros));

/*
Ejercicio 6: Filtrar pares
Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo solo con los números pares.
*/

// ( function() {
//     let num = [2, 5, 2, 4, 6, 4, 9, 1, 8];
//     const numPares = num.filter( p => p % 2 === 0);
//     console.log(numPares);
// })();

// let numPares = [];

    // for(let i = 0; i < array.length; i++) {
    //     if( array[i] % 2 === 0) {
    //         numPares.push(array[i]);
    //     }
    // }
    // return numPares;

/*
Ejercicio 7: Contar elementos
Escribe una función que tome un arreglo y un elemento, y devuelva el número de veces que ese elemento aparece en el arreglo.
*/


// let arr = [1, 1, 3, 5, 6, 3, 4, 5, 6, 7, 9, 5, 3, 2, 5, 6];
// ( function(array, palabra) {
//     let contador = 0;
//     let filtrar = array.filter( p => p === palabra);
//     contador += filtrar.length;
//     console.log(`Su elemento se encontro ${contador} veces`);
// })(arr, 5);



/*
Ejercicio 8: Concatenar arreglos
Escribe una función que tome dos arreglos y devuelva un nuevo arreglo que contenga todos los elementos de ambos arreglos.
*/

// let arr1 = [1, 2, 3];
// let arr2 = ["a", "b", "c"];
// function concat(array1, array2) {
//     const array3 = array1.concat(array2);
//     return array3;
// }

// console.log(concat(arr1, arr2));

/*
Ejercicio 9: Multiplicar elementos
Escribe una función que tome un arreglo de números y un factor, y devuelva un nuevo arreglo donde cada elemento sea multiplicado por ese factor.
*/

// let num = [1, 2, 3, 4, 5];
// function multiplicar(array, f) {
//     const resultado = [];
  
//     for (let i = 0; i < array.length; i++) {
//       resultado.push(array[i] * f);
//     }
  
//     return resultado;
//   }
  
// console.log(multiplicar(num, 5));

/*
Ejercicio 10: Elemento único
Escribe una función que encuentre el único elemento no repetido en un arreglo de números, donde todos los demás elementos aparecen al menos dos veces.
*/

// let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5];
// function numRep(array) {
//     for (let i = 0; i < array.length; i++) {
//       const elemento = array[i];
  
//       if (array.indexOf(elemento) === array.lastIndexOf(elemento)) {
//         return elemento;
//       }
//     }
  
//     return null;
// }
// console.log(numRep(numeros));

/*
Ejercicio 11: Buscar subcadena
Escribe una función que tome un arreglo de strings y una subcadena, y devuelva un nuevo arreglo con solo aquellos strings que contengan la subcadena.
*/

// let palabras = ["Hola", "Mundo", "JavaScript", "TypeScript", "Java"];
// function filtrar(array, subcadena) {
//   let resultado = array.filter( str => str.includes(subcadena));
  
//   return resultado;
// }

// console.log(filtrar(palabras, ""));


/*
Ejercicio 12: Invertir cadena
Escribe una función que tome una cadena de texto y la devuelva invertida.
*/

// let num = [1, 2, 3, 4, 5];
// console.log(num);
// ( function(array) {
//   array.reverse(array);
//   console.log(array);
// })(num);

/*
Ejercicio 13: Contar vocales
Escribe una función que tome una cadena de texto y devuelva el número de vocales que contiene.
*/

// let texto = prompt("Ingrese una cadena de texto");
// function contarVocales(cadena) {
//   let vocales = ["a", "e", "i", "o", "u"];
//   let array = cadena.toLowerCase().split('');
//   let contarVocales = 0;

//   array.forEach( caracter => {
//     if (vocales.includes(caracter)) {
//       contarVocales++;
//     }
//   });

//   return contarVocales;
// }

// console.log(contarVocales(texto));

/*
Ejercicio 14: Palíndromo
Escribe una función que determine si una cadena de texto es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda).
*/

// let texto = prompt("Ingrese una cadena de texto palíndromo");
// function esPalindromo(texto) {
//   let array = texto.toLowerCase().split('');
//   let minusculas = array.length;
  
//   for (let i = 0; i < minusculas / 2; i++) {
//     if (array[i] !== array[minusculas - 1 - i]) {
//       return false;
//     }
//   }
  
//   return true;
// }

// esPalindromo(texto) === true ? console.log("Es palíndromo"): console.log("No es palíndromo");;

/*
Ejercicio 15: Sumar matrices
Escribe una función que tome dos matrices bidimensionales y devuelva una nueva matriz que sea la suma de ambas matrices.
*/

// let num = [[1, 2, 3], [4, 5, 6]];
// let num2 = [[7, 8, 9], [10, 11, 12]];
// function sumarMatrices(m1, m2) {
//   var matrizSuma = m1.map( (fila, indiceFila) => fila.map( (elemento, indiceColumna) => elemento + m2[indiceFila][indiceColumna]));

//   return matrizSuma;
// }
// console.log(sumarMatrices(num, num2));

/*
Ejercicio 16: Filtrar por propiedades
Escribe una función que tome un arreglo de objetos y una propiedad, y devuelva un nuevo arreglo solo con aquellos objetos que tienen esa propiedad.
*/

// const personas = [
//     { nombre: "Sergio", edad: 25 },
//     { nombre: "Martin", ciudad: "Madrid" },
//     { nombre: "Lucas", edad: 30, profesion: "Ingeniero" },
//     { nombre: "Conty", ciudad: "Barcelona", profesion: "Abogada" }
// ];

// function filtrarObjetosPorPropiedad(array, propiedad) {
//     return array.filter( objeto => objeto.hasOwnProperty(propiedad));
// }

// console.log(filtrarObjetosPorPropiedad(personas, "profesion"));

/*
Ejercicio 17: Calcular edad promedio
Escribe una función que tome un arreglo de objetos con propiedades de "nombre" y "edad", y devuelva la edad promedio de todas las personas en el arreglo.
*/

// const personas = [
//     { nombre: "Sergio", edad: 20 },
//     { nombre: "Martin", edad: 30 },
//     { nombre: "Lucas", edad: 35 },
//     { nombre: "Conty",  edad: 25 },
//     { nombre: "Javier",  edad: 23 }
// ];

// function edad(array) {
//     const edades = array.map( persona => persona.edad );
//     const suma = edades.reduce( (acumulador, edad) => acumulador + edad, 0 );
//     const promedio = suma / edades.length;
//     return promedio;
// }

// console.log(edad(personas));

/*
Ejercicio 18: Buscar máximo por propiedad
Escribe una función que tome un arreglo de objetos con propiedades numéricas y una propiedad, y devuelva el objeto que tenga el valor máximo en esa propiedad.
*/

// const personas = [
//     { nombre: "Sergio", edad: 20 },
//     { nombre: "Martin", edad: 30 },
//     { nombre: "Lucas", edad: 35 },
//     { nombre: "Conty",  edad: 25 },
//     { nombre: "Javier",  edad: 23 }
// ];

// function mayor(array, prop) {
//     const mayor = array.reduce( (edadMax, edad) => edad[prop] > edadMax[prop] ? edad : edadMax);
//     return mayor;
//   }
  
// console.log(mayor(personas, "edad"));

/*
Ejercicio 19: Contar palabras repetidas
Escribe una función que tome una cadena de texto y devuelva un objeto que contenga cada palabra como propiedad y el número de veces que aparece como valor.
*/

// let texto = prompt("Ingrese una cadena de texto")

// function contar(cadena) {
//     const palabras = cadena.split(" ");
//     const contador = {};
    
//     palabras.forEach(palabra => {
//       contador[palabra] = (contador[palabra] || 0) + 1;
//     });
  
//     return contador;
// }

// console.log(contar(texto));

/*
Ejercicio 20: Calcular suma acumulada
Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo donde cada elemento sea la suma acumulada de los elementos anteriores.
*/

// let num = [1, 3, 5, 6, 2];
// function suma(array) {
//     const suma = array.reduce( (acumulador, edad) => acumulador + edad, 0 );
//     return suma;
// }
// console.log(suma(num));