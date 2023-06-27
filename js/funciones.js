// 1: Suma de elementos.
//Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos sus elementos.

/*
let total = 0

const sumar = (numeros) => {
    
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i]
    } 
    console.log(`El resultado es ${total}`) 
}

let numeros = [1,2,3,4,5,6]
sumar(numeros)
*/

//Ejercicio 2: Número mayor.
//Escribe una función que encuentre el número mayor en un arreglo de números.

/*
const numeroMayor = (numeros) => {
    let mayor = numeros[0]
    for (let i = 0; i < numeros.length; i++) {
        if ( numeros [i] > mayor){
            mayor = numeros[i]
        }
    } 
    console.log(`El numero mayor es ${mayor}`)
}


let numeros = [1,2,3,4,5,6]
numeroMayor(numeros)
*/

//Ejercicio 3: Eliminar duplicados.
//Escribe una función que tome un arreglo y elimine todos los elementos duplicados, devolviendo un nuevo arreglo sin duplicados.

/*
const eliminarElementosDuplicados = (numeros) => {
    let numerosSinDuplicados = []

    numeros.forEach(element => {
        if (!numerosSinDuplicados.includes(element)) {
            numerosSinDuplicados.push(element)
        }
    });
    console.log(numerosSinDuplicados)
}


let numeros = [1, 2, 3, 4, 2, 5, 6, 2, 2]
eliminarElementosDuplicados(numeros)
*/

//Ejercicio 4: Promedio de elementos.
//Escribe una función que calcule el promedio de todos los elementos en un arreglo de números.

/*
const promedio = (numeros) => {
let total = 0
let promedio = 1
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i]
        promedio = total / numeros.length
    } 
    console.log(`El promedio de ${numeros} es ${promedio}`) 
}

let numeros = [1,2,3,4,5,6]
promedio(numeros)
*/

//Ejercicio 5: Ordenar arreglo.
//Escribe una función que ordene un arreglo de números de forma ascendente.

/*
const ordenarAscendente = (numeros) => {
    return console.log(numeros.sort((a,b)=> a-b))
}

let numeros = [50,40,85,105,255]
ordenarAscendente(numeros)
*/

//Ejercicio 6: Filtrar pares.
//Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo solo con los números pares.

/*
const filtrarPares = (numeros) => {
    let pares = [];
  
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
      }
    }
  
    return pares;
  }

let numeros = [2,5,8,11,15,18,20]
console.log(filtrarPares(numeros))
*/

//Ejercicio 7: Contar elementos.
//Escribe una función que tome un arreglo y un elemento, y devuelva el número de veces que ese elemento aparece en el arreglo.

/*
const numeroDeVeces = (numeros, veces ) => {
    let total = 0
    for (let i= 0; i< numeros.length; i++){
        if(numeros[i] === veces){
            total++ 
        }
    }
     console.log(`El numero de veces que se repite el elemento ingresado es: ${total}`)
}

numeroDeVeces([1,2,3,2,2,2,5], 2)
*/

//Ejercicio 8: Concatenar arreglos.
//Escribe una función que tome dos arreglos y devuelva un nuevo arreglo que contenga todos los elementos de ambos arreglos.

/*
const concatenarArreglos = (array1, array2) => {
    const array3 = array1.concat(array2)

    console.log(array3)
}

concatenarArreglos([1,2,3,4],[5,6,7,8])
*/

//Ejercicio 9: Multiplicar elementos.
//Escribe una función que tome un arreglo de números y un factor, y devuelva un nuevo arreglo donde cada elemento sea multiplicado por ese factor.

/*
const multiplicarElementos = (numeros, factor) => {
    let array = []
    for (let i = 0; i < numeros.length; i++) {
            array.push(numeros[i]*factor);
    }
    console.log(array)
}

multiplicarElementos([1,2,3,4], 5)
*/

//Ejercicio 10: Elemento único.
//Escribe una función que encuentre el único elemento no repetido en un arreglo de números, donde todos los demás elementos aparecen al menos dos veces.

/*
const elementoUnico = (numero) => {
    const contador = []
    for (let i= 0; i< numero.length; i++){
        let num = numero[i];
        if(contador[num]){
           contador[num]++
        }else{
            contador[num] = 1
        }
    }
  for (const num in contador) {
    if (contador[num] === 1) {
      console.log(`El elemento del arreglo que se repite solo una vez es ${num}`)
    }
  }
}

elementoUnico([1,1,2,2,3,3,4,4,4,4,5])
*/

//Ejercicio 11: Buscar subcadena.
//Escribe una función que tome un arreglo de strings y una subcadena, y devuelva un nuevo arreglo con solo aquellos strings que contengan la subcadena.

/*
const buscarSubcadena = (cadena, subcadena) => {
    const nuevoArreglo = cadena.filter((elemento) => elemento.includes(subcadena));
    return nuevoArreglo;
}

const cadenaOriginal = ["Hola mundo, adios mundo", "Hola", "Mundo", "mundo"]
const subcadenaBuscar = "mundo"

let resultado = buscarSubcadena(cadenaOriginal, subcadenaBuscar)
console.log(resultado)
*/

//Ejercicio 12: Invertir cadena.
//Escribe una función que tome una cadena de texto y la devuelva invertida.

/*
const invertirCadena = (cadena) => {
    console.log(cadena.split("").reverse().join(""))
}

invertirCadena("Hola mundo")
*/

