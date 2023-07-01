/*
Ejercicio 1: Suma de elementos
Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos sus elementos.

Ejercicio 2: Número mayor
Escribe una función que encuentre el número mayor en un arreglo de números.

Ejercicio 3: Eliminar duplicados
Escribe una función que tome un arreglo y elimine todos los elementos duplicados, devolviendo un nuevo arreglo sin duplicados.

Ejercicio 4: Promedio de elementos
Escribe una función que calcule el promedio de todos los elementos en un arreglo de números.

Ejercicio 5: Ordenar arreglo
Escribe una función que ordene un arreglo de números de forma ascendente.

Ejercicio 6: Filtrar pares
Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo solo con los números pares.

Ejercicio 7: Contar elementos
Escribe una función que tome un arreglo y un elemento, y devuelva el número de veces que ese elemento aparece en el arreglo.

Ejercicio 8: Concatenar arreglos
Escribe una función que tome dos arreglos y devuelva un nuevo arreglo que contenga todos los elementos de ambos arreglos.

Ejercicio 9: Multiplicar elementos
Escribe una función que tome un arreglo de números y un factor, y devuelva un nuevo arreglo donde cada elemento sea multiplicado por ese factor.

Ejercicio 10: Elemento único
Escribe una función que encuentre el único elemento no repetido en un arreglo de números, donde todos los demás elementos aparecen al menos dos veces.

Ejercicio 11: Buscar subcadena
Escribe una función que tome un arreglo de strings y una subcadena, y devuelva un nuevo arreglo con solo aquellos strings que contengan la subcadena.

Ejercicio 12: Invertir cadena
Escribe una función que tome una cadena de texto y la devuelva invertida.

Ejercicio 13: Contar vocales
Escribe una función que tome una cadena de texto y devuelva el número de vocales que contiene.

Ejercicio 14: Palíndromo
Escribe una función que determine si una cadena de texto es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda).

Ejercicio 15: Sumar matrices
Escribe una función que tome dos matrices bidimensionales y devuelva una nueva matriz que sea la suma de ambas matrices.

Ejercicio 16: Filtrar por propiedades
Escribe una función que tome un arreglo de objetos y una propiedad, y devuelva un nuevo arreglo solo con aquellos objetos que tienen esa propiedad.

Ejercicio 17: Calcular edad promedio
Escribe una función que tome un arreglo de objetos con propiedades de "nombre" y "edad", y devuelva la edad promedio de todas las personas en el arreglo.

Ejercicio 18: Buscar máximo por propiedad
Escribe una función que tome un arreglo de objetos con propiedades numéricas y una propiedad, y devuelva el objeto que tenga el valor máximo en esa propiedad.

Ejercicio 19: Contar palabras repetidas
Escribe una función que tome una cadena de texto y devuelva un objeto que contenga cada palabra como propiedad y el
número de veces que aparece como valor.

Ejercicio 20: Calcular suma acumulada
Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo donde cada elemento sea la suma acumulada de los elementos anteriores.
*/


// Ejercicio 1: Suma de elementos
// Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos sus elementos.

const numeros1 = [1, 3, 4, 5];
function sumar (arreglo) {
    let suma = 0;
    for(let i = 0 ; i < arreglo.length ; i++){
        suma += arreglo[i];
    }
    return suma;
}
console.log("El resultado es " + sumar(numeros1));


// Ejercicio 2: Número mayor
// Escribe una función que encuentre el número mayor en un arreglo de números.

const numeros2 = [1, 4, 5, 7, 2];
function mayor (arreglo) {
    return Math.max(...arreglo);
}
console.log("El mayor es " + mayor(numeros2));


// Ejercicio 3: Eliminar duplicados
// Escribe una función que tome un arreglo y elimine todos los elementos duplicados, devolviendo un nuevo arreglo sin duplicados.

const numeros3 = [1, 4, 1, 5, 7, 2, 3, 1, 7];
console.log(numeros3);

function quitarDuplicados (arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = i + 1; j < arreglo.length; j++) {
            if (arreglo[i] === arreglo[j]) {
                arreglo.splice(j, 1);
            }
        }
    }
    return arreglo;
}
console.log("El arreglo sin repetidos es " + quitarDuplicados(numeros3))


// Ejercicio 4: Promedio de elementos
// Escribe una función que calcule el promedio de todos los elementos en un arreglo de números.

