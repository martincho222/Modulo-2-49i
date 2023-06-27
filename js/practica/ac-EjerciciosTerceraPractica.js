// Tarea (fecha de entrega martes 27/6):

//  Ejercicio 1: Suma de elementos.
// Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos sus elementos.

function sumaArray(array){
	let acumulador=0;
	for (let i=0; i<array.length;i++){
		acumulador+=array[i];
	}
	return acumulador;
}

const arrayUno = [10,2,3,4,5,10];

console.log(`1) - La suma del array ${arrayUno} es: ${sumaArray(arrayUno)}`);

//  Ejercicio 2: Número mayor.
// Escribe una función que encuentre el número mayor en un arreglo de números.

function encuentraMayor(array){
	let primerNumero=true;
	let numMax=0;

	
	for (let i=0; i<array.length;i++){
		if (primerNumero){

			primerNumero=false;
			numMax=array[i];

		}else{
			if(numMax<array[i]){

				numMax=array[i];

			}
		}
	}
	return numMax;
}

const arrayDos = [10,2,3,4,5,10];

console.log(`2) - El mayor del del array ${arrayDos} es: ${encuentraMayor(arrayUno)}`);


//  Ejercicio 3: Eliminar duplicados.
// Escribe una función que tome un arreglo y elimine todos los elementos duplicados, devolviendo un nuevo arreglo sin duplicados.

function eliminaRepetidos(array){

	let nuevoarray=[];

	
	for (let i=0; i<array.length;i++){

		let comparador = array[i];
		

		 if (nuevoarray.indexOf(comparador) === -1) {

	  		nuevoarray.push(comparador);
		}

	}
	return nuevoarray;
}

const arrayTres = [10,2,3,4,5,10];

console.log(`3) - El valor sin duplicar del array ${arrayDos} es: ${eliminaRepetidos(arrayTres)}`);

//  Ejercicio 4: Promedio de elementos.
// Escribe una función que calcule el promedio de todos los elementos en un arreglo de números.

function promedioArray(array){

	let sumador=0;
	let contador=0

	
	for (let i=0; i<array.length;i++){

		sumador += array[i];	

		 contador ++

	}
	return sumador/contador;
}

const arrayCuatro = [10,2,3,4,5,10];

console.log(`4) - El promedio de ${arrayCuatro} es: ${Math.round(promedioArray(arrayTres))}`);


//  Ejercicio 5: Ordenar arreglo.
// Escribe una función que ordene un arreglo de números de forma ascendente.

function ordenadorNumero(array){
	
	return array.sort((a, b) => a - b);

} 

const arrayCinco = [10,2,3,4,5,10];

console.log(`5) - El array ${arrayCinco} ordenado de forma ascendente: ${ordenadorNumero(arrayCinco)}`);


//  Ejercicio 6: Filtrar pares.
// Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo solo con los números pares.

function filtraPares(array){

	let nuevoArray=[];
		
	for (let i=0; i<array.length;i++){

		if(array[i]%2==0){
			nuevoArray.push(array[i]);
		}

	}
	return nuevoArray;
}

const arraySeis = [10,2,3,4,5,10];

console.log(`6) - El array par de ${arraySeis} es: ${filtraPares(arraySeis)}`);


//  Ejercicio 7: Contar elementos.
// Escribe una función que tome un arreglo y un elemento, y devuelva el número de veces que ese elemento aparece en el arreglo.

function contarElementos(array,elemento){

	let contador=0;
	
	for (let i=0; i<array.length;i++){	
		

		if(elemento==array[i]){
			contador ++
		}

	}
	return contador;
}

const arraySiete = [10,2,3,4,5,10];
const elementoSiete = [3]

console.log(`7) - El valor ${elementoSiete} se repite ${contarElementos(arraySiete,elementoSiete)} veces en el array ${arraySiete}`);



//  Ejercicio 8: Concatenar arreglos.
// Escribe una función que tome dos arreglos y devuelva un nuevo arreglo que contenga todos los elementos de ambos arreglos.

function unionArrays(arrayUno,arrayDos){

	let concatenado = arrayUno.concat(arrayDos)
	return concatenado
}

const arrayOcho = [1,6,7];

console.log(`8) - Los arrays ${arrayOcho} y ${arraySiete} se concatenen en: ${unionArrays(arrayOcho,arraySiete)} `)



//  Ejercicio 9: Multiplicar elementos.
// Escribe una función que tome un arreglo de números y un factor, y devuelva un nuevo arreglo donde cada elemento sea multiplicado por ese factor.

function factorArray(arrayUno,factor){

	let arrayFactor = []

	for (let i = 0; i<arrayUno.length; i++){

		arrayFactor.push(arrayUno[i]*factor)

	}
	return arrayFactor

}

const arrayNueve = [10,2,3,4,5,10];
const factorNueve = [2]

console.log(`9) - el factor de ${arrayNueve} por ${factorNueve} e: ${factorArray(arrayNueve,factorNueve)} `)

//  Ejercicio 10: Elemento único.
// Escribe una función que encuentre el único elemento no repetido en un arreglo de números, donde todos los demás elementos aparecen al menos dos veces.

function valorNoRepetido(array){
	
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

const arrayDies = [10,2,3,4,5,10];

console.log(`10) - El array ${arrayDies} tiene un valor que no se repite y es el: ${valorNoRepetido(arrayDies)}`);


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
console.log(`11) - La subcadena ${subcadena} se encuentra en: ${comparaString(arrayOnce, subcadena)} dentro de ${arrayOnce}`);


//  Ejercicio 12: Invertir cadena.
// Escribe una función que tome una cadena de texto y la devuelva invertida.

function arrayInvertido(cadena){

	let array = cadena.split('');
	array = array.reverse();
	let arrayNuevo = array.join('')
	return arrayNuevo


} 


let cadena = "Hola a todos";

console.log(`12) - el array ${cadena} invertido es: ${arrayInvertido(cadena)}`);


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

console.log(`13) - La cadena ${cadenaTrece} tiene: ${contieneVocal(cadenaTrece)} vocal/es`);


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

console.log(`14) - El string ${stringCatorce} ${palindromo(stringCatorce)}`)

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