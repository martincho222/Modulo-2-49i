
// Ejercicio 1: Suma de elementos
// Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos sus elementos.

    function sumaArray(array){
        let acumulador = 0;
        for (let i = 0; i<array.length; i++){
            acumulador += array[i];
        }
        return acumulador
    }

    


    let arrayUno = [1,2,3,4,5,6]
    
    console.log(`La suma del array "${arrayUno}" es ${sumaArray(arrayUno)}`);


// Ejercicio 2: Número mayor
// Escribe una función que encuentre el número mayor en un arreglo de números.

function ecuentraMayor(array){
    let bandera;
    let nunMax=0;
    
    for (let i = 0; i<array.length; i++){
        if (bandera){
            nunMax = array[i];
            bandera = false
        }else{
            if(array[i]>nunMax){
                nunMax = array[i];
            }
        }
    }
    return nunMax
}




let arrayDos = [10,2,30,4,5,6]

console.log(`el mayor del array "${arrayDos}" es ${ecuentraMayor(arrayDos)}`);

// Ejercicio 3: Eliminar duplicados
// Escribe una función que tome un arreglo y elimine todos los elementos duplicados, devolviendo un nuevo arreglo sin duplicados.

function elimnaDuplicados(array){

    let arraySinDuplicados = []

    for (let i=0; i<array.length; i++){
        if(!arraySinDuplicados.includes(array[i])){
            arraySinDuplicados.push(array[i])
        }
    }
    return arraySinDuplicados

}




let arrayTres = [10,2,2,4,5,2]

console.log(`el array "${arrayTres}" sin duplicados es: ${elimnaDuplicados(arrayTres)}`);

// Ejercicio 4: Promedio de elementos
// Escribe una función que calcule el promedio de todos los elementos en un arreglo de números.

function promedio(array){

    let acumulador = 0;

    for (let i=0; i<array.length; i++){
        acumulador += array[i];
    }
    return acumulador/array.length;

}




let arrayCuatro = [2,2,2,2,2,2]

console.log(`el promedio de"${arrayCuatro}" es: ${promedio(arrayCuatro)}`);


// Ejercicio 5: Ordenar arreglo
// Escribe una función que ordene un arreglo de números de forma ascendente.

function arrayOrdenado(array){

    let araynuevo = array.sort((a, b) => a - b)
    return araynuevo
}




let arrayCinco= [2,22,12,23,27,12]

console.log(`el array ordenado de "${arrayCinco}" es: ${arrayOrdenado(arrayCinco)}`);

// Ejercicio 6: Filtrar pares
// Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo solo con los números pares.

function devuelvePares(array){
    let arrayPar = [];
    for (let i = 0 ; i<array.length;i++){

        if(array[i]%2===0){
            arrayPar.push(array[i])
        }

    }
    return arrayPar;



}




let arrayseis= [2,22,12,23,27,12]

console.log(`Los pares del array "${arrayseis}" son: ${devuelvePares(arrayseis)}`);  

// Ejercicio 7: Contar elementos
// Escribe una función que tome un arreglo y un elemento, y devuelva el número de veces que ese elemento aparece en el arreglo.

function buscarElemento(array,elemento){
    
    contador = 0;

    for (let i=0; i<array.length; i++){
        if(array[i]===elemento){
            contador ++
        }
    }

    return contador;


}




let arraysiete= [2,22,12,23,27,12]
let elemento = 2

console.log(`El elemento ${elemento} aparece ${buscarElemento(arraysiete, elemento)} veces en el array "${arraysiete}"`);  


// Ejercicio 8: Concatenar arreglos
// Escribe una función que tome dos arreglos y devuelva un nuevo arreglo que contenga todos los elementos de ambos arreglos.

// function uneArray(arrayUno,arrayDos){
    
//     return arrayUno.concat(arrayDos);
    
// }




// let arrayOchoUno= [2,22,12,23,27,12]
// let arrayOchoDos = [2,22,12,23,27,12]

// console.log(`${uneArray(arrayOchoUno, arrayOchoUno)}`);  


