/*
    Nivel de dificultad: Fácil

        1. Ejercicio: Verificar el día de la semana según un número del 1 al 7.
        2. Ejercicio: Verificar el tipo de animal según una opción seleccionada.
        3. Ejercicio: Verificar el nombre del mes según un número del 1 al 12.
        4. Ejercicio: Verificar el tipo de vehículo según una opción.
*/
    // 1-

    // let dia = +prompt("Ingrese un número del 1 al 7")
    // switch (true) {
    //     case dia === 1:
    //       console.log("Lunes");
    //       break;
    //     case dia === 2:
    //       console.log("Martes");
    //       break;
    //     case dia === 3:
    //       console.log("Miercoles");
    //       break;
    //     case dia === 4:
    //       console.log("Jueves");
    //       break;
    //     case dia === 5:
    //       console.log("Viernes");
    //       break;
    //     case dia === 6:
    //       console.log("Sabado");
    //       break;
    //     case dia === 7:
    //       console.log("Domingo");
    //       break;
    //     default:
    //         console.log("Ingreso un número fuera de los parametros");
    //   }

    // ---------------------------------------------------------------

    // 2-

    // let num = +prompt("Seleccione un número entre 1 y 5")
    // switch (true) {
    //     case num === 1:
    //         console.log("Perro");
    //         break;
    //     case num === 2:
    //         console.log("Gato");
    //         break;
    //     case num === 3:
    //         console.log("Conejo");
    //         break;
    //     case num === 4:
    //         console.log("Lobo");
    //         break;
    //     case num === 5:
    //         console.log("Tigre");
    //         break;
    
    //     default:
    //         console.log("Selecciono un número fuera de los parametros");
    //         break;
    // }

    // ---------------------------------------------------------------

    // 3-

    // let num = +prompt("Seleccione un número entre 1 y 12");
    // switch (true) {
    //     case num === 1:
    //         console.log("Enero");
    //         break;
    //     case num === 2:
    //         console.log("Febrero");
    //         break;
    //     case num === 3:
    //         console.log("Marzo");
    //         break;
    //     case num === 4:
    //         console.log("Abril");
    //         break;
    //     case num === 5:
    //         console.log("Mayo");
    //         break;
    //     case num === 6:
    //         console.log("Junio");
    //         break;
    //     case num === 7:
    //         console.log("Julio");
    //         break;
    //     case num === 8:
    //         console.log("Agosto");
    //         break;
    //     case num === 9:
    //         console.log("Septiembre");
    //         break;
    //     case num === 10:
    //         console.log("Octubre");
    //         break;
    //     case num === 11:
    //         console.log("Noviembre");
    //         break;
    //     case num === 12:
    //         console.log("Diciembre");
    //         break;
    
    //     default:
    //         console.log("Selecciono un número fuera de los parametros");
    //         break;
    // }

    // ---------------------------------------------------------------

    // 4-

    // let num = +prompt("Seleccione un número entre 1 y 5");
    // switch (true) {
    //     case num === 1:
    //         console.log("Toyota AE86");
    //         break;
    //     case num === 2:
    //         console.log("R32 Skyline GT-R");
    //         break;
    //     case num === 3:
    //         console.log("Toyota Camry");
    //         break;
    //     case num === 4:
    //         console.log("Honda Civic");
    //         break;
    //     case num === 5:
    //         console.log("Chevrolet Malibu");
    //         break;
    
    //     default:
    //         console.log("Selecciono un número fuera de los parametros");
    //         break;
    // }

/*
    Nivel de dificultad: Moderado

        5. Ejercicio: Calcular el costo de envío según el país seleccionado.
        6. Ejercicio: Verificar el rango de edad de una persona según su edad.
        7. Ejercicio: Calcular el índice de masa corporal (IMC) según el peso y la altura.
        8. Ejercicio: Verificar la calificación según una nota numérica.
*/

    // 5-
    // let pais = prompt("Seleccione un país: Argentina - Brasil - Mexico").toLowerCase();
    // switch (true) {
    //     case pais === "argentina":
    //         console.log("Su costo de envio es de $1500 ARS");
    //         break;
    //     case pais === "brasil":
    //         console.log("Su costo de envio es de $5000 ARS");
    //         break;
    //     case pais === "mexico":
    //         console.log("Su costo de envio es de $10000 ARS");
    //         break;
    
    //     default:
    //         console.log("Selecciono un país no listado");
    //         break;
    // }

    // ---------------------------------------------------------------

    // 6-

    // let edad = prompt("Ingrese su edad")
    // switch (true) {
    //     case ( edad >= 1 && edad <=5 ):
    //         console.log("Su edad esta en la categoria de Primera infancia");
    //         break;
    //     case ( edad >= 6 && edad <=11 ):
    //         console.log("Su edad esta en la categoria de Infancia");
    //         break;
    //     case ( edad >= 12 && edad <=18 ):
    //         console.log("Su edad esta en la categoria de Adolescencia");
    //         break;
    //     case ( edad >= 14 && edad <=26 ):
    //         console.log("Su edad esta en la categoria de Juventud");
    //         break;
    //     case ( edad >= 27 && edad <=59 ):
    //         console.log("Su edad esta en la categoria de Adultez");
    //         break;
    //     case ( edad >= 60 && edad <= 122):
    //         console.log("Su edad esta en la categoria de Persona mayor");
    //         break;
    
    //     default:
    //         console.log("Edad no verificada");
    //         break;
    // }

    // ---------------------------------------------------------------

    // 7-

    // let peso = +prompt("Ingresa tu peso en kilogramos");
    // let altura = +prompt("Ingresa tu altura en centimetros");
    // let imc = peso / (altura * altura);

    // switch (true) {
    //     case imc < 18.5:
    //       console.log("Bajo peso");
    //       break;
    //     case imc >= 18.5 && imc < 25:
    //         console.log("Peso normal");
    //       break;
    //     case imc >= 25 && imc < 30:
    //       console.log("Sobrepeso");
    //       break;
    //     case imc >= 30:
    //         console.log("Obesidad");
    //       break;
    //     default:
    //       console.log("Valor inválido");
    // }

    // ---------------------------------------------------------------

    // 8-

    // let nota = prompt("Ingresa una calificación escolar (númerica)");
    // switch (true) {
    //     case ( nota >=6 && nota <= 10 ):
    //         console.log(`Tu nota es de: ${nota}, por tanto estas aprobado`);
    //         break;
    //     case ( nota >= 0 && nota <= 5 ):
    //         console.log(`Tu nota es de: ${nota}, por tanto estas desaprobado`);
    //         break;
    //     default:
    //         console.log("Nota invalida");
    //         break;
    // }

/*
    Nivel de dificultad: Difícil

        9. Ejercicio: Calcular el resultado de una operación matemática según dos números y un operador.
        10. Ejercicio: Verificar el día y la hora actual del sistema.
*/

    // 9-

    // let num1 = prompt("Ingrese el primer número");
    // let op = prompt("Ingrese un operador matemático (+, -, *, /)");
    // let num2 = prompt("Ingrese el segundo número");

    // switch (true) {
    //     case (op === "+"):
    //         console.log(num1 + num2);
    //         break;
    //     case (op === "-"):
    //         console.log(num1 - num2);
    //         break;
    //     case (op === "*"):
    //         console.log(num1 * num2);
    //         break;
    //     case (op === "/"):
    //         console.log(num1 / num2);
    //         break;
    
    //     default:
    //         console.log("Operador invalido");
    //         break;
    // }

    // ---------------------------------------------------------------

    // 10-

    // let fechaActual = new Date();
    // let diaSemana = fechaActual.getDay();
    // let hora = fechaActual.getHours();
    // let minutos = fechaActual.getMinutes();

    // switch (diaSemana) {
    //     case 1:
    //         console.log("Lunes");
    //         break;
    //     case 2:
    //         console.log("Martes");
    //         break;
    //     case 3:
    //         console.log("Miercoles");
    //         break;
    //     case 4:
    //         console.log("Jueves");
    //         break;
    //     case 5:
    //         console.log("Viernes");
    //         break;
    //     case 6:
    //         console.log("Sabado");
    //         break;
    //     case 7:
    //         console.log("Domingo");
    //         break;
    
    //     default:
    //         console.log("Día invalido");
    //         break;
    // }

    // switch (true) {
    //     case (hora < 12):
    //         console.log(hora + ":" + minutos, "AM");
    //         break;
    //     case (hora >= 12):
    //         console.log(hora + ":" + minutos, "PM");
    //         break;
    
    //     default:
    //         console.log("Hora y minutos invalidos");
    //         break;
    // }