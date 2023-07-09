/*
    1. Solicitar al usuario que ingrese su nombre y apellido, y concatenarlos en una única cadena. 
*/

// let nombre = prompt("Ingresa tu nombre");
// let apellido = prompt("Ingresa tu apellido");
// let nombreCompleto = nombre + ' ' + apellido;

// console.log(nombre);
// console.log(apellido);
// console.log("Tu nombre completo es: " + nombreCompleto);


/*
    2. Solicitar al usuario que ingrese una cadena y mostrar en consola la longitud de la misma.
*/

// let cadena = prompt('Ingrese una cadena de texto');
// console.log("La longitud de la cadea es: " + cadena.length);


/*
    3. Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena en mayúsculas.
*/

// let cadena = prompt("ingrese una cadena");

// console.log("la cadena en mayuscula es " + cadena.toUpperCase());



// Tarea:

//  Tarea String 1:
// La Escuela Café de las 3am solicita un sistema, donde le permita a sus estudiantes presentarse de una manera más interactiva y eficiente, por eso deciden acudir a un programador para crear un sistema, en el cual se podrá ingresar el nombre, edad, actividad favorita y deporte favorito en una tarjeta de presentación predeterminada.

    // let nombre = prompt(`Ingrese su nombre por favor`);
    // let edad = prompt (`Ingrese su edad`);
    // let actividadFavorita = (`Ingrese su actividad favorita`);
    // let deporteFavorto = (`Ingrese su deporte favorito`);

    // console.log(`Mi nombre es ${nomber} y tengo ${edad} años. mi actividad favorita es ${actividadFavorita} y mi deporte favorito es ${deporteFavorto}`);


//  Tarea String 2:
// Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena en minúsculas.

// let cadenaTexto = prompt(`Ingrese una cadena de texto par convertir todo a minúsculas`);

// console.log(cadenaTexto.toLowerCase());


//  Tarea String 3:
// Solicitar al usuario que ingrese una cadena y mostrar en consola la primera letra en mayúscula y las demás en minúsculas.

    // let texto = prompt(`ingrese un texto para ser convertido a mayusc`);

    // let primerLetra = texto.slice(0,1).toUpperCase();

    // console.log(primerLetra + texto.slice(1));


//  Tarea String 4:
// Solicitar al usuario que ingrese una cadena y mostrar en consola la cadena invertida.

    // let textoInvertir = prompt("ingrese un texto a invertir");

    // let array = textoInvertir.split("");

    // let Invertido = array.reverse();

    // let arrayInvertido = Invertido.join(" ")

    // console.log(arrayInvertido);

//  Tarea String 5:
// Solicitar al usuario que ingrese una cadena y un número, y mostrar en consola la cadena truncada en la posición del número ingresado.

    // let textoTruncar = prompt("ingrese un texto para truncar");
    // let truncarDesde = prompt(`indique a partir de que posicion menor a ${textoTruncar.length}`);

    // console.log(textoTruncar.slice(truncarDesde));

//  Tarea String 6:
// Solicitar al usuario que ingrese una cadena y mostrar en consola la cantidad de vocales que contiene.

    // let contarVocales = prompr("ingrese un texto para contar su vocales");

    // let array = contarVocales.split("");
    

    // let contador = 0

    // for (let i=0; i<array.length;i++){

    //     if(array[i].toLowerCase()==="a" || array[i].toLowerCase()==="e"|| array[i].toLowerCase()==="i"|| array[i].toLowerCase()==="o"|| array[i].toLowerCase()==="u"){
    //         contador ++
    //     }
    // }

    // console.log(`"${contarVocales}" tiene ${contador} vocales.`);

//  Tarea String 7:
// Solicitar al usuario que ingrese una cadena y una palabra, y mostrar en consola la cantidad de veces que la palabra aparece en la cadena.

    // let string = prompt("ingrese el contenido donde buscar una palabra").toLowerCase();
    // let buscador =prompt("ingrese una palabra a buscar").toLowerCase();
    // let posicion = string.indexOf(buscador);
    // let contador = 0

 
    // while (posicion !== -1){
    //     contador ++;
    //     posicion = string.indexOf(buscador, posicion+1);
    // }
    
    // console.log(`la palabra o letra "${buscador}" aparece ${contador} veces en ${string}`)