// Ejercicio 9: Multiplicar elementos
// Escribe una función que tome un arreglo de números y un factor, y devuelva un nuevo arreglo donde cada elemento sea multiplicado por ese factor.

    function multiplicaFactor(array,factor){
        let newArray = [];
        for (let i = 0; i<array.length;i++){
            newArray.push(array[i]*factor);
        }

        return newArray;
    }

    let arrayNueve = [1,2,3,4,5,6,7,8];
    let multiplicadorNueve = 4;

    console.log(`${multiplicaFactor(arrayNueve,multiplicadorNueve)}`);


// Ejercicio 10: Elemento único
// Escribe una función que encuentre el único elemento no repetido en un arreglo de números, donde todos los demás elementos aparecen al menos dos veces.

function valorUnico(array){
    for (let i = 0; i < array.length; i++) {
        let contador = 0;

        // Verificar si el elemento actual se repite
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                contador++;
            }
        }

        
        if (contador === 0) {
            return array[i];
        }
    }

}

let arrayDies = [1,1,3,5,5,7,7,8,8];


console.log(`${valorUnico(arrayDies)}`);

//  Ejercicio 11: Buscar subcadena.
// Escribe una función que tome un arreglo de strings y una subcadena, y devuelva un nuevo arreglo con solo aquellos strings que contengan la subcadena.

function comparaString(array, subcadena){

	nuevoArray=[];

	for (let i = 0 ; i<array.length; i++){

		if(array[i].indexOf(subcadena)!==-1){

			nuevoArray.push(array[i])
		}

	}
	return nuevoArray
} 


let arrayOnce = ["Hola", "Adiós", "Hola Mundo", "Bienvenido", "Despedida"];
let subcadena = "Hola";
console.log(`La subcadena ${subcadena} se encuentra en: ${comparaString(arrayOnce, subcadena)} dentro de ${arrayOnce}`);


//  Ejercicio 12: Invertir cadena.
// Escribe una función que tome una cadena de texto y la devuelva invertida.

function arrayInvertido(cadena){

	let array = cadena.split('');
	array = array.reverse();
	let arrayNuevo = array.join('')
	return arrayNuevo


} 


let cadena = "Hola a todos";

console.log(`El array ${cadena} invertido es: ${arrayInvertido(cadena)}`);


//  Ejercicio 13: Contar vocales.
// Escribe una función que tome una cadena de texto y devuelva el número de vocales que contiene.

function contieneVocal(string){

	let contador=0
	string.toLowerCase()
	let array = string.split('');

	for(let i=0;i<array.length;i++){
		if(array[i]==="a" || array[i]==="e"|| array[i]==="i"|| array[i]==="o"|| array[i]==="u"){
			contador ++
		}
	}

	return contador
}

let cadenaTrece = "Hola a todos";

console.log(`La cadena ${cadenaTrece} tiene: ${contieneVocal(cadenaTrece)} vocal/es`);


//  Ejercicio 14: Palíndromo.
// Escribe una función que determine si una cadena de texto es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda).

function palindromo(string){

	let palindromo;
	string.toLowerCase();
	let array = string.split('');
	array = array.reverse();
	let arrayNuevo = array.join('');

	if(string===arrayNuevo){
		palindromo = "es palindromo"
	}else{
		palindromo = "no es palindromo"
	}

	return palindromo
}

let stringCatorce = "neuquenw"

console.log(`El string ${stringCatorce} ${palindromo(stringCatorce)}`)

// Ejercicio 15: Sumar matrices
// Escribe una función que tome dos matrices bidimensionales y devuelva una nueva matriz que sea la suma de ambas matrices.

// Ejercicio 16: Filtrar por propiedades
// Escribe una función que tome un arreglo de objetos y una propiedad, y devuelva un nuevo arreglo solo con aquellos objetos que tienen esa propiedad.

// Ejercicio 17: Calcular edad promedio
// Escribe una función que tome un arreglo de objetos con propiedades de "nombre" y "edad", y devuelva la edad promedio de todas las personas en el arreglo.

// Ejercicio 18: Buscar máximo por propiedad
// Escribe una función que tome un arreglo de objetos con propiedades numéricas y una propiedad, y devuelva el objeto que tenga el valor máximo en esa propiedad.

// Ejercicio 19: Contar palabras repetidas
// Escribe una función que tome una cadena de texto y devuelva un objeto que contenga cada palabra como propiedad y el
// número de veces que aparece como valor.

// Ejercicio 20: Calcular suma acumulada
// Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo donde cada elemento sea la suma acumulada de los elementos anteriores.

