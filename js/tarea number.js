// numero mayor
const array = [12,24,36];

console.log(Math.max(12,24,36));

//numero menor

console.log(Math.min(12,24,36));

// raiz cuadrada

console.log(Math.sqrt(36));


//ingrese dos números y mostrar en consola su suma.

let numeroUno = parseInt(prompt("ingrese un numero:"));
let numeroDos = parseInt(prompt("ingrese otro numero:"));

console.log(`La suma de ${numeroUno} y  ${numeroDos} es ${numeroUno+numeroDos}`);


//ingrese un número y mostrar en consola si es par o impar.

let numeroPar = parseInt(prompt("ingrese un numero:"));

if(numeroPar%2 === 0){
console.log(`el numero ${numeroPar} es par`);
}else{
console.log(`el numero ${numeroPar} es impar`);
}


//un número aleatorio entre 1 y 100 y mostrarlo en consola.

let numAleteatorio = Math.round(Math.random()*100);
console.log(numAleteatorio);



//ingrese un número y mostrar en consola su valor absoluto.

let numAbs = parseInt(prompt("ingrese un numero:"));
console.log(`La valor absoluto de ${numAbs} es ${Math.abs(numAbs)}`);

// ingrese un número y mostrar en consola su raíz cuadrada.

let numeroRaiz = parseInt(prompt("ingrese un numero:"));
console.log(`La raiz cuadrada de ${numeroRaiz} es ${Math.sqrt(numeroRaiz)}`);

//ingrese un número y mostrar en consola su potencia al cuadrado.

let numeroPotencia = parseInt(prompt("ingrese un numero:"));
console.log(`La potencia cuadrada de ${numeroPotencia} es ${Math.pow(numeroPotencia , 2)}`);


//ingrese un número y mostrar en consola si es positivo, negativo o cero.

let numeroCompara = parseInt(prompt("ingrese un numero:"));

if (numeroCompara > 0) {
console.log(`${numeroCompara} es positivo`);
}else if (numeroCompara < 0) {
console.log(`${numeroCompara} es negativo`);
}else {
console.log(`${numeroCompara} es neutro`);
}


//ingrese dos números y mostrar en consola el mayor de ellos.

// let numeroUno = parseInt(prompt("ingrese un numero:"));
// let numeroDos = parseInt(prompt("ingrese otro numero:"));
// let numMax
// let numMin

// if (numeroUno > numeroDos) {
// 	numMax = numeroUno;
// 	numMin = numeroDos;
// } else {
// 	numMax = numeroDos;
// 	numMin = numeroUno;
// }

// console.log(`El numero máximo es el ${numMax}`)

//ingrese un número y mostrar en consola si es entero o decimal.

let numeroDecimal = prompt("ingrese un numero:");
let numeroEntero = parseInt(numeroDecimal);

if(numeroEntero != numeroDecimal) {
console.log("es decimal")
}else {
console.log("es entero")
}


//número aleatorio entre dos valores ingresados por el usuario y mostrarlo en consola.

let rangemin = parseInt(prompt("ingrese el rango minimo"));
let rangemax = parseInt(prompt("ingrese el rango maximo"));
console.log(Math.round(Math.random() * (rangemax - (rangemin+1)) + (rangemin+1)));
