
    // Nivel de dificultad: Fácil

    // //     1. Ejercicio bucles: Imprimir los números del 1 al 10.

    //     for (let i=1; i<=10; i++){
    //         console.log(i);
    //     }

    // //     2. Ejercicio bucles: Imprimir los números pares del 1 al 20.

    //     for (let i= 1; i<=20; i++){
    //         if(i%2===0){
    //             console.log(i)
    //         }
    //     }

    // //     3. Ejercicio bucles: Imprimir los números impares del 1 al 15.

    //     for (let i= 1; i<=20; i++){
    //         if(i%2!==0){
    //             console.log(i)
    //         }
    //     }

    // //     4. Ejercicio bucles: Calcular la suma de los primeros 50 números enteros positivos.

    //     let acumulador = 0;

    //     for (let i=0; i<=50;i++){
    //         acumulador += i
    //     }

    //     console.log(`la suma de los primeros 50 numero es ${acumulador}`)


    // // Nivel de dificultad: Moderado

    // //     5. Ejercicio bucles: Imprimir la tabla de multiplicar del 5 (del 5 al 50).

    //     for (let i=1; i<=10; i++){
    //         console.log(i*5);
    //     }

    // //     6. Ejercicio bucles: Imprimir los caracteres de un string en orden inverso.

    //     let stringOriginal = "hola soy pincky";
    //     let stringInvertido = [];

    //     for (let i=stringOriginal.length-1; i>=0;i--){
    //         stringInvertido.push(stringOriginal[i])
    //     }
    //     console.log(stringInvertido.join(""));

    // //     7. Ejercicio bucles: Calcular el factorial de un número dado (por ejemplo, 5! = 5 x 4 x 3 x 2 x 1).

    //     let numeroFactorial = 5;
    //     let factorial = 1

    //     for (let i = numeroFactorial ; i>1 ; i--){
    //         factorial *= i
    //     }

    //     console.log(`El factorial de ${numeroFactorial} es: ${factorial}`)

    // Nivel de dificultad: Difícil

    // //     8. Ejercicio bucles: Imprimir los números primos del 1 al 50.
        

    //     for (let i = 2; i<=50; i++){
    //         contador = 0;
    //         for (let j=1;j<i;j++){
    //             if(i%j===0){
    //                 contador ++
    //             }
    //         }
    //         if(contador===1){
    //             console.log(i)
    //         }
    //     }

    // //     9. Ejercicio bucles: Imprimir los elementos de un array de números.

    //     let arrayNum = [1,2,3,4,5,6]

    //     for (let i=0; i<arrayNum.length;i++){
    //         console.log(arrayNum[i]);
    //     }

    // //     10. Ejercicio bucles: Calcular la suma de los dígitos de un número entero positivo.

    //     let num = 2000;
    //     let acu = 0;
    //     let numArray = num.toString().split("");
        
    //     for (let i=0; i<numArray.length; i++){
    //         acu += parseInt(numArray[i]);
    //     }

    //     console.log(acu)


    // //     11. Ejercicio bucles: Imprimir una serie numérica especial: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...

    //     for (let i=1; i<10; i++){

    //         for (let j=0; j<i;j++){
    //             console.log(i)
    //         }
    //     }

    // Nivel de dificultad: Experto

    // //     12. Ejercicio bucles: Calcular el número de dígitos de un número entero.

    //     let numero = 12345
    //     let numeroCrudo = numero
    //     let acumuladorDigito = 0;

    //     while (numero>0){
    //        acumuladorDigito ++
    //        numero = Math.floor(numero/10)
    //     }

    //     console.log(`${numeroCrudo} tiene ${acumuladorDigito} digitos.`)


    // //     13. Ejercicio bucles: Imprimir una serie numérica especial: 1, -2, 3, -4, 5, -6, 7, -8, 9, -10, ...

    //     for (let i=1;i<50;i++){
    //         if(i%2===0){
    //             console.log(i*-1)
    //         }else{
    //             console.log(i)
    //         }
    //     }

    // //     14. Ejercicio bucles: Calcular la suma de los dígitos pares de un número entero positivo.

    //     let num = 2135;
    //     let acu = 0;
    //     let numArray = num.toString().split("");
        
    //     for (let i=0; i<numArray.length; i++){
    //         if(numArray[i]%2===0){acu += parseInt(numArray[i]);}
            
    //     }

    //     console.log(`La suma de los digitos paros de ${num} es ${acu}`);