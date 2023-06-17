// notacion literal

// const persona = {
//     nombre: "Pinky",
//     edad: 10,
//     profesion: "Diseñadora Grafica y Desarrolladora",
//     saludar: function() {
//         return console.log("Holis Mundo!");
//     }
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// persona.saludar();


//Funcion Constructora Object
// const auto = new Object();

// auto.marca = "Toyota";
// auto.modelo = "Hilux";
// auto.color = "Rojo";
// auto.estaEnMarcha = false;
// auto.pack = {
//     cajaTrasera: true,
//     asientos: ['2', '3']
// }
// auto.encender = function() {
//     auto.estaEnMarcha = true;
// };
// auto.apagado = function() {
//     auto.estaEnMarcha = false;
// }

// auto.apagado()
// console.log(auto);

//Clases o Class

// class Monito {
//     constructor(nombre, raza, edad, objeto) {
//        this.nombre = nombre;
//        this.raza = raza;
//        this.edad = edad;
//        this.objeto = objeto;
//     }

//     //metodos
//     chillido() {
//         console.log(`¡Boh ah ah! ¡Boh ah ah!`);
//     }
//     saludar() {
//         console.log(`Holis Mi nombre es ${this.nombre} y soy un ${this.raza}`);
//     }
// }

// const monito1 = new Monito("Nach", "Orangutan", 16, {color:"Marron", altura:"6mts"});
// const monito2 = new Monito("Nestor", "Bonobo", 23, {color:"Negro", altura:"1mts"})

// console.log(monito1);
// monito1.chillido();
// monito1.saludar();

// console.log(monito2);
// monito2.chillido();
// monito2.saludar();

//Herencia

// class Animalito {
//    constructor(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//    }

//    //metodo
//    saludar(){
//     console.log(`Hola, soy ${this.nombre}`);
//    }
// }

// class Perrito extends Animalito {
//     constructor(nombre, edad, raza) {
//         super(nombre, edad);
//         this.raza = raza;
        
//     }
//     //metodos
//     ladrar() {
//         console.log("¡Guau! ¡Guau! ¡Guau! ¡Guau!");
//     }
// }

// class Gatito extends Animalito {
//     constructor(nombre, edad, color) {
//         super(nombre, edad);
//         this.color = color;
//     }
//     maullar() {
//         console.log("¡Miau! ¡Miau¡! Miau! ¡Miau!");
//     }
// }
// 2 instancias de objetos
// const perro =  new Perrito("Firulais", 15, "Callejero Aleman" );
// const gato = new Gatito("Cosme Felinito", 5, "Naranja");

// console.log(perro);
// console.log(gato.maullar());
// // perro.ladrar();
// // gato.maullar();
// // perro.saludar();

// Metodos estaticos

// class Calculadora {

//     static sumar(a, b) {
//         return a + b
//     }

//     static restar(a, b) {
//         return a - b
//     }
// }
// console.log(Calculadora.sumar(20,3));
// console.log(Calculadora.restar(20, 3));


// setters y getters

// class Persona {
//     constructor(nombre) {
//         this._nombre = nombre;
//     }
//     //aqui vamos a definir los setters
// set nombre(nuevoNombre) {
//         if(typeof nuevoNombre === 'string') {
//             this._nombre = nuevoNombre;
//         } else {
//             throw Error('El valor ingresado no es un string');
//             // console.error('El valor ingresado no es un string');
//         }
//     }
// get fullName() {
//     return this._nombre.toUpperCase();
// }
// }

// const persona = new Persona("Sheldon");
// console.log(persona.fullName);

// persona.nombre = "Rajesh"
// console.log(persona.fullName);


//this

//ambito global
// console.log(this);

// funcion regular

// function saludar() {
//     console.log(this);
// }

// saludar()

// const persona = {
//     nombre: "Conti",
//     saludar: function() {
//         console.log(this.nombre);
//     }
// }

// persona.saludar();