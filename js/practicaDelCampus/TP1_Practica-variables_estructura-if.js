// Ejercicios javascript
// Prácticas con variables

// Dificultad:  🟢
// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga 
//“un mensaje”.

//let saludo = alert(`Hopolapa Munpudopo`);

// Dificultad:  🟢
// 2.- Escribe un programa de una sola línea que escriba en la pantalla 
//un textoque diga  «Hello World» (document.write).

    // document.write("Hello World");

// Dificultad:  🟢
// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

    
    // let suma = console.log(3+5);

// Dificultad:  🟢
// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y 
// escriba un texto que diga «Hola nombreUsuario»

    // let nombreUsuario = prompt (`Por favor ingrese tu nombre`);

    // console.log (`hola ${nombreUsuario}`);

// Ejemplo:  
// input: Coder 
// Output: Hola Coder 
// Dificultad:  🟢
// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y 
// escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

    // let numUno = parseInt(prompt(`Ingrese un numero`));
    // let numDos = parseInt(prompt(`Ingrese otro numero`));

    // console.log(`la suma de los numeros ${numUno} y ${numDos} es ${numUno+numDos}`);

// Dificultad:  🟢
// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo:  
// input: 15 , 3

    // let numUno = parseInt(prompt(`Ingrese un numero`));
    // let numDos = parseInt(prompt(`Ingrese otro numero`));

    // if(numUno===numDos){
    //     console.log(`Los dos numeros son iguales`)
    // }else if(numUno>numDos){
    //     console.log(`El numero mayor ingresado es ${numUno}`)
    // }else {
    //     console.log(`El numero mayor ingresado es ${numDos}`)
    // }

// Output: El 15 es el número más grande 
// Dificultad:  🟢
// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo:  
// input: 15 , 3, 9


    // let numeroUno = console.log(`Ingrese un numero`);
    // let numeroDos = console.log(`Ingrese un numero`);
    // let numeroTres = console.log(`Ingrese un numero`);

    // if(numeroUno>numeroDos && numeroUno>numeroTres){

    //     if(numeroDos>numeroTres){
    //         console.log(`${numeroUno}, ${numeroDos}, ${numeroTres}`)
    //     }else{
    //         console.log(`${numeroUno}, ${numeroTres}, ${numeroDos}`)
    //     }

    // }else if(numeroDos>numeroTres){

    //     if (numeroUno>numeroTres){
    //         console.log(`${numeroDos}, ${numeroUno}, ${numeroTres}`)
    //     }else{
    //         console.log(`${numeroDos}, ${numeroTres}, ${numeroUno}`)
    //     }

    // }else{
    //     if(numeroUno>numeroDos){
    //         console.log(`${numeroTres}, ${numeroUno}, ${numeroDos}`)
    //     }else{
    //         console.log(`${numeroTres}, ${numeroDos}, ${numeroUno}`)
    //     }
    // }

// Output: El 15 es el número más grande 
// Dificultad:  🟢
// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo:  
// input: 10
// input: 15
// Output: El 10 es divisible por 2.
// Output: El 15 no es divisible por 2. 

    // let numeroPar = parseInt(prompt (`Ingrese un numero`));
    // if(numeroPar%2===0){
    //     console.log(`Es divisible en dos`)
    // }else{
    //     console.log(`No es divisible en dos`)
    // }



// Dificultad:  🟢🟡 
// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:
 
// let frase = prompt("Ingrese una frase:");

// let vocales = "";


// for (let i = 0; i < frase.length; i++) {
//   let caracter = frase.charAt(i).toLowerCase();


//   if (
//     caracter === "a" ||
//     caracter === "e" ||
//     caracter === "i" ||
//     caracter === "o" ||
//     caracter === "u"
//   ) {

//     vocales += caracter;
//   }
// }

// console.log("Las vocales encontradas son: " + vocales);
    

// input: Hola mundo
// Output: oauo 
 

// Dificultad:  🟢🟡
// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7
// (sólo hay que comprobar si lo es por uno de los cuatro)
// Ejemplo:  
// input: 20

// Output: El 20 es divisible por 2. 

    // let numDivisble = 9;

    // switch (true){
    //     case numDivisble%2===0:
    //         console.log(`numero divisible en dos`)
    //         break
    //     case numDivisble%3===0:
    //         console.log(`numero divisible en tres`)
    //         break
    //     case numDivisble%5===0:
    //         console.log(`numero divisible en cinco`)
    //     case numDivisble%7===0:
    //         console.log(`numero divisible en siete`)       
        
        
    // }

// Dificultad:  🟢🟡
// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible 
//(hay que decir todos por los que es divisible)
// Ejemplo:  
// input: 20    
// input: 210


// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7. 

let numero = 210;

let divisores = [2,3,5,7];  

let divisible = [];


for (let divisor of divisores){
    if(numero%divisor===0){
        
        divisible.push(divisor);
    }
}


console.log(`${numero} es divisible por: ${divisible}`);
