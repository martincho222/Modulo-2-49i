/*
    Nivel de dificultad: Fácil

        1. Ejercicio: Determinar si un número es positivo, negativo o cero.
        2. Ejercicio: Determinar si un número es par o impar.
        3. Ejercicio: Verificar si un número es divisible por 3.
*/
    // 1-
    
    // let num1 = +prompt("Ingrese un número");
    // if(num1 === 0) {
    //     console.log("Es cero");
    // } else if(num1 >= 1) {
    //     console.log("Es positivo");
    // }else {
    //     console.log("Es negativo");
    // }

    // ---------------------------------------------------------------

    // 2-

    // let num1 = +prompt("Ingrese un número");
    // if(num1 % 2 === 0) {
    //     console.log("Es par");
    // } else {
    //     console.log("Es impar");
    // }

    // ---------------------------------------------------------------

    // 3-

    // let num1 = +prompt("Ingrese un número");
    // if(num1 % 3 === 0) {
    //     console.log("Su número es divisible por 3");
    // } else {
    //     console.log("Su número no es divisible por 3");
    // }

/*
    Nivel de dificultad: Moderado

        4. Ejercicio: Calcular el mayor de tres números.
        5. Ejercicio: Determinar si un año es bisiesto.
*/

    // 4-

    // let num1 = +prompt("Ingrese un número");
    // let num2 = +prompt("Ingrese un número");
    // let num3 = +prompt("Ingrese un número");
    // if(num1 > num2 && num1 > num3) {
    //     console.log(`${num1} Es mayor`);
    // } else if(num2 > num1 && num2 > num3) {
    //     console.log(`${num2} Es mayor`);
    // } else {
    //     console.log(`${num3} Es mayor`);
    // }
    
    // ---------------------------------------------------------------

    // 5-

    // let año = prompt("Ingrese un año");
    // if(año % 4 === 0) {
    //     console.log("Es un año bisiesto");
    // } else {
    //     console.log("No es un año bisiesto");
    // }

/*
    Nivel de dificultad: Difícil

        6. Ejercicio: Ordenar tres números de forma ascendente.
        7. Ejercicio: Calcular el descuento aplicable a una compra según el monto.
        8. Ejercicio: Determinar el tipo de triángulo según sus lados.

*/

    // 6-

    // let num1 = +prompt("Ingrese el primer número");
    // let num2 = +prompt("Ingrese el segundo número");
    // let num3 = +prompt("Ingrese el tercer número");

    // if(num1 <= num2 && num1 <= num3) {
    //     if(num2 <= num3) {
    //         console.log("Los números ordenados de forma ascendente:", num1, num2, num3);
    //     } else {
    //         console.log("Los números ordenados de forma ascendente:", num1, num3, num2);
    //     }
    // } else if(num2 <= num1 && num2 <= num3) {
    //     if(num1 <= num3) {
    //         console.log("Números ordenados de forma ascendente:", num2, num1, num3);
    //     } else {
    //         console.log("Números ordenados de forma ascendente:", num2, num3, num1);
    //     }
    // } else {
    //     if(num1 <= num2) {
    //         console.log("Números ordenados de forma ascendente:", num3, num1, num2);
    //     } else {
    //         console.log("Números ordenados de forma ascendente:", num3, num2, num1);
    //     }
    // }

    // ---------------------------------------------------------------

    // 7-

    // let montoCompra = +prompt("Ingrese el monto de Compra");
    // let descuento = 0;

    // if(montoCompra >= 100 && montoCompra < 500) {
    //     descuento = 10;
    // } else if(montoCompra >= 500 && montoCompra < 1000) {
    //     descuento = 20;
    // } else {
    //     descuento = 30;
    // }

    // let montoDescuento = montoCompra - (montoCompra * descuento / 100);

    // console.log(`Monto de su compra: $${montoCompra}`);
    // console.log(`Su descuento aplicado es de: ${descuento}%`);
    // console.log(`Su total a pagar con descuento es de: $${montoDescuento}`);

    // ---------------------------------------------------------------

    // 8-

    // let lado1 = prompt("Ingresa la longitud del Lado 1");
    // let lado2 = prompt("Ingresa la longitud del Lado 2");
    // let lado3 = prompt("Ingresa la longitud del Lado 3");

    // if(lado1 === lado2 && lado2 === lado3) {
    //     console.log("El triango es Equilatéro");
    // } else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    //     console.log("El triangulo es Isóceles");
    // } else {
    //     console.log("El triango es escaleno");
    // }
    