const numeros4 = [1, 4, 5, 7, 2];
function promedio (arreglo) {
    let suma = 0;
    for(let i = 0 ; i < arreglo.length ; i++){
        suma += arreglo[i];
    }
    return suma / arreglo.length;
}
console.log("El promedio del arreglo es", promedio(numeros4));


// Ejercicio 5: Ordenar arreglo
// Escribe una función que ordene un arreglo de números de forma ascendente.

const numeros5 = [1, 4, 5, 7, 2];
function ordenaArreglo (arreglo) {
    return arreglo.sort((a, b) => {
        return a - b;
    });
}
console.log("El arreglo ordenado es", ordenaArreglo(numeros5));


// Ejercicio 6: Filtrar pares
// Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo solo con los números pares.

const numeros6 = [1, 4, 5, 7, 2];
function numerosPares (arreglo) {
    for (let i = 0 ; i < arreglo.length ; i++){
        if (arreglo[i] % 2 !== 0){
            arreglo.splice(i,1);
            i--;
        }
    }
    return arreglo;
}
console.log("El arreglo ordenado con numeros pares es ", numerosPares(numeros6));


// Ejercicio 7: Contar elementos
// Escribe una función que tome un arreglo y un elemento, y devuelva el número de veces que ese elemento aparece en el arreglo.

const numeros7 = [1, 4, 5, 7, 2];
const valor = 1;
function valorBuscado (arreglo, valor) {
    let arregloFiltrado = arreglo.filter(function (elemento) {
        return elemento === valor;
    })
    return arregloFiltrado;
}
console.log("El valor buscado se encuentra en el arreglo ", valorBuscado(numeros7, valor).length, " veces");


// Ejercicio 8: Concatenar arreglos
// Escribe una función que tome dos arreglos y devuelva un nuevo arreglo que contenga todos los elementos de ambos arreglos.

const arreglo8_1 = [1, 4, 5, 7, 2];
const arreglo8_2 = [1, 4, 5, 7, 2];
function concantenarArreglo (arreglo8_1, arreglo8_2) {
    const arregloResultado = arreglo8_1;
    for (let i = 0; i < arreglo8_2.length; i++) {
        arregloResultado.push(arreglo8_2[i]);
    }
    return arregloResultado
}
console.log("El arreglo resultante es ", concantenarArreglo(arreglo8_1, arreglo8_2));


// Ejercicio 9: Multiplicar elementos
// Escribe una función que tome un arreglo de números y un factor, y devuelva un nuevo arreglo donde cada elemento sea multiplicado por ese factor.

const arreglo9 = [1, 4, 5, 7, 2];
const factor = 2;
function arregloMultiplicado (arreglo, valor) {
    const resultado = arreglo.map(function (elemento) {
        return elemento * valor;
    })
    return resultado;
}
console.log("El arreglo resultante es ", arregloMultiplicado(arreglo9, factor));


// Ejercicio 11: Buscar subcadena
// Escribe una función que tome un arreglo de strings y una subcadena, y devuelva un nuevo arreglo con solo aquellos strings que contengan la subcadena.

const palabras = ["Hola como va", "Hola", "Chau", "David", "Ey hola"];
const cadena11 = "hola";
const aux = palabras.map(function (elemento) {
    return elemento.toLowerCase();
});
const buscaString = function (arreglo, cadena11) {
    const aux = palabras.map(function (elemento) {
        return elemento.toLowerCase();
    });
    const arregloResultado = [];
    for (let i = 0; i < aux.length; i++) {
        if (aux[i].includes(cadena11)) {
            arregloResultado.push(arreglo[i]);
        }
    }
    return arregloResultado
}
console.log("El arreglo resultante es ", buscaString(palabras, cadena11));


// Ejercicio 12: Invertir cadena
// Escribe una función que tome una cadena de texto y la devuelva invertida.

const cadena12 = "Hola como estas"
const invierteCadena12 = function (cadena) {
    return cadena.split("").reverse().join("");
}
console.log("La cadena inverdita resultante es ", invierteCadena12(cadena12));


// Ejercicio 13: Contar vocales
// Escribe una función que tome una cadena de texto y devuelva el número de vocales que contiene.

