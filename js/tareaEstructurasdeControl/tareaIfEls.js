// If-else:

// Nivel de dificultad: Fácil
// 1- Ejercicio if-else: Determinar si un número es positivo, negativo o cero. LISTO
// 2- Ejercicio if-else: Determinar si un número es par o impar. LISTO
// 3- Ejercicio if-else: Verificar si un número es divisible por 3. LISTO

// Nivel de dificultad: Moderado
// 4- Ejercicio if-else: Calcular el mayor de tres números.LISTO
// 5- Ejercicio if-else: Determinar si un año es bisiesto. LISTO

// Nivel de dificultad: Difícil
// 6- Ejercicio if-else: Ordenar tres números de forma ascendente. LISTO
// 7- Ejercicio if-else: Calcular el descuento aplicable a una compra según el monto. LISTO
// 8- Ejercicio if-else: Determinar el tipo de triángulo según sus lados. LISTO


// / ------RESUELTOS------


// Nivel de dificultad: Fácil
// 1- Ejercicio if-else: Determinar si un número es positivo, negativo o cero. LISTO
// 2- Ejercicio if-else: Determinar si un número es par o impar. LISTO
// 3- Ejercicio if-else: Verificar si un número es divisible por 3. LISTO

// alert("nivel FÁCIL");
// let numero = parseFloat(prompt(`Ingresa un numero, voy a decirte si es positivo, negativo o cero. Si es par o impar y si es divisible por 3`));
// if (numero > 0) {
//     alert(`${numero} es un numero positivo`);
// } else if (numero < 0) {
//     alert(`${numero} es un numero negativo`);
// } else if (numero === 0) {
//     alert(`su numero es 0`);
// } else {
//     alert(`ingreso un caracter inválido`);
// }

// if (numero % 2 === 0) {
//     alert(`${numero} es un numero par`)
// } else if (numero % 2 !== 0) {
//     alert(`${numero} es un numero impar`);
// }

// if (numero % 3 === 0) {
//     alert(`${numero} es divisible en 3`)
// } else if (numero % 3 !== 0) {
//     alert(`${numero} no es divisible en 3`);
// }



// Nivel de dificultad: Moderado
// 4- Ejercicio if-else: Calcular el mayor de tres números.


// alert("nivel MODERADO");
// let numero1 = parseFloat(prompt(`Ingresa el primer numero`));
// let numero2 = parseFloat(prompt(`Ingresa el segundo numero`));
// let numero3 = parseFloat(prompt(`Ingresa el tercer numero`));

// if (numero1 > numero2 && numero1 > numero3) {
//     alert(`el numero ${numero1} es el mas grande`);
// } else if (numero2 > numero1 && numero2 > numero3) {
//     alert(`el numero ${numero2} es el mas grande`);
// } else if (numero3 > numero1 && numero3 > numero2) {
//     alert(`el numero ${numero3} es el mas grande`);
// } else {
//     alert(`alguno de los numeros se repite o es inválido`)
// }

// 5- Ejercicio if-else: Determinar si un año es bisiesto.

// let anio = parseFloat(prompt(`Escriba el año a consultar si es bisiesto`));

// if (anio % 400 === 0) {
//     alert(`El año ${anio} es bisiesto`);
// } else if (anio % 400 !== 0) {
//     alert(`El año ${anio} no es bisiesto`);
// } else {
//     alert(`ingresó un dato invalido`);
// }


// Nivel de dificultad: Difícil

// 6- Ejercicio if-else: Ordenar tres números de forma ascendente.

// alert("nivel DIFÍCIL");
// alert("Voy a ordenar tres numeros de forma ascendente");
// let numero1 = parseFloat(prompt(`Ingresa el primer numero`));
// let numero2 = parseFloat(prompt(`Ingresa el segundo numero`));
// let numero3 = parseFloat(prompt(`Ingresa el tercer numero`));

// if (numero1 > numero2 && numero1 > numero3) {
//     if (numero2 > numero3) {
//         alert(`${numero1} ${numero2} ${numero3}`)
//     } else if (numero3 > numero2) {
//         alert(`${numero1} ${numero3} ${numero2}`)
//     }
// } else if (numero2 > numero1 && numero2 > numero3) {
//     if (numero1 > numero3) {
//         alert(`${numero2} ${numero1} ${numero3}`)
//     } else if (numero3 > numero1) {
//         alert(`${numero2} ${numero3} ${numero1}`)
//     }
// } else if (numero3 > numero1 && numero3 > numero2) {
//     if (numero1 > numero2) {
//         alert(`${numero3} ${numero1} ${numero2}`)
//     } else if (numero2 > numero1) {
//         alert(`${numero3} ${numero2} ${numero1}`)
//     }
// }


// 7- Ejercicio if-else: Calcular el descuento aplicable a una compra según el monto.

// alert(`Las compras mayores a 15000 tienen descuento de 15off\nLas compras mayores a 30000 tienen descuento de 20off`);
// let compraCliente = prompt(`Ingresa el producto que queres comprar`);

// if (compraCliente >= 15000) {
//     alert(`Su compra es de ${compraCliente}, tiene un descuento de 15off.\nEn total quedaría ${compraCliente - compraCliente * 0.15 }. Te estas ahorrando ${compraCliente * 0.15}`);
// } else if (compraCliente >= 30000) {
//     alert(`Su compra es de ${compraCliente}, tiene un descuento de 20off.\nEn total quedaría ${compraCliente - compraCliente * 0.20}. Te estas ahorrando ${compraCliente * 0.20}`);
// } else if (compraCliente < 15000 && compraCliente > 0) {
//     alert(`Su compra es de ${compraCliente}.\nTe faltan ${15000 - compraCliente} para tener 15off`);
// } else if (compraCliente <= 0) {
//     alert(`ingreso invalido`);
// } else { alert(`ingreso invalido`); }


// 8- Ejercicio if-else: Determinar el tipo de triángulo según sus lados.

// alert(`voy a decirte que tipo de triangulo es con las medidas de los lados`);
// let lado1 = prompt(`ingresa el largo del primer lado`);
// let lado2 = prompt(`ingresa el largo del segundo lado`);
// let lado3 = prompt(`ingresa el largo del tercer lado`);

// if (lado1 === lado2 && lado2 === lado3) {
//     alert("Triángulo equilátero");
// } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
//     alert("Triángulo isósceles");
// } else {
//     alert("Triángulo escaleno");
// }