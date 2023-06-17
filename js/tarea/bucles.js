/*
    Nivel de dificultad: Fácil

        1. Ejercicio: Imprimir los números del 1 al 10.
        2. Ejercicio: Imprimir los números pares del 1 al 20.
        3. Ejercicio: Imprimir los números impares del 1 al 15.
        4. Ejercicio: Calcular la suma de los primeros 50 números enteros positivos.
*/
    // 1-
    // for(let i = 0; i <= 10; i++ ) {
    //     console.log(i);
    // }

    // ---------------------------------------------------------------

    // 2-
    // for (let i = 1; i <= 20; i++) {
    //     if (i % 2 === 0) {
    //       console.log(i);
    //     }
    // }      

    // ---------------------------------------------------------------

    // 3-
    // for (let i = 1; i <= 15; i++) {
    //     if (i % 2 !== 0) {
    //       console.log(i);
    //     }
    // }

    // ---------------------------------------------------------------

    // 4-
    // let suma = 0;
    // for( let i = 1; i <= 50; i++) {
    //     suma +=i;
    // }
    // console.log(`La suma de los números enteros positivos es: ${suma}`);


/*
    Nivel de dificultad: Moderado

        5. Ejercicio: Imprimir la tabla de multiplicar del 5 (del 5 al 50).
        6. Ejercicio: Imprimir los caracteres de un string en orden inverso.
        7. Ejercicio: Calcular el factorial de un número dado (por ejemplo, 5! = 5 x 4 x 3 x 2 x 1).
*/

    // 5-
    // for(let i = 5; i <= 50; i+=5) {
    //     console.log(` 5 x ${i / 5} = ${i}`);
    // }

    // ---------------------------------------------------------------

    // 6-
    // let cadena = prompt("Ingrese una palabra");

    // for (let i = cadena.length - 1; i >= 0; i--) {
    //     console.log(cadena[i]);
    // } 

    // ---------------------------------------------------------------

    // 7-
    // let num = +prompt("Ingrese un número para sacar su factorial");
    // let total = 1;
    // for( i = 1; i <= num; i++) {
    //     total *= i;
    // }
    // console.log(total);

/*
    Nivel de dificultad: Difícil

        8. Ejercicio: Imprimir los números primos del 1 al 50.
        9. Ejercicio: Imprimir los elementos de un array de números.
        10. Ejercicio: Calcular la suma de los dígitos de un número entero positivo.
        11. Ejercicio: Imprimir una serie numérica especial: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...
*/
    // 8-
    // for (let x = 2; x <= 50; x++) {
    //     let primo = true;
      
    //     for (let i = 2; i < x; i++) {
    //       if (x % i === 0) {
    //         primo = false;
    //       }
    //     }
      
    //     if (primo) {
    //       console.log(x);
    //     }
    // }

    // ---------------------------------------------------------------

    // 9-
    // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // for(let i = 0; i < array.length; i++) {
    //     console.log(array[i]);
    // }

    // ---------------------------------------------------------------
    // 10-

    // let num = +prompt("Ingrese un número");
    // let suma = 0;
    // let numString = num.toString();

    // for (let i = 0; i < numString.length; i++) {
    // suma += parseInt(numString[i]);
    // }

    // console.log("La suma de los dígitos de", num, "es", suma);

    // ---------------------------------------------------------------

    // 11-
    // let num = 1;
    // for (let i = 1; i <= 4; i++) {
    // for (let x = 1; x <= i; x++) {
    //     console.log(num);
    // }
    //     num++;
    // }


/*
    Nivel de dificultad: Experto

        12. Ejercicio: Calcular el número de dígitos de un número entero.
        13. Ejercicio: Imprimir una serie numérica especial: 1, -2, 3, -4, 5, -6, 7, -8, 9, -10, ...
        14. Ejercicio: Calcular la suma de los dígitos pares de un número entero positivo.
*/

    // 12-
    // let numero = 12345;
    // let cadenaNumero = numero.toString();
    // let numeroDigitos = 0;

    // for (let i = 0; i < cadenaNumero.length; i++) {
    //     numeroDigitos++;
    // }

    // console.log(`El numero ${numero} tiene ${numeroDigitos} digitos.`);

    // ---------------------------------------------------------------

    // 13-
    // for (let i = 1; i <= 10; i++) {
    //     if (i % 2 === 0) {
    //         console.log(-i);
    //     } else {
    //         console.log(i);
    //     }
    // }

    // ---------------------------------------------------------------

    // 14-
    // let numero = 123456;
    // let sumaPares = 0;

    // while (numero > 0){
    // let digito = numero % 10;
    //     if (digito % 2 == 0){
    //         sumaPares += digito;
    //     }
    //     numero = Math.floor(numero / 10);
    // }

    // console.log("La suma de los dígitos pares es: " + sumaPares);