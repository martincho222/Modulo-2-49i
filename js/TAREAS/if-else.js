// Nivel de dificultad: Fácil

//         1. Ejercicio: Determinar si un lado del triangulo es positivo, negativo o cero.
// const lado=parseFloat(prompt("ingrese un lado"));
// if (lado>0){
//     console.log("El lado del triangulo es positivo");
// }
// else if (lado<0){
//     console.log("El lado del triangulo es negativo");
// }
// else
// {
//     console.log("El lado del triangulo es 0");
// }

//         2. Ejercicio: Determinar si un lado del triangulo es par o impar.
// const lado=parseFloat(prompt("ingrese un lado"));
// if (lado===0) {
//     console.log("El lado del triangulo es 0");
// }
// else if (lado%2===0)
// {
//     console.log ("El lado del triangulo es par");
// }
// else{
//     console.log("El númweo es impar");
// }

//         3. Ejercicio: Verificar si un lado del triangulo es divisible por 3.
// const lado=parseFloat(prompt("ingrese un lado"));
// if (lado%3===0)
// {
//     console.log ("El lado del triangulo es divisible en 3");
// }
// else{
//     console.log("El númweo no es divisible en 3");
// }

//     Nivel de dificultad: Moderado

//         4. Ejercicio: Calcular el mayor de tres lado del triangulos.
// const lado1=parseFloat(prompt("Ingrese un lado del triangulo"))
// const lado2=parseFloat(prompt("Ingrese un lado del triangulo"))
// const lado3=parseFloat(prompt("Ingrese un lado del triangulo"))
// if (lado1>lado2){
//     if (lado1>lado3){
//         console.log("El mayor es", lado1);
//     }
//     else{
//         console.log("El mayor es", lado3);
//     }
// }
// else{
//     if (lado2>lado3){
//         console.log("El mayor es", lado2);
//     }
//     else{
//         console.log("El mayor es", lado3);
//     }
// }

//         5. Ejercicio: Determinar si un año es bisiesto.
// const año=parseFloat(prompt("Ingrese un año"));
// if (año%4===0)
// {
//     console.log("El año es bisiesto");
// }
// else
// {
//     console.log("El año no es bisiesto");
// }

//     Nivel de dificultad: Difícil

//         6. Ejercicio: Ordenar tres lado del triangulos de forma ascendente.
// const lado1=parseFloat(prompt("Ingrese un lado del triangulo"));
// const lado2=parseFloat(prompt("Ingrese un lado del triangulo"));
// const lado3=parseFloat(prompt("Ingrese un lado del triangulo"));
// let menor, mayor, medio;
// if (lado1<lado2){
//     if (lado1<lado3){
//         menor=lado1;
//         if(lado2<lado3){
//             medio=lado2;
//             mayor=lado3;
//         }
//         else
//         {
//             medio=lado3;
//             mayor=lado2;
//         }
//     }
//     else{
//         menor=lado3;
//         medio=lado1;
//         mayor=lado2;
//     }
// }
// else{
//     if (lado2<lado3){
//         menor=lado2;
//         if(lado1<lado3){
//             medio=lado1;
//             mayor=lado3;
//         }
//         else
//         {
//             medio=lado3;
//             mayor=lado1;
//         }
//     }
//     else{
//         menor=lado3;
//         medio=lado2;
//         mayor=lado1;
//     }
// }
// console.log(menor,medio,mayor);

//         7. Ejercicio: Calcular el descuento aplicable a una compra según el monto.
// const monto=parseFloat(prompt("Ingrese el monto de la compra"));
// if (monto >= 5000 && monto<10000)
// {
//     console.log("Usted obtiene un descuento del 5% igual a $",monto*0.05);
// }
// else if (monto>=10000 && monto<20000)
// {
//     console.log("Usted obtiene un descuento del 10% igual a $",monto*0.1);
// }
// else if (monto>=20000)
// {
//     console.log("Usted obtiene un descuento del 15% igual a $",monto*0.15);
// }
// else
// {
//     console.log("Usted no tiene ningun descuento disponible");
// }


//         8.  Ejercicio: Determinar el tipo de triángulo según sus lados.
// const lado1=parseFloat(prompt("Ingrese un lado del triangulo"));
// const lado2=parseFloat(prompt("Ingrese otro lado del triangulo"));
// const lado3=parseFloat(prompt("Ingrese otro lado del triangulo"));

// if (lado1===lado2) {
//     if(lado1===lado3)
//     {
//         console.log("El triangulo es equilatero");
//     }
//     else
//     {
//         console.log("El triangulo es isoceles");
//     }
// }
// else
// {
//     if(lado1===lado3)
//     {
//         console.log("El triangulo es isoceles");
//     }
//     else
//     {
//         console.log("El triangulo es escaleno");
//     }
// }