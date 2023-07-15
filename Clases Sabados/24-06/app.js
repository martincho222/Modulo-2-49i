/*
    Ejercicio 5: Ordenar arreglo.
    Escribe una función que ordene un arreglo de números de forma ascendente.

const ordenarArreglo = (arreglo) => {
     return arreglo.sort((a, b) => a - b)
 }

 const numeros = [2,6,3,8,67,9,4,20];
 console.log(ordenarArreglo(numeros))
*/

//Callback
// function operacionSincrona(parametro1, parametro2, miCallback) {
//     //realizar alguna tarea asincrona o demorada
//     let resultado = parametro1 + parametro2;
//     //una vez que la tarea se completa se llama al callback
//     miCallback(resultado)
// }

// function miCallback (resultado) {
//     console.log(`El resultado es ${resultado}`)
// }

// operacionAsincrona(5, 3, miCallback)



/*
 Tarea String 6:
Solicitar al usuario que ingrese una cadena y mostrar en consola la cantidad de vocales que contiene.
*/

// let cadena = prompt("Ingresar un texto");


// function contarVocales(cadena) {
//     cadena = cadena.toLowerCase();
//     let contador = 0;
//     const vocales = ['a','e', 'i', 'o', 'u'];
//     for (let i = 0; i < cadena.length; i++){
//         let letras = cadena[i];
//         if(vocales.includes(letras)) {
//             contador ++
//         }
//     }
//  return contador;
// }

// console.log(contarVocales(cadena));
// secuencia fibonacci
//0, 1, 1, 2, 3, 5, 8, 13 ...........

const secuenciaFibo = (cantidad) => {
   let secuencia = [0, 1];
   let ultimo = 1;
   for (let i = 2; ultimo.toString().length < cantidad; i++) {
    let siguiente = secuencia[i - 1] + secuencia[i - 2];//3, 5, 8, 13
    secuencia.push(siguiente)
    ultimo = siguiente;
   }
   return console.log(secuencia);

}
let cantidadDigitos = parseFloat(prompt("ingrese la cantidad de digitos"));
secuenciaFibo(cantidadDigitos);