//Ejercicio 13: Contar vocales.
//Escribe una función que tome una cadena de texto y devuelva el número de vocales que contiene.

/*
let cadena = prompt("Ingresar un texto")

const contarVocales = (cadena) => {
    cadena = cadena.toLocaleLowerCase();
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0

    for (let index = 0; index < cadena.length; index++) {
        let letras = cadena[index]
        if(vocales.includes(letras)){
         contador ++
        }    
    }
    return contador
}

console.log(contarVocales(cadena))
*/

//Ejercicio 14: Palíndromo.
//Escribe una función que determine si una cadena de texto es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda).

/*
const palindromo = (cadena) => {

   cadena = cadena.toLocaleLowerCase()

   const cadenaInvertida = cadena.split("").reverse().join("")

    if( cadena === cadenaInvertida){
        console.log(`La cadena ${cadena} es palindromo`)
    } else{
        console.log(`La cadena ${cadena} no es palindromo`)
    }
}

palindromo("salas")
*/

//Ejercicio 15: Sumar matrices.
//Escribe una función que tome dos matrices bidimensionales y devuelva una nueva matriz que sea la suma de ambas matrices.

/*
const sumarMatrices = (matriz1, matriz2) => {

    let suma = [];

    // Iterar sobre las filas de las matrices
    for (let i = 0; i < matriz1.length; i++) {
      // Crear un nuevo arreglo para almacenar la fila actual
      let fila = [];

      // Iterar sobre los elementos de la fila actual
      for (let j = 0; j < matriz1[i].length; j++) {
        // Sumar los elementos correspondientes de ambas matrices
        let elementoSumado = matriz1[i][j] + matriz2[i][j];
        // Agregar el resultado a la fila
        fila.push(elementoSumado);
      }

    // Agregar la fila a la matriz de suma
    suma.push(fila);
}

// Devolver la matriz resultante
return suma;
}



const matriz1 = [
    [1,2,3],
    [4,5,6]
]
const matriz2 = [
    [7,8,9],
    [10,11,12]
]


const resultado = sumarMatrices(matriz1, matriz2)
console.log(resultado)

*/
//Ejercicio 16: Filtrar por propiedades.
//Escribe una función que tome un arreglo de objetos y una propiedad, y devuelva un nuevo arreglo solo con aquellos objetos que tienen esa propiedad.

/*
const filtrarPropiedades = (personas, propiedad) => {

    return personas.filter(objeto => objeto.hasOwnProperty(propiedad))

}

let personas = [
    {nombre: "Lorenzo"},
    {apellido: "Albornoz"},
    {edad: 28}
]


const resultado = filtrarPropiedades (personas, "nombre")
console.log(resultado)
*/

//Ejercicio 17: Calcular edad promedio.
//Escribe una función que tome un arreglo de objetos con propiedades de "nombre" y "edad", y devuelva la edad promedio de todas las personas en el arreglo.

/*
const calcularEdadPromedio = (personas) => {
    const sumaEdades = personas.reduce((acumulador, persona) => {
        return acumulador + persona.edad;
      }, 0);

      const promedioEdades = sumaEdades / personas.length;
      return promedioEdades;
}


let personas = [
    {nombre: "Lorenzo", edad:28},
    {nombre: "Maria", edad:35},
    {nombre: "Carlos", edad: 28}
]

const resultado = calcularEdadPromedio(personas, "edad")
console.log(`La edad promedio es:${resultado}`)
*/

//Ejercicio 18: Buscar máximo por propiedad.
//Escribe una función que tome un arreglo de objetos con propiedades numéricas y una propiedad, y devuelva el objeto que tenga el valor máximo en esa propiedad.

/*
const buscarMaximo = (productos, propiedad) => {
    let maximo = productos[0]

    for (let i = 1; i < productos.length; i++) {
        if (productos[i][propiedad] > maximo[propiedad]) {
          maximo = productos[i];
        }
      }

      return maximo;
    }


let productos = [
    {producto: "remeras blancas", cantidad: 5},
    {producto: "remeras negras", cantidad: 2},
    {producto: "remeras grises", cantidad: 6}
]

const resultado = buscarMaximo (productos, "cantidad")
console.log(resultado)
*/

//Ejercicio 19: Contar palabras repetidas.
//Escribe una función que tome una cadena de texto y devuelva un objeto que contenga cada palabra como propiedad y el número de veces que aparece como valor.

/*
const contarPalabrasRepetidas = (cadena) => {
    let palabras = cadena.split(" ");
    let contador = {};

    for (let palabra of palabras) {
      if (contador[palabra]) {
        contador[palabra]++;
      } else {
        contador[palabra] = 1;
      }
    }

    return contador;
  }

  let saludar = "hola mundo adios mundo";
  let resultado = contarPalabrasRepetidas(saludar);
  console.log(resultado);
  */

//Ejercicio 20: Calcular suma acumulada.
//Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo donde cada elemento sea la suma acumulada de los elementos anteriores.

/*
const calcularSumaAcumulada = (numeros) => {
    let acumulada=[]
    suma = 0
    for (let index = 0; index < numeros.length; index++) {
        suma += numeros[index]
        acumulada.push(suma)
        
    }
    return acumulada
}

let arregloNumeros = [1,2,3,4,5,6,7]
const resultado = calcularSumaAcumulada(arregloNumeros)
console.log(resultado)
*/
