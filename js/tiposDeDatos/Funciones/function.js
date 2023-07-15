// function nombreDeLaFuncion(parametro1, parametro2, ...) {
//     // Cuerpo de la función
//      //codigo a ejecutar
//     //puede incluir declaraciones, otras funciones
//     //return
// }

//nombreDeLaFuncion(parametro1, parametro2, algo mas)

//funciones declarativas
// function suma(a, b) {
//     return a + b
// }
// const resultado = suma(1, 2);

// console.log(resultado);

//funciones anonimas
// const nombreVariable = function(parametro1, parametro2, ...) {
//     // Cuerpo de la función
//       //codigo a ejecutar
//      //puede incluir declaraciones, otras funciones
//      //return
// }

// const imprimirNombre = function(nombre, apellido) {
//     return `Hola mundo, aqui esta ${nombre} ${apellido}`
// }
// //console.log("Hola a todos, soy ", nombre, apellido)
// console.log(imprimirNombre("Pinky", "Luna"));

// Scope o ámbito

// let variableGlobal = "esto es una variable global"

// function global (){
//     console.log(variableGlobal);
// }

// global()

// function local () {
//     let soyLocal = "estoy dentro del scope o ámbito de la funcion"
//     console.log(soyLocal);
// }

// local()

//Callback
// function operacionAsincrona (parametro1, parametro2, callback) {
//     //realizar alguna tarea asincrona o demorada
//     let resultado = parametro1 + parametro2;
//     //una vez que la tarea se completa se llama al callback
//     callback(resultado)
// }

// function miCallback (resultado) {
//     console.log(`El resultado es ${resultado}`)
// }

// operacionAsincrona(2, 3, miCallback)

// IIFE

// const funcion = (function () {
//     var variable1 = "Hola a todos"
//     return console.log(variable1)
// })();

// let nombre = ;

// (function(nombre){
//     console.log(`Hola ${nombre}`)
// })(prompt("Nombre"))

//Funciones de orden superior

// function ejecutarOperacion(valor1, valor2, operacion){
//     return operacion(valor1, valor2)
// }

// function sumar(a, b) {
//     return a + b
// }

// function restar(a, b) {
//     return a - b
// }

// console.log(ejecutarOperacion(5, 3, sumar));
// console.log(ejecutarOperacion(5, 3, restar));


//arrow function // funciones flechas

// const nombreFuncion = (parametro1, paremtro2) => {
//     //cuerpo de la funcion
// }

// const saludar = () => console.log(`Hola a todos`);

// function objectThis(a, b) {
//     console.log(arguments);
// }
// objectThis(1, 2)

// const thisObject = (a, b) => console.log(arguments);
// thisObject(1, 2)

// const persona = {
//     nombre: 'Juan',
//     apellido: 'Perez',
//     getFullname: function(){
//         console.log(`${this.nombre} ${this.apellido}`)
//     },
//     getFullNameArrow: () => {
//         console.log(`${this.nombre} ${this.apellido}`);
//     }

// }

// persona.getFullname()
// persona.getFullNameArrow()


  
  