const cadena13 = "Hola como estas";
function contarVocales (cadena) {
    let contador = 0;
    let vocales = "aáeéiíoóuú";
    for (let letra of cadena) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
console.log("La cadena tiene ", contarVocales(cadena13), " vocales");


// Ejercicio 14: Palíndromo
// Escribe una función que determine si una cadena de texto es un palíndromo(se lee igual de izquierda a derecha y de derecha a izquierda).

const cadena14 = prompt("Ingrese una cadena");
function invierteCadena (cadena) {
    return cadena.split("").reverse().join("");
}
if (cadena14 === invierteCadena(cadena14)) {
    console.log("La cadena es un palíndromo")
}
else {
    console.log("La cadena no es un palíndromo")
}


// Ejercicio 15: Sumar matrices
// Escribe una función que tome dos matrices bidimensionales y devuelva una nueva matriz que sea la suma de ambas matrices.

const matriz1 = [[1, 2], [3, 4]];
const matriz2 = [[3, 4], [3, 4]];
const sumarMatrices = function (matriz1, matriz2) {
    let resultado = [];
    let aux = [];
    for (let i = 0; i < matriz1.length; i++) {
        console.log("Matriz1[i]: ", matriz1[i])
        console.log("Matriz2[i]: ", matriz2[i])
        resultado[i] = []
        for (let j = 0; j < matriz1.length; j++) {
            resultado[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }
    return resultado;
}
console.log("La matriz resultante es ", sumarMatrices(matriz1, matriz2));


// Ejercicio 16: Filtrar por propiedades
// Escribe una función que tome un arreglo de objetos y una propiedad, y devuelva un nuevo arreglo solo con aquellos objetos que tienen esa propiedad.

const arreglo = [{ nombre: "Juan", Apellido: "Salomon", edad: 38 }, { nombre: "Pedro", Apellido: "Sal" }, { nombre: "Rodrigo", Apellido: "Bueno", edad: 15 }
];
const propiedad16 = "edad";
const buscaPropiedad = function (arreglo, propiedad) {
    const resultado = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].hasOwnProperty(propiedad)) {
            resultado.push(arreglo[i]);
        }
    }
    return resultado;
}


console.log("El arreglo resultante con la propiedad buscada es ", buscaPropiedad(arreglo, propiedad16));


// Ejercicio 17: Calcular edad promedio
// Escribe una función que tome un arreglo de objetos con propiedades de "nombre" y "edad", y devuelva la edad promedio de todas las personas en el arreglo.

const personas17 = [{ nombre: "Juan", edad: 15 }, { nombre: "Juan", edad: 15 }, { nombre: "Juan", edad: 15 }];
const promedioEdad = function (personas) {
    let suma = 0;
    for (let i = 0; i < personas.length; i++) {
        suma = suma + personas[i].edad;
    }
    return suma / personas.length;
}
console.log("El promedio de edad de las personas es ", promedioEdad(personas17));


// Ejercicio 18: Buscar máximo por propiedad
// Escribe una función que tome un arreglo de objetos con propiedades numéricas y una propiedad, y devuelva el objeto que tenga el valor máximo en esa propiedad.

const personas18 = [{ nombre: "Juan", edad: 15 }, { nombre: "Juan", edad: 35 }, { nombre: "Juan", edad: 11 }];
const propiedad18 = 'edad';
const mayorDeLaPropiedad = function (personas, propiedad) {
    let mayor = personas[0][propiedad];
    let indice = 0;
    for (let i = 0; i < personas.length; i++) {

        for (let j = i + 1; j < personas.length; j++) {
            if (personas[j][propiedad] > mayor) {
                mayor = personas[j][propiedad];
                indice = j;
            }
        }
    }
    return personas[indice];
}
console.log("El objeto con la propiedad mayor es", mayorDeLaPropiedad(personas18, propiedad18));


// Ejercicio 19: Contar palabras repetidas
// Escribe una función que tome una cadena de texto y devuelva un objeto que contenga cada palabra como propiedad y el
// número de veces que aparece como valor.

const cadena19 = prompt("Ingrese un texto");

function objetoPalabras(cadena) {
    const palabras = cadena.split(" ");
    const objetoContador = {};
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if (objetoContador.hasOwnProperty(palabra)) {
            objetoContador[palabra]++;
        } else {
            objetoContador[palabra] = 1;
        }
    }
    return objetoContador;
}

console.log("El objeto resultante es: ", objetoPalabras(cadena19));


// Ejercicio 20: Calcular suma acumulada
// Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo donde cada elemento sea la suma acumulada de los elementos anteriores.

const numeros20 = [1, 2, 3, 4, 5, 6];
const acumulado = (arreglo) => {
    let acumulador = [];
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma = suma + arreglo[i];
        acumulador.push(suma);
    }
    return acumulador;
}

console.log("El arreglo resultante es: ", acumulado(numeros20));