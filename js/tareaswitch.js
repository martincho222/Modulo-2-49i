//Verificar el día de la semana según un número del 1 al 7.

var dia = prompt("Ingresa un número del 1 al 7 segun un día de la semana:");

switch (dia) {
    case '1':
        console.log("lunes");
        break;
     case '2':
        console.log("martes");
        break;
    case '3':
        console.log("miércoles");
       break;
   case '4':
       console.log("jueves");
        break;
    case '5':
       console.log("viernes");
       break;
    case '6':
        console.log("sábado");
        break;
    case '7':
        console.log("domingo");
        break;
    default:
        console.log("El número ingresado no corresponde a un día de la semana válido.");
        break;
}

//2-Verificar el tipo de animal según una opción seleccionada.

var animal = prompt("elija una mascota: ");

 switch (animal) {
     case '1':
       console.log("perro");
        break;
     case '2':
        console.log("gato");
        break;
    case '3':
        console.log("loro");
        break;
    case '4':
        console.log("puerco potter");
        break;
    default:
        console.log("lo sentimos no disponemos de esa mascota.");
         break;
 }


//3-Verificar el nombre del mes según un número del 1 al 12.

var mes = prompt("ingrese el mes del 1 al 12: ");

switch (mes) {
    case '1':
console.log("enero");
      break;
  case '2':
console.log("febrero");
              break;
  case '3':
console.log("marzo");
       break;
   case '4':
console.log("abril");
     break;
    case '5':
console.log("mayo");
    break;
 case '6':
console.log("junio");
        break;
    case '7':
onsole.log("julio");
        break;
    case '8':
console.log("agosto");
        break;
   case '9':
console.log("septiembre");
        break;
 case '10':
console.log("octubre");
     break;
          case '11':
console.log("noviembre");
       break;
   case '12':
console.log("diciembre");
        break;
        
default:
console.log("este numero no hace referencia a un mes.");
    break;
}


// 4-Verificar el tipo de vehículo según una opción.

var auto = prompt("elija un auto: ");

switch (auto) {
     case '1':
console.log("ford");
        break;
    case '2':
console.log("fiat");
       break;
    case '3':
console.log("renault");
         break;
    case '4':
console.log("peugeot");
        break;
    default:
onsole.log("lo sentimos no disponemos de esa gama.");
        break;
 }


// 5-Calcular el costo de envío según el país seleccionado.

let cantidadDeKilos = 10;
let paisDestino = prompt (`A donde desa enviar sus ${cantidadDeKilos} kilos?`)

switch (paisDestino) {
case '1':
console.log(`el envio a Argentina le cuesta ${cantidadDeKilos*10}$ por sus ${cantidadDeKilos} kilos`);
        break;
        case '2':
console.log(`el envio a Brasil le cuesta ${cantidadDeKilos*15}$ por sus ${cantidadDeKilos} kilos`);
       break;
   case '3':
console.log(`el envio a Chile le cuesta ${cantidadDeKilos*18}$ por sus ${cantidadDeKilos} kilos`);
        break;
     case '4':
console.log(`el envio a Bolivia le cuesta ${cantidadDeKilos*19}$ por sus ${cantidadDeKilos} kilos`);
       break;
   default:
console.log("lo sentimos no realizamos envios a este pais por el momento.");
       break;
}


//6- Verificar el rango de edad de una persona según su edad.

var edad = 18;

switch (true) {
     case (edad>0 && edad <4):
 console.log("Eres un bebé");

        break;
        
    case (edad>=4 && edad <11):
console.log("Eres un niño");

       break;
   case (edad>=11 && edad <17):
console.log("Eres un adolecente");

        break;
    case (edad >= 18 && edad <= 65):
console.log("Eres mayor de edad");

       break;
  case (edad > 65):
console.log("Eres jubilado");

        break;
   default:
console.log("Edad inválida");
      break;
 }

// 7- Ejercicio switch: Calcular el índice de masa corporal (IMC) según el peso y la altura.


// 8- Ejercicio switch: Verificar la calificación según una nota numérica.



// 9-Calcular el resultado de una operación matemática según dos números y un operador.

let numUno = 18;
let numDos = 2;
let resultado = 0;
let operacion = prompt(`que desea hacer con los numero ${numUno} u ${numDos}: " +,-,/,* "`)

switch (true) {
     case (operacion === "+"):

console.log(numUno + numDos);

break;
    case (operacion === "-"):
console.log(numUno - numDos);

break;
    case (operacion === "/"):
console.log(numUno / numDos);

break;
    case (operacion === "*"):
console.log(numUno * numDos);

break;
    default:
console.log("operacion inválida");

break;
}

// 10- Ejercicio switch: Verificar el día y la hora actual del sistema.

