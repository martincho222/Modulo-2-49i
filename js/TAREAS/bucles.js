/*
    Nivel de dificultad: Fácil
        1. Ejercicio: Imprimir los números del 1 al 10.

for (let i =1; i <=10 ; i++){
     console.log(i);
   
}
*/

    //     2. Ejercicio: Imprimir los números pares del 1 al 20.
    // for (let i=1; i<=20;i++){
    //     if (i%2===0) {
    //         console.log(i);
    //     }
    // }

    //     3. Ejercicio: Imprimir los números impares del 1 al 15.
        //  for (let i=1; i<=15;i++){
        //     if (i%2===1) {
        //         console.log(i);
        //     }
        // }


    //     4. Ejercicio: Calcular la suma de los primeros 50 números enteros positivos.
        // let suma=0;
        // for (let i=0;i<=50;i++){
        //     suma=suma+i;
        // }
        // console.log(suma);

    // Nivel de dificultad: Moderado
    //     5. Ejercicio: Imprimir la tabla de multiplicar del 5 (del 5 al 50).
        // for(let i=1; i<=10; i++){
        //     console.log("5 x",i,"=",5*i);
        // }

    //     6. Ejercicio: Imprimir los caracteres de un string en orden inverso.
    // const cadena=prompt("Ingrese una cadena de texto");
    // let cadenaIvertida=cadena.split("").reverse();
    // for (let i=0; i<cadenaIvertida.length; i++){
    //     console.log(cadenaIvertida[i]);
    // }


    //     7. Ejercicio: Calcular el factorial de un número dado (por ejemplo, 5! = 5 x 4 x 3 x 2 x 1).
    // const numero=parseFloat(prompt("Ingrese un numero"));
    // let factorial=1;
    // for (let i = numero; i > 0; i--) {
    //     factorial=factorial*i;
    // }
    // console.log("El factorial de",numero,"es",factorial);   


    // Nivel de dificultad: Difícil
    //     8. Ejercicio: Imprimir los números primos del 1 al 50.
    // const numero=parseFloat(prompt("Ingrese un numero"));
    // let esPrimo=1;
    // for (let i=2; i< numero;i++){
    //     if (numero%i===0) {
    //         esPrimo=0;
    //         break;
    //     }
    // }
    // if (esPrimo===1) {
    //     console.log("El número es primo")
    // }
    // else{
    //     console.log("El número no es primo")
    // }

    //     9. Ejercicio: Imprimir los elementos de un array de números.
const arrayNumeros=[12,23,43,54,6,1];
// for(let i=0;i<arrayNumeros.length;i++){
//     console.log("Posición",i,": valor:",arrayNumeros[i]);
// }

    //     10. Ejercicio: Calcular la suma de los dígitos de un número entero positivo.
    // let bandera=0;
    // let numero=prompt("ingrese un numero entero positivo");
    // let arregloNumero;
 
    // let suma=0;
    // while (bandera===0) {
        
    //     if (Number.isInteger(numero*1) && numero>0){
    //         bandera=1;
    //     }
    //     else
    //     {
    //         numero=prompt("El numero debe ser entero y positivo, vuelva a ingresar un número valido");
    //     }
    // }
    // arregloNumero=numero.split("");

    // for (let i=0; i<arregloNumero.length; i++){
    //     suma=suma+parseInt(arregloNumero[i]);
    // }

    // console.log("La suma de los digitos del número ingresado es ",suma);

    //     11. Ejercicio: Imprimir una serie numérica especial: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...
// const numero=parseFloat(prompt("Ingrese el número final de la serie a mostrar"));
// let serie="";

// for(let i=1; i<=numero; i++){
//     if (i===numero){
        
//         for (let index=1; index<=i;index++){
//             if (index===i) {
//                 serie=serie.concat(i); 
//             }
//             else{

//                 serie=serie.concat(i,",");
//             }
//         }
//     }
//     else
//     {
//         for (let index=1; index<=i;index++){
        
//             serie=serie.concat(i,",");
//         }
//     }
    
// }
// console.log(serie);

    // Nivel de dificultad: Experto
    //     12. Ejercicio: Calcular el número de dígitos de un número entero.
// const numero=prompt("Ingrese un número");
// let bandera=0;
// while (bandera===0) {
        
//         if (Number.isInteger(numero*1) && numero>0){
//             bandera=1;
//         }
//         else
//         {
//             numero=prompt("El numero debe ser entero y positivo, vuelva a ingresar un número valido");
//         }
//     }
// const arregloNumero=numero.split("");
// console.log("El número ingresado posee",arregloNumero.length,"digitos");

    //     13. Ejercicio: Imprimir una serie numérica especial: 1, -2, 3, -4, 5, -6, 7, -8, 9, -10, ...
    // const numero=parseFloat(prompt("Ingrese el número final de la serie a mostrar"));
    // for (let i = 1; i <= numero; i++) {
    //     if (i%2===0) {
    //         console.log(i*(-1));
    //     }
    //     else
    //     {
    //         console.log(i);
    //     }
    // }

    //     14. Ejercicio: Calcular la suma de los dígitos pares de un número entero positivo.

    // const numero=prompt("Ingrese un número");
    // let bandera=0;
    // let suma=0;
    // while (bandera===0) {
            
    //         if (Number.isInteger(numero*1) && numero>0){
    //             bandera=1;
    //         }
    //         else
    //         {
    //             numero=prompt("El numero debe ser entero y positivo, vuelva a ingresar un número valido");
    //         }
    //     }
    // for (digito of numero){
    //     if (digito%2===0) {
    //         suma=suma+(digito*1);
    //     }
    // }

    // console.log("La suma de los digitos pares del numero ingresado es",suma);