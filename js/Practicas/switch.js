
    // Nivel de dificultad: Fácil

    // //     1. Ejercicio switch: Verificar el día de la semana según un número del 1 al 7.

    //     let numSem = 9;

    //     switch (numSem){
    //         case 1:
    //             console.log(`Lunes`);
    //             break
    //         case 2:
    //             console.log(`Martes`);
    //             break
    //         case 3:
    //             console.log(`Miercoles`);
    //             break
    //         case 4:
    //             console.log(`Jueves`);
    //             break
    //         case 5:
    //             console.log(`Viernes`);
    //             break
    //         case 6:
    //             console.log(`Sabado`);
    //             break
    //         case 7:
    //             console.log(`Domingo`);
    //             break
    //         default:
    //             console.log(`${numSem} No se contempla como dia de semana "rango 1 a 7"`);
    //             break
                                
    //     }
    
    // //     2. Ejercicio switch: Verificar el tipo de animal según una opción seleccionada.

    // let tipoAnimal = "tierna y dulce cabrita";

    // switch (tipoAnimal){
    //     case "perro":
    //         console.log(`Domestico`);
    //         break
    //     case "gato":
    //         console.log(`Domestico`);
    //         break
    //     case "leon":
    //         console.log(`Salvaje`);
    //         break
    //     case "tierna y dulce cabrita":
    //         console.log(`Comestible`);
    //         break        
    //     default:
    //         console.log(`${tipoAnimal} No se contempla`);
    //         break
                            
    // }

    // //     3. Ejercicio switch: Verificar el nombre del mes según un número del 1 al 12.

    // let numMes = 13;

    //     switch (numMes){
    //         case 1:
    //             console.log(`Enero`);
    //             break
    //         case 2:
    //             console.log(`Febrero`);
    //             break
    //         case 3:
    //             console.log(`Marzo`);
    //             break
    //         case 4:
    //             console.log(`Abril`);
    //             break
    //         case 5:
    //             console.log(`Mayo`);
    //             break
    //         case 6:
    //             console.log(`junio`);
    //             break
    //         case 7:
    //             console.log(`Julio`);
    //             break
    //         case 8:
    //             console.log(`Agosto`);
    //             break
    //         case 9:
    //             console.log(`Setiembre`);
    //             break
    //         case 10:
    //             console.log(`Octubre`);
    //             break
    //         case 11:
    //             console.log(`Noviembre`);
    //             break
    //         case 12:
    //             console.log(`Diciembre`);
    //             break                
    //         default:
    //             console.log(`${numMes} No se contempla como mes "rango 1 a 12"`);
    //             break
                                
    //     }

    // //     4. Ejercicio switch: Verificar el tipo de vehículo según una opción.

    //     let tipoVehiculo = "anfibio"

    //     switch (tipoVehiculo){
    //         case "auto":
    //             console.log(`Terrestre`);
    //             break
    //         case "barco":
    //             console.log(`Acuatico`);
    //             break
    //         case "submarino":
    //             console.log(`Sub acuatico`);
    //             break
    //         case "avion":
    //             console.log(`aereo`);
    //             break        
    //         default:
    //             console.log(`${tipoVehiculo} No se contempla`);
    //             break
                                
    //     } 
    // // Nivel de dificultad: Moderado

    // //     5. Ejercicio switch: Calcular el costo de envío según el país seleccionado.

    //     let montoEnvio = 0;
    //     let destino = prompt("seleccione un pais").toLowerCase();
        
    //     console.log(destino)


    //     switch (destino){
    //         case "argentina":
    //             montoEnvio = 0;
    //             break;
    //         case "brasil":
    //             montoEnvio = 300;
    //             break;
    //         case "uruguay":
    //             montoEnvio = 150;
    //             break;
    //         case "Paraguay":
    //             montoEnvio = 150;
    //         default:
    //             montoEnvio = -1;
    //             break;

    //     }

    //     if (montoEnvio===-1){
    //         console.log(`Lo sentimos no contamos con envio al pais de seleccionado`)
    //     }else{
    //         console.log(`El costo de envio a ${destino} es Usd ${montoEnvio}`);

    //     }

    // // //     6. Ejercicio switch: Verificar el rango de edad de una persona según su edad.

    //     let edad = 10;

    //     switch (true){
    //         case (edad>0 && edad<2):
    //             console.log(`con ${edad} años es un bebe`);
    //             break;
    //         case (edad>=2 && edad<12):
    //             console.log(`con ${edad} años es un niñ@`);
    //             break;
    //         case (edad>=12 && edad<18):
    //             console.log(`con ${edad} años es un adolecente`);
    //             break;
    //         case (edad>=18 && edad<65):
    //             console.log(`con ${edad} años es un adulto`);
    //             break;
    //         case (edad>65 && edad <=110):
    //             console.log(`con ${edad} años es de la terce edad`);
    //             break;
    //         default:
    //             console.log(`edad no aceptada`);
    //             break
    //     } 

    // //     7. Ejercicio switch: Calcular el índice de masa corporal (IMC) según el peso y la altura.
    //     //Con el sistema métrico, la fórmula para el IMC es el peso en kilogramos dividido por la estatura en metros cuadrados.

    //     let altura = 178;
    //     let peso = 78;
    //     let imc = (peso)/Math.pow((altura/100),2);

    //         //Por debajo de 18.5	Bajo peso
    //         // 18.5 – 24.9	Normal
    //         // 25.0 – 29.9	Sobrepeso
    //         // 30.0 o más	Obesidad

    //     switch (true){
    //         case imc < 18.5:
    //             console.log(`Bajo peso`);
    //             break;
    //         case imc >= 18.5 && imc < 24.9:
    //             console.log(`Peso normal`);
    //             break;
    //         case imc >= 24.9 && imc < 29.9:
    //             console.log(`Sobrepeso`);
    //             break;
    //         case imc > 30:
    //             console.log(`obesidad`);
    //             break;
            
    //     }

    // //     8. Ejercicio switch: Verificar la calificación según una nota numérica.

    //     let nota = 6;

    //     switch (true){
    //         case nota>0 && nota <4:
    //             console.log(`Desaprobado`);
    //             break;
    //         case nota>= 4 && nota <6:
    //             console.log(`Recupera`);
    //             break;
    //         case nota>=6 && nota <=10:
    //             console.log(`Aprobado`);
    //             break;
    //         default:
    //             console.log(`Error`);
    //             break;
    //     }

    // Nivel de dificultad: Difícil

    // //     9. Ejercicio switch: Calcular el resultado de una operación matemática según dos números y un operador.

    //     let numeroUno = 3;
    //     let numeroDos = 0;
    //     let operado = "/";
    //     switch (operado){
    //         case "+":
    //             console.log(numeroUno+numeroDos);
    //             break;
    //         case "-":
    //             console.log(numeroUno-numeroDos);
    //             break;
    //         case "*":
    //             console.log(numeroUno*numeroDos);
    //             break;
    //         case "/":
    //             if(numeroDos === 0){
    //                 console.log("No se puede dividir en 0");
    //             }else{
    //                 console.log(numeroUno/numeroUno);
    //             }
    //             break;
    //         default:
    //             console.log("Operador no reconocido");
    //             break;

    //     }

    // //     10. Ejercicio switch: Verificar el día y la hora actual del sistema.

    // let fechaActual = new Date();
    // let diaSemana = fechaActual.getDay();

    // switch (diaSemana) {
    //     case 0:
    //       console.log("Hoy es domingo");
    //       break;
    //     case 1:
    //       console.log("Hoy es lunes");
    //       break;
    //     case 2:
    //       console.log("Hoy es martes");
    //       break;
    //     case 3:
    //       console.log("Hoy es miércoles");
    //       break;
    //     case 4:
    //       console.log("Hoy es jueves");
    //       break;
    //     case 5:
    //       console.log("Hoy es viernes");
    //       break;
    //     case 6:
    //       console.log("Hoy es sábado");
    //       break;
    //     default:
    //       console.log("Día no válido");
    //       break;
    //   }