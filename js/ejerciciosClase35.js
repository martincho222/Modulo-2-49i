// Ejercicio 1

let arrayNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 44, 33, 2, 3, 3, 3, 3];
let sumador = 0;

function SumaElementos(arrayNumbers) {
  for (let i = 0; i < arrayNumbers.length; i++) {
    sumador += i;
  }
  console.log(`La suma de los elementos de [${arrayNumbers}] es ${sumador}`);
}

SumaElementos(arrayNumbers);

// Ejercicio 2

let majorNumber = null;

function getMajorNumber(arrayNumbers) {
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] > majorNumber) {
      majorNumber = arrayNumbers[i];
    }
  }
  console.log(`El mayor de los elementos de [${arrayNumbers}] es ${majorNumber}`);
}

getMajorNumber(arrayNumbers);

// Ejercicio 3

let arrayNumbersNotDuplicate = [];

function deleteDuplicate(arrayNumbers) {
  return arrayNumbers.filter((edad, indice, arreglo) => arreglo.indexOf(edad) === indice);
}

arrayNumbersNotDuplicate = deleteDuplicate(arrayNumbers);
console.log(`El arreglo sin duplicados es [${arrayNumbersNotDuplicate}]`);

// Ejercicio 4

function getAverage(arrayNumbers) {
  let suma = arrayNumbers.reduce(function (acumulador, elemento) {
    return acumulador + elemento;
  }, 0);
  let average = parseInt(suma) / parseInt(arrayNumbers.length);
  console.log(`El promedio de los elementos de [${arrayNumbers}] es ${average}`);
}

getAverage(arrayNumbers);

// Ejercicio 5

function ordenarArregloAscendentemente() {
  arrayNumbers.sort((a, b) => a - b);
}

ordenarArregloAscendentemente();
console.log(`El arreglo luego de ser ordenado queda [${arrayNumbers}]`);

// Ejercicio 6

let arregloPares = arrayNumbers.filter(function (elemento) {
  return elemento % 2 == 0;
});
console.log(`El arreglo [${arrayNumbers}] solo con los numeros pares queda [${arregloPares}]`);

// Ejercicio 7

let buscado = 2;

function contarCoincidencias(array, buscado) {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === buscado) {
      contador++;
    }
  }
  console.log(`La cantidad de veces que ${buscado} aparece en [${array}] es ${contador}`);
}

contarCoincidencias(arrayNumbers, buscado);

// Ejercicio 8

let arrayFloat = [1.1, 1.2, 2.1, 2.3, 2.5];

const nuevoArreglo = function (array1, array2) {
  console.log(`[${array1}] concatenado con [${array2}] nos devuelve [${array1.concat(array2)}]`);
};

nuevoArreglo(arrayNumbers, arrayFloat);

// Ejercicio 9

let factor = 3;

let arrayMultiplicado = arrayNumbers.map(function (elemento) {
  return elemento * factor;
});

// Ejercicio 11

function filtrarStrings(arr, subcadena) {
  return arr.filter(str => str.includes(subcadena));
}
let strings = ["hola", "adios", "buenos días", "buenas tardes"];
let subcadena = "buen";
let resultado = filtrarStrings(strings, subcadena);
console.log(resultado);

// Ejercicio 12

let cadenaDeTexto = prompt("Ingrese una cadena");

function invertirCadena(cadena) {
  console.log(`Ud. ingresó la cadena ${cadena}, dicha cadena invertida es ${cadena.split("").reverse().join("")}`);
}
invertirCadena(cadenaDeTexto);

// Ejercicio 13

function contarVocales(cadena) {
  const cadenaMinusculas = cadena.toLowerCase();
  const vocales = ["a", "e", "i", "o", "u"];
  let contadorVocales = 0;
  for (let i = 0; i < cadenaMinusculas.length; i++) {
    const caracter = cadenaMinusculas[i];
    if (vocales.includes(caracter)) {
      contadorVocales++;
    }
  }
  console.log(`La cantidad de vocales que hay en ${cadena} es ${contadorVocales}`);
}

contarVocales(cadenaDeTexto);

// Ejercicio 14

function esPalindromo(cadena) {
  const cadenaFormateada = cadena.toLowerCase().replace(/ /g, "");

  const reverso = cadenaFormateada.split("").reverse().join("");

  return cadenaFormateada === reverso;
}

// Ejercicio 15

function sumarMatrices(matriz1, matriz2) {
  const filas = matriz1.length;
  const columnas = matriz1[0].length;
  if (filas !== matriz2.length || columnas !== matriz2[0].length) {
    throw new Error("Las matrices deben tener las mismas dimensiones");
  }
  const matrizSuma = [];
  for (let i = 0; i < filas; i++) {
    matrizSuma[i] = [];
    for (let j = 0; j < columnas; j++) {
      matrizSuma[i][j] = matriz1[i][j] + matriz2[i][j];
    }
  }
  return matrizSuma;
}

// Ejercicio 16

let arrayRepeat = [0, 0, 1, 1, 2, 3, 3, 4, 4];

function EncuentraUnico(array) {
  let elementoActual = null;
  let elementoComparable = null;
  let apareceDoble;
  for (let i = 0; i < array.length; i++) {
    apareceDoble = false;
    elementoActual = array[i];
    for (let j = i + 1; j < array.length; j++) {
      elementoComparable = array[j];
      if (elementoActual === elementoComparable) {
        apareceDoble = true;
      }
    }
    if (!apareceDoble) {
      console.log(`El elemento ${elementoActual} solo aparece una vez`);
    }
  }
}

EncuentraUnico(arrayRepeat);

// Ejercicio 17

let peopleArrayObjects = [
  { nombre: "Francisco", edad: 20 },
  { nombre: "Juana", edad: 17 },
  { nombre: "Agustina", edad: 25 },
];

function edadPromedio(array) {
  let promedio = 0;
  for (let i = 0; i < array.length; i++) {
    promedio += peopleArrayObjects[i].edad;
  }
  promedio = promedio / array.length;
  console.log(`El promedio de edades del arreglo de objetos es ${promedio}`);
}

edadPromedio(peopleArrayObjects);

// Ejercicio 18

let NumericsArrayObjects = [
  { id: 1, saldoCuenta: 3000, edad: 30, cantVehiculos: 4 },
  { id: 2, saldoCuenta: 2000, edad: 40, cantVehiculos: 2 },
  { id: 3, saldoCuenta: 5000, edad: 20, cantVehiculos: 1 },
];

function maximoEnPropiedad(array, propiedad) {
  let maximo = 0;
  let id = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i][propiedad] > maximo) {
      maximo = array[i][propiedad];
      id = array[i]["id"];
    }
  }
  console.log(`Dentro de su arreglo de objetos, el maximo valor en la propiedad ${propiedad} es ${maximo} correspondiente al ID ${id}`);
}

maximoEnPropiedad(NumericsArrayObjects, "saldoCuenta");

// Ejercicio 19

function contarPalabras(cadena) {
  let palabras = cadena.split(" ");
  let contadorPalabra = {};
  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    if (contadorPalabra[palabra]) {
      contadorPalabra[palabra]++;
    } else {
      contadorPalabra[palabra] = 1;
    }
  }
  return contadorPalabra;
}

let texto = "hooola hola hola mundo mundo fran fran fran";
resultado = contarPalabras(texto);
console.log(resultado);

// Ejercicio 20

function sumaAcumulada(array) {
  let resultado = [];
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma += array[i];
    resultado.push(suma);
  }
  return console.log(resultado);
}

sumaAcumulada(arrayNumbers);
