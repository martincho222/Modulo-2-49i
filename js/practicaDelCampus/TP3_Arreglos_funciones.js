// // // 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
// // // Mostrar por pantalla en forma de lista los doce nombres del arreglo.

// // // Output:

// // 	let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
 
// // 	console.log(meses);

// // // Dificultad:  🟢🟡
// // // 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y
// // // almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado,
// // // luego realizar las siguientes acciones:

	
// // 	let arrayCiudades = [];
// // 	while (true){
// // 		let ciudades = prompt("ingrese una ciudad")
// // 		if (ciudades === null) {
// // 	    	break;
// // 	  	}
// // 	  	arrayCiudades.push(ciudades);
// // 	}

// // 	console.log(arrayCiudades);
// // 	console.log(`${arrayCiudades} tiene ${arrayCiudades.length} cidades`);
// // 	console.log(`${arrayCiudades[0]}, ${arrayCiudades[2]}, ${arrayCiudades[arrayCiudades.length-1]}`)
// // 	arrayCiudades.push("Paris");
// // 	console.log(arrayCiudades);
// // 	console.log(`${arrayCiudades[1]}`)
// // 	arrayCiudades[1]= "Barcelona";
// // 	console.log(arrayCiudades);


// // ●	Mostrar la longitud del arreglo.
// // ●	Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// // ●	Añade en última posición la ciudad de París.
// // ●	Escribe por pantalla el elemento que ocupa la segunda posición.
// // ●	Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// // Ejemplo:
// // Input:
// // [‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

// // Output:
 

// // Dificultad:  🟢🟡🔴

// // // 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función 
// // // Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados.
// // // Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
// // //repitiendo 50 veces esta operación.

// // 	let array = [];
// // 	let arrayDepurado =[];
	
// // 	for (let i=0; i<50; i++){
// // 		let dadoUno = Math.round(Math.random()*(6-1)+1);
// // 		let dadoDos = Math.round(Math.random()*(6-1)+1);

// // 		let suma = dadoUno + dadoDos;
// // 		array.push(suma);


// // 	}
// // 	for (let i=0; i<array.length; i++){

// // 		if(!arrayDepurado.includes(array[i])){
// // 			arrayDepurado.push(array[i])
// // 		}

// // 	}
// // 	let arrayDiscriminado = []


// // 	for (let numero of arrayDepurado){
// // 		contador =0;
// // 		for (let num of array){
// // 			if (numero === num){
// // 				contador ++
// // 			}
// // 		}
// // 		arrayDiscriminado.push(`El numero ${numero} aparecio ${contador} veces.`)
// // 		console.log(`El numero ${numero} aparecio ${contador} veces.`);

// // 	}
	
// // 	console.log(arrayDiscriminado);
// // 	console.log(arrayDepurado);



	
 

// // Funciones
// // Dificultad:  🟢
// // 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve 
// //como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el
// // resultado devuelto por la función.

// function esPar(num){
//     if(num%2 === 0){
//         return (`${num} es par`)
//     }else{
//         return (`${num} es impar`)
//     }
// }

// console.log(esPar(9));



// // Dificultad:  🟢🟡
// // 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
// // A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por 
// //mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// function todoMayMin(string){

//     if(string === string.toLowerCase()){
//         return `El string ingresado tiene todo minusculas`
//     }if(string === string.toUpperCase()){
//         return `El string ingresado tiene todo mayusculas`
//     }else{
//         return `El string tiene mayusculas y minusculas`
//     }
// }

// console.log(todoMayMin(`HOLA`));


// // Dificultad:  🟢🟡
// // 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
// // luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// // ●	La fórmula del perímetro  es p = 2*(a +b)

// function perimetroRectangulo(base,altura){
//     return 2*(base+altura)
// }

// console.log(`El perimetro del rectangulo seleccionado es: ${perimetroRectangulo(24,5)}`)

// // Ejemplo:



// // Input:
// // lado A = 24
// // lado B = 5

// // // Output: 58 
// // // Dificultad:  🟢🟡
// // // 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
// // // la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 
// // // del número elegido por el usuario.

// // 	function tablaDeNumero(numero){

// // 		let tabla = []

// // 		for (let i=1; i<=10; i++){
// // 			let multiplicar = numero*i;
// // 			tabla.push(`${numero}x${i} es:${multiplicar}`)
// // 		}
// // 		return tabla;

// // 	}

// // 	console.log(tablaDeNumero(2))
