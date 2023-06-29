/*
Tarea Number 1:
Usando métodos matemáticos, ingresar 3 números:
● Indicar cual es el mayor.
● Indicar cual es el menor.
● Obtener la raíz cuadrada del segundo número.

 Tarea Number 2:
Solicitar al usuario que ingrese dos números y mostrar en consola su suma.

 Tarea Number 3:
Solicitar al usuario que ingrese un número y mostrar en consola si es par o impar.

 Tarea Number 4:
Generar un número aleatorio entre 1 y 100 y mostrarlo en consola.

 Tarea Number 5:
Solicitar al usuario que ingrese un número y mostrar en consola su valor absoluto.

 Tarea Number 6:
Solicitar al usuario que ingrese un número y mostrar en consola su raíz cuadrada.

 Tarea Number 7:
Solicitar al usuario que ingrese un número y mostrar en consola su potencia al cuadrado.

 Tarea Number 8:
Solicitar al usuario que ingrese un número y mostrar en consola si es positivo, negativo o cero.

 Tarea Number 9:
Solicitar al usuario que ingrese dos números y mostrar en consola el mayor de ellos.

 Tarea Number 10:
Solicitar al usuario que ingrese un número y mostrar en consola si es entero o decimal.

 Tarea Number 11:
Generar un número aleatorio entre dos valores ingresados por el usuario y mostrarlo en consola.
*/



// Tarea Number 1:
// Usando métodos matemáticos, ingresar 3 números:
// ● Indicar cual es el mayor.
// ● Indicar cual es el menor.
// ● Obtener la raíz cuadrada del segundo número.

const numero1_1 = prompt("Ingresa el primer número: ");
const numero1_2 = prompt("Ingresa el segundo número: ");
const numero1_3 = prompt("Ingresa el tercer número: ");

console.log("El número mas grande ingresado es: ",Math.max(numero1_1, numero1_2, numero1_3));
console.log("El número mas chico ingresado es: ",Math.min(numero1_1, numero1_2, numero1_3));

console.log("La raíz cuadradada de ",numero1_2, " es ",Math.sqrt(numero1_2) );


// Tarea Number 2:
// Solicitar al usuario que ingrese dos números y mostrar en consola su suma.

const numero2_1 = parseFloat(prompt("Ingresa el primer número: "));
const numero2_2 = parseFloat(prompt("Ingresa el segundo número: "));

console.log("La suma de ambos es igual a : ",numero2_1+numero2_2);


// Tarea Number 3:
// Solicitar al usuario que ingrese un número y mostrar en consola si es par o impar.

const numero3 = parseInt(prompt("Ingrese un número: "));

if (numero3%2===0){
    console.log("El número ingresado es par");
}
else
{
    console.log("El número ingresado es impar");
}


// Tarea Number 4:
// Generar un número aleatorio entre 1 y 100 y mostrarlo en consola.

console.log("El número aleatorio generado es: ", Math.floor(Math.random()*100+1));


// Tarea Number 5:
// Solicitar al usuario que ingrese un número y mostrar en consola su valor absoluto.

const numero5 = parseFloat(prompt("Ingrese un número: "));

console.log("El valor absoluto del número ingresado es: ",Math.abs(numero5));


// Tarea Number 6:
// Solicitar al usuario que ingrese un número y mostrar en consola su raíz cuadrada.

const numero6 = prompt("Ingrese un número: ");
console.log("La raíz cuadradada de ",numero6, " es ",Math.sqrt(numero6));


// Tarea Number 7:
// Solicitar al usuario que ingrese un número y mostrar en consola su potencia al cuadrado.

const numero7 = prompt("Ingrese un número: ");
console.log("La potencia al cuadrado de ",numero7, " es ",Math.pow(numero7,2) );


// Tarea Number 8:
// Solicitar al usuario que ingrese un número y mostrar en consola si es positivo, negativo o cero.

const numero8 =parseInt(prompt("Ingrese un número: "));
if (numero8 >= 0){
    if(numero8 > 0)
    {
        console.log("El número es positivo");
    }
    else
    {
        console.log("El número es 0");
    }
}
else{
    console.log("El número es negativo");
}


// Tarea Number 9:
// Solicitar al usuario que ingrese dos números y mostrar en consola el mayor de ellos.

const numero9_1 = prompt("Ingresa el primer número: ");
const numero9_2 = prompt("Ingresa el segundo número: ");

console.log("El número mayor es: ", Math.max(numero9_1,numero9_2));


// Tarea Number 10:
// Solicitar al usuario que ingrese un número y mostrar en consola si es entero o decimal.

const numero10 = parseFloat(prompt("Ingrese un número: "));

if (Number.isInteger(numero10)){
    console.log("El número ingresado es un entero");
}
else
{
    console.log("El número ingresado es un decimal");
}


// Tarea Number 11:
// Generar un número aleatorio entre dos valores ingresados por el usuario y mostrarlo en consola.

const numero11_1 = parseFloat(prompt("Ingrese el primer valor:"));
const numero11_2 = parseFloat(prompt("Ingrese el segundo valor:"));

console.log("El valor aleatorio generado es ", Math.floor(Math.random()*(Math.max(numero11_1,numero11_2)-Math.min(numero11_1,numero11_2)+1)+Math.min(numero11_1,numero11_2)));