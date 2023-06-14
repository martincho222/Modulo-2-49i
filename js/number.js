/*Number 1:
Usando métodos matemáticos, ingresar 3 números:
● Indicar cual es el mayor.
● Indicar cual es el menor.
● Obtener la raíz cuadrada del segundo número.
*/

/*
const numero1 = prompt("ingresar el primer numero")
const numero2 = prompt("ingresar el segundo numero")
const numero3 = prompt("ingresar el tercer numero")

const mayor = Math.max(numero1, numero2, numero3)

const menor = Math.min(numero1, numero2, numero3)

const raizCuadrada = Math.sqrt(numero2)

console.log(`El numero mayor es ${mayor}`)
console.log(`El numero menor es ${menor}`)
console.log(`La raiz cuadrada del segundo numero es ${raizCuadrada}`)
*/

/*Number 2:
Solicitar al usuario que ingrese dos números y mostrar en consola su suma.
*/

/*
const numero1 = parseFloat(prompt("ingresar el primer numero"))
const numero2 = parseFloat(prompt("ingresar el primer numero"))

console.log(numero1 + numero2)
*/

/*Number 3:
Solicitar al usuario que ingrese un número y mostrar en consola si es par o impar.
*/

/*
const numero = parseFloat(prompt("ingresar un numero"))

if(numero % 2 === 0){
    console.log(`el numero ${numero} es par`)
} else{
    console.log(`el numero ${numero} es impar`)
}
*/

/*Number 4:
Generar un número aleatorio entre 1 y 100 y mostrarlo en consola.
*/
/*
console.log(Math.random() * 100)
*/

/*Number 5:
Solicitar al usuario que ingrese un número y mostrar en consola su valor absoluto.
*/

/*
const numero = parseFloat(prompt("ingresar un numero"))

console.log(Math.abs(numero))
*/

/*Number 6:
Solicitar al usuario que ingrese un número y mostrar en consola su raíz cuadrada.
*/

/*
const numero = parseFloat(prompt("ingresar un numero"))

console.log(Math.sqrt(numero))
*/

/*Number 7:
Solicitar al usuario que ingrese un número y mostrar en consola su potencia al cuadrado.
*/

/*
const numero = parseFloat(prompt("ingresar un numero"))

console.log(Math.cbrt(numero))
*/

/*Number 8:
Solicitar al usuario que ingrese un número y mostrar en consola si es positivo, negativo o cero.
*/

/*
const numero = parseFloat(prompt("ingresar un numero"))

 if(numero === 0){
    console.log(`El numero ${numero} es Cero`)
}else if(numero >=1){
    console.log(`El numero ${numero} es Positivo`)
}else if(numero <1){
    console.log(`El numero ${numero} es Negativo`)
}
*/

/*Number 9:
Solicitar al usuario que ingrese dos números y mostrar en consola el mayor de ellos.
*/

/*
const numero1 = parseFloat(prompt("ingresar primer numero"))
const numero2 = parseFloat(prompt("ingresar segundo numero"))

if (numero1 > numero2){
    console.log(`El numero mayor es el ${numero1} numero 1`)
}else if (numero2 < numero1){
    console.log(`El numero mayor es el ${numero2} numero 2`)
}else if (numero1 === numero2){
    console.log(`El numero 1: ${numero1} y el numero 2: ${numero2} son iguales`)
}
*/

/*Number 10:
Solicitar al usuario que ingrese un número y mostrar en consola si es entero o decimal.
*/

/*
const numero = parseFloat(prompt("ingresar un numero"))


if (Number.isInteger(numero)){
    console.log(`El numero ${numero} es entero`)
}else  {
    console.log(`El numero ${numero} es decimal`)
}
*/

/*Number 11:
Generar un número aleatorio entre dos valores ingresados por el usuario y mostrarlo en consola.
*/

/*
const numero1 = parseFloat(prompt("ingresar primer numero"))
const numero2 = parseFloat(prompt("ingresar segundo numero"))

const aleatorio = Math.random() * (numero2 - numero1) + numero1

console.log(aleatorio)
*/