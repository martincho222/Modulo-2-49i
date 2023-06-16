/* 
Switch:

Nivel de dificultad: Fácil
1- Ejercicio switch: Verificar el día de la semana según un número del 1 al 7.
2- Ejercicio switch: Verificar el tipo de animal según una opción seleccionada.
3- Ejercicio switch: Verificar el nombre del mes según un número del 1 al 12.
4- Ejercicio switch: Verificar el tipo de vehículo según una opción.

Nivel de dificultad: Moderado
5- Ejercicio switch: Calcular el costo de envío según el país seleccionado.
6- Ejercicio switch: Verificar el rango de edad de una persona según su edad.
7- Ejercicio switch: Calcular el índice de masa corporal (IMC) según el peso y la altura.
8- Ejercicio switch: Verificar la calificación según una nota numérica.

Nivel de dificultad: Difícil
9- Ejercicio switch: Calcular el resultado de una operación matemática según dos números y un operador.
10- Ejercicio switch: Verificar el día y la hora actual del sistema.
*/

// ejercicio 1

let num1 = parseInt(prompt("Ingrese un dia de la semana (numero):"));

switch (num1) {
  case 1:
    console.log(`Como Ud. ingresó ${num1}, corresponde al día 'Lunes'`);
    break;
  case 2:
    console.log(`Como Ud. ingresó ${num1}, corresponde al día 'Martes'`);
    break;
  case 3:
    console.log(`Como Ud. ingresó ${num1}, corresponde al día 'Miércoles'`);
    break;
  case 4:
    console.log(`Como Ud. ingresó ${num1}, corresponde al día 'Jueves'`);
    break;
  case 5:
    console.log(`Como Ud. ingresó ${num1}, corresponde al día 'Viernes'`);
    break;
  case 6:
    console.log(`Como Ud. ingresó ${num1}, corresponde al día 'Sábado'`);
    break;
  case 7:
    console.log(`Como Ud. ingresó ${num1}, corresponde al día 'Domingo'`);
    break;
  default:
    console.log("El número ingresado no corresponde a ningún día de la semana");
    break;
}

// ejercicio 2

num1 = parseInt(prompt("Escoja una opción numérica: \n1. Leon, Tigre, Cocodrilo\n2. Vaca, Caballo, Elefante\n3. Chancho, Oso, Zorro\n"));

switch (num1) {
  case 1:
    console.log("Eligió los animales carnívoros");
    break;
  case 2:
    console.log("Eligió los animales hervíboros");
    break;
  case 3:
    console.log("Eligió los animales omnívoros");
    break;
  default:
    console.log("El numero ingresado no es válido");
    break;
}

// ejercicio 3

num1 = parseInt(prompt("Ingrese un mes del año (numero):"));

switch (num1) {
  case 1:
    console.log(`Como Ud. ingresó ${num1}, corresponde al mes 'Enero'`);
    break;
  case 2:
    console.log(`Como Ud. ingresó ${num1}, corresponde al mes 'Febrero'`);
    break;
  case 3:
    console.log(`Como Ud. ingresó ${num1}, corresponde al mes 'Marzo'`);
    break;
  case 4:
    console.log(`Como Ud. ingresó ${num1}, corresponde al mes 'Abril'`);
    break;
  case 5:
    console.log(`Como Ud. ingresó ${num1}, corresponde al mes 'Mayo'`);
    break;
  case 6:
    console.log(`Como Ud. ingresó ${num1}, corresponde al mes 'Junio'`);
    break;
  case 7:
    console.log(`Como Ud. ingresó ${num1}, corresponde al mes 'Julio'`);
    break;
  case 8:
    console.log(`Como Ud. ingresó ${num1}, corresponde al mes 'Agosto'`);
    break;
  case 9:
    console.log(`Como Ud. ingresó ${num1}, corresponde al mes 'Septiembre'`);
    break;
  case 10:
    console.log(`Como Ud. ingresó ${num1}, corresponde al mes 'Octubre'`);
    break;
  case 11:
    console.log(`Como Ud. ingresó ${num1}, corresponde al mes 'Noviembre'`);
    break;
  case 12:
    console.log(`Como Ud. ingresó ${num1}, corresponde al mes 'Diciembre'`);
    break;
  default:
    console.log("El número ingresado no corresponde a ningún mes del año");
    break;
}

// ejercicio 4

num1 = parseInt(prompt("Escoja una opción numérica: \n1. Volkswagen, Nissan, Chevrolet\n2. Honda, KTM, Royal Enfield\n3. Venzo, TopMega, Specialized\n"));

switch (num1) {
  case 1:
    console.log("Eligió los automóviles");
    break;
  case 2:
    console.log("Eligió las motocicletas");
    break;
  case 3:
    console.log("Eligió las bicicletas");
    break;
  default:
    console.log("El numero ingresado no es válido");
    break;
}

// ejercicio 5

let paisEnviar = parseInt(
  prompt("Ingrese al país (limítrofes de Argentina) al cuál desea que enviemos el producto: \n1. Argentina\n2. Brasil\n3. Uruguay\n4. Chile\n5. Bolivia ")
);
let precioProducto = parseFloat(prompt("Ingrese el precio (USD) del producto que desea adquirir"));

switch (paisEnviar) {
  case 1:
    console.log(`Nuestros envíos son gratis para Argentina, por lo tanto le quedaría en ${precioProducto} dólares`);
    break;
  case 2:
    console.log(`Nuestros envíos tienen un costo del 10% para Brasil, por lo tanto le quedaría en ${precioProducto * 1.1} dólares`);
    break;
  case 3:
    console.log(`Nuestros envíos tienen un costo del 5% para Uruguay, por lo tanto le quedaría en ${precioProducto * 1.05} dólares`);
    break;
  case 4:
    console.log(`Nuestros envíos tienen un costo del 20% para Chile, por lo tanto le quedaría en ${precioProducto * 1.2} dólares`);
    break;
  case 5:
    console.log(`Nuestros envíos tienen un costo del 15% para Bolivia, por lo tanto le quedaría en ${precioProducto * 1.15} dólares`);
    break;
  default:
    break;
}

// ejercicio 6

let edad = parseInt(prompt("Ingrese la edad de una persona"));

switch (true) {
  case edad >= 0 && edad <= 3:
    console.log(`Como la edad es ${edad}, corresponde al rango 'Bebé'`);
    break;
  case edad >= 4 && edad <= 12:
    console.log(`Como la edad es ${edad}, corresponde al rango 'Niño'`);
    break;
  case edad >= 13 && edad <= 17:
    console.log(`Como la edad es ${edad}, corresponde al rango 'Adolescente'`);
    break;
  case edad >= 18 && edad <= 59:
    console.log(`Como la edad es ${edad}, corresponde al rango 'Adulto'`);
    break;
  case edad >= 60 && edad <= 74:
    console.log(`Como la edad es ${edad}, corresponde al rango 'Adulto Mayor'`);
    break;
  case edad >= 75 && edad <= 120:
    console.log(`Como la edad es ${edad}, corresponde al rango 'Anciano'`);
    break;
  default:
    console.log("La edad ingresada es incorrecta");
    break;
}

// ejercicio 8

let nota = parseFloat(prompt("Ingrese la nota obtenida"));

switch (true) {
  case nota >= 0 && nota < 4:
    console.log(`Como la nota obtenida es ${nota}, la calificacion es un 'aplazo'`);
    break;
  case nota >= 4 && nota < 6:
    console.log(`Como la nota obtenida es ${nota}, la calificacion es un 'desaprobado'`);
    break;
  case nota >= 6 && nota < 8:
    console.log(`Como la nota obtenida es ${nota}, la calificacion es un 'aprobado (bien)'`);
    break;
  case nota >= 8 && nota < 10:
    console.log(`Como la nota obtenida es ${nota}, la calificacion es un 'aprobado (muy bien)'`);
    break;
  case (nota = 10):
    console.log(`Como la nota obtenida es ${nota}, la calificacion es un 'aprobado (excelente)'`);
    break;
  default:
    console.log(`¡Error! El número ingresado (${nota}) no es una nota valida`);
    break;
}

// ejercicio 9

num1 = parseFloat(prompt("Ingrese el numero 1"));
let num2 = parseFloat(prompt("Ingrese el numero 2"));
let operador = prompt("Seleccione un operador de los siguientes:\n+ (suma)\n- (diferencia)\n* (producto)\n/ (division)\n% (resto)");
let operacion = null;

switch (operador) {
  case "+":
    operacion = num1 + num2;
    console.log(`La suma entre ${num1} y ${num2} es ${operacion}`);
    break;
  case "-":
    operacion = num1 - num2;
    console.log(`La resta entre ${num1} y ${num2} es ${operacion}`);
    break;
  case "*":
    operacion = num1 * num2;
    console.log(`El producto entre ${num1} y ${num2} es ${operacion}`);
    break;
  case "/":
    operacion = num1 / num2;
    console.log(`La division entre ${num1} y ${num2} es ${operacion}`);
    break;
  case "%":
    operacion = num1 % num2;
    console.log(`El resto de la division entera entre ${num1} y ${num2} es ${operacion}`);
    break;
  default:
    console.log(`El operador ingresado ${operador} no corresponde a un operador valido`);
    break;
}

// ejercicio 10

let fechaActual = new Date();
let diaActual = fechaActual.getDay() + 1;
let horaActual = fechaActual.getHours();
let minutosActual = fechaActual.getMinutes();

switch (diaActual) {
  case 1:
    console.log("Hoy es domingo");
    break;
  case 2:
    console.log("Hoy es lunes");
    break;
  case 3:
    console.log("Hoy es martes");
    break;
  case 4:
    console.log("Hoy es miércoles");
    break;
  case 5:
    console.log("Hoy es jueves");
    break;
  case 6:
    console.log("Hoy es viernes");
    break;
  case 7:
    console.log("Hoy es sábado");
    break;
  default:
    console.log("Error al obtener el día actual");
    break;
}
console.log(`La hora actual es ${horaActual}:${minutosActual}`);
