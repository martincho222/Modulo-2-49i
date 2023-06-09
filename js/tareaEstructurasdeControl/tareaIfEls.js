// If-else:

// Nivel de dificultad: Fácil
// 1- Ejercicio if-else: Determinar si un número es positivo, negativo o cero.
// 2- Ejercicio if-else: Determinar si un número es par o impar.
// 3- Ejercicio if-else: Verificar si un número es divisible por 3.

// Nivel de dificultad: Moderado
// 4- Ejercicio if-else: Calcular el mayor de tres números.
// 5- Ejercicio if-else: Determinar si un año es bisiesto.

// Nivel de dificultad: Difícil
// 6- Ejercicio if-else: Ordenar tres números de forma ascendente.
// 7- Ejercicio if-else: Calcular el descuento aplicable a una compra según el monto.
// 8- Ejercicio if-else: Determinar el tipo de triángulo según sus lados.

// FACIL 1 2 y 3

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

// MODERADO 4 y 5

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

// DIFÍCIL
// nivel 6 (tiene que estar lo demas comentado porque comparte nombre las variables de los otros ejercicioss)

alert("nivel DIFÍCIL");
alert("Voy a ordenar tres numeros de forma ascendente");
let numero1 = parseFloat(prompt(`Ingresa el primer numero`));
let numero2 = parseFloat(prompt(`Ingresa el segundo numero`));
let numero3 = parseFloat(prompt(`Ingresa el tercer numero`));

if (numero1 > numero2 && numero1 > numero3) {
    if (numero2 > numero3) {
        alert(`${numero1} ${numero2} ${numero3}`)
    } else if (numero3 > numero2) {
        alert(`${numero1} ${numero3} ${numero2}`)
    }
} else if (numero2 > numero1 && numero2 > numero3) {
    if (numero1 > numero3) {
        alert(`${numero2} ${numero1} ${numero3}`)
    } else if (numero3 > numero1) {
        alert(`${numero2} ${numero3} ${numero1}`)
    }
} else if (numero3 > numero1 && numero3 > numero2) {
    if (numero1 > numero2) {
        alert(`${numero3} ${numero1} ${numero2}`)
    } else if (numero2 > numero1) {
        alert(`${numero3} ${numero2} ${numero1}`)
    }
}