// Tarea (fecha de entrega jueves 29/6):

// Nivel básico:

// 1- Crea una clase Rectangulo que tenga propiedades de ancho y alto, y métodos para calcular el área y el perímetro del rectángulo. LISTO

// 2- Implementa una clase Perro con propiedades como nombre, raza y edad, y un método para ladrar. LISTO

// 3- Crea una clase Calculadora con métodos para sumar, restar, multiplicar y dividir dos números. LISTO

// 4- Implementa una clase Libro con propiedades como título, autor y año de publicación, y un método para obtener la información completa del libro. LISTO

// 5- Crea una clase Vehiculo con propiedades como marca, modelo y año, y un método para obtener la descripción del vehículo. LISTO

//  Nivel intermedio:

// 6- Extiende la clase Rectangulo del ejercicio anterior para incluir un método que verifique si el rectángulo es cuadrado (es decir, si tiene igual ancho y alto). LISTO

// 7- Crea una clase Tiempo que represente una hora y minutos, y proporciona métodos para sumar y restar minutos a un objeto Tiempo. LISTO

// 8- Implementa una clase Estudiante con propiedades como nombre, edad y una lista de notas, y un método para calcular el promedio de las notas. LISTO

// 9- Crea una clase Circulo con una propiedad de radio y métodos para calcular el área y la circunferencia del círculo. LISTO

// 10- Extiende la clase Vehiculo del ejercicio anterior para incluir un método que verifique si el vehículo es nuevo (es decir, si su año de fabricación es mayor a un valor específico). LISTO

//  Nivel avanzado:

// 11- Implementa una clase ListaTareas que permita agregar, eliminar y mostrar tareas. Cada tarea debe tener un título y una descripción. LISTO

// 12- Crea una clase Persona con propiedades como nombre, edad y género, y un método para presentarse (por ejemplo, "Hola, soy Juan, tengo 25 años y soy hombre"). LISTO

// 13- Extiende la clase Estudiante del ejercicio anterior para incluir un método que determine si el estudiante está aprobado (es decir, si su promedio de notas es mayor a un valor específico). LISTO

// 14- Implementa una clase CalculadoraCientifica que herede de la clase Calculadora y agregue métodos para calcular funciones matemáticas como seno, coseno y logaritmo.

// 15- Crea una clase Pelicula con propiedades como título, director, duración y una lista de actores, y métodos para agregar y eliminar actores de la lista.


// Desarollo:

// 1- Crea una clase Rectangulo que tenga propiedades de ancho y alto, y métodos para calcular el área y el perímetro del rectángulo.

// class Rectangulo {
//     constructor(ancho, alto) {
//         this.ancho = ancho;
//         this.alto = alto;
//     }
//     calcularArea() {
//         return this.alto * this.alto;
//     }
//     calcularPerimetro() {
//         return (this.ancho + this.alto) * 2;
//     }
// }

// let forma = new Rectangulo(20, 10);
// console.log(`su ancho es ${forma.ancho}, su alto es ${forma.alto}. Su area es ${forma.calcularArea()} y su perimetro es ${forma.calcularPerimetro()}`);


// 2- Implementa una clase Perro con propiedades como nombre, raza y edad, y un método para ladrar.

// class Perro {
//     constructor(nombre, raza, edad) {
//         this.nombre = nombre;
//         this.raza = raza;
//         this.edad = edad;
//     }
//     ladrar() {
//         console.log(`guau guau`);
//     }
// }

// let perrito = new Perro("Leonidas José", "Jack Russel", 6);
// perrito.ladrar()

// 3- Crea una clase Calculadora con métodos para sumar, restar, multiplicar y dividir dos números.

// class Calculadora {
//     constructor(valor1, valor2) {
//         this.valor1 = valor1;
//         this.valor2 = valor2;
//     }
//     sumar() {
//         let resultado = this.valor1 + this.valor2;
//         console.log(resultado);
//     }
//     restar() {
//         let resultado = this.valor1 - this.valor2;
//         console.log(resultado);
//     }
//     multiplicar() {
//         let resultado = this.valor1 * this.valor2;
//         console.log(resultado);
//     }
//     dividir() {
//         if (this.valor2 === 0) {
//             return console.log(`no se puede dividir en 0`);
//         } else {
//             let resultado = this.valor1 / this.valor2;
//             console.log(resultado);
//         }
//     }
// }
// let ej1 = new Calculadora(5, 5)
// ej1.sumar();
// ej1.restar();
// ej1.multiplicar();
// ej1.dividir();
// let ej2 = new Calculadora(5, 0)
// ej2.dividir();


// 4- Implementa una clase Libro con propiedades como título, autor y año de publicación, y un método para obtener la información completa del libro.


// class Libro {
//     constructor(titulo, autor, anio) {
//         this.titulo = titulo;
//         this.auto = autor;
//         this.anio = anio;
//     }
//     informacion() {
//         console.log(`Nombre del libro:${this.titulo}, Autor: ${this.autor}, Año:${this.anio}`);
//     }
// }

// let ejlibro = new Libro("Encuentros", "Gabriel Rolon", "2012");
// ejlibro.informacion();


// 5- Crea una clase Vehiculo con propiedades como marca, modelo y año, y un método para obtener la descripción del vehículo.

// class Vehiculo {
//     constructor(marca, modelo, año) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.año = año;
//     }
//     descripcion() {
//         console.log(`marca del auto:${this.marca} modelo:${this.modelo} año:${this.año}`);
//     }
// }

// let ej1 = new Vehiculo("Fiat", "Uno", 1990);
// ej1.descripcion();


// 6- Extiende la clase Rectangulo del ejercicio anterior para incluir un método que verifique si el rectángulo es cuadrado (es decir, si tiene igual ancho y alto).

// class Rectangulo {
//     constructor(ancho, alto) {
//         this.ancho = ancho;
//         this.alto = alto;
//     }
//     calcularArea() {
//         return this.alto * this.alto;
//     }
//     calcularPerimetro() {
//         return (this.ancho + this.alto) * 2;
//     }
// }

// class RectanguloCuadrado extends Rectangulo {
//     esCuadrado() {
//         if (this.ancho === this.alto) {
//             console.log(`su rectangulo es cuadrado!`);
//         } else {
//             console.log(`no es rectangulo cuadrado`); {}
//         }
//     }
// }

// ej1 = new RectanguloCuadrado(10, 10);
// ej1.esCuadrado()


// 7- Crea una clase Tiempo que represente una hora y minutos, y proporciona métodos para sumar y restar minutos a un objeto Tiempo.

// class Tiempo {
//     constructor(horas, minutos) {
//         this.horas = horas;
//         this.minutos = minutos;
//     }
//     sumarMinutos(minutosParaSumar) {
//         let resultado = this.minutos + minutosParaSumar;
//         this.minutos = resultado;
//         console.log(`Minutos actuales:${resultado}`);
//     }
// }
// let ej1 = new Tiempo(5, 10);
// ej1.sumarMinutos(10);
// console.log(ej1.minutos);


// 8- Implementa una clase Estudiante con propiedades como nombre, edad y una lista de notas, y un método para calcular el promedio de las notas.

// class Estudiante {
//     constructor(nombre, edad, notas) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.notas = notas;
//     }
//     sacarPromedio() {
//         let resultado = this.notas.reduce((a, e) => a + e);
//         let promedio = resultado / this.notas.length;
//         console.log(`el promedio de ${this.nombre} es ${promedio}`);
//     }
// }
// let ej1 = new Estudiante("Goncal", 24, [10, 9, 8])
// ej1.sacarPromedio();


// 9- Crea una clase Circulo con una propiedad de radio y métodos para calcular el área y la circunferencia del círculo.

// class Circulo {
//     constructor(radio) {
//         this.radio = radio;
//     }

//     circunferencia() {
//         let circunferencia = parseFloat((2 * Math.PI * this.radio).toFixed(3))
//         console.log(circunferencia);
//     }
//     area() {
//         let area = parseFloat(Math.pow((Math.PI * this.radio), 2).toFixed(3))
//         console.log(area);
//     }
// }
// ej1 = new Circulo(10);
// ej1.circunferencia()
// ej1.area()

// 10- Extiende la clase Vehiculo del ejercicio anterior para incluir un método que verifique si el vehículo es nuevo (es decir, si su año de fabricación es mayor a un valor específico).

// class Vehiculo {
//     constructor(marca, modelo, año) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.año = año;
//     }
//     descripcion() {
//         console.log(`marca del auto:${this.marca} modelo:${this.modelo} año:${this.año}`);
//     }
// }

// class Vehiculo2 extends Vehiculo {
//     esNuevo() {
//         if (this.año >= 2023) {
//             console.log(`su auto es nuevo`);
//         } else {
//             console.log(`Su auto no es nuevo`);
//         }
//     }
// }

// let ej1 = new Vehiculo2("Fiat", "Uno", 1990);
// ej1.esNuevo();
// let ej2 = new Vehiculo2("Chevrolet", "Onix", 2023);
// ej2.esNuevo();

// 11- Implementa una clase ListaTareas que permita agregar, eliminar y mostrar tareas. Cada tarea debe tener un título y una descripción.

// class ListaTareas {
//     constructor(tarea, titulo, descripcion) {
//         this.tarea = tarea;
//         this.titulo = titulo;
//         this.descripcion = descripcion;
//     }
//     agregar(titulo, descripcion) {
//         this.tarea = [titulo, descripcion];
//         console.log(`tarea agregada con exito`);
//     }
//     mostrar() {
//         console.log(`${this.tarea}`);
//     }
//     eliminar() {
//         this.tarea = null;
//         console.log(`tarea eliminada con exito`);

//     }
// }

// let ej1 = new ListaTareas()
// ej1.agregar("pasea perro", "llevarlo a la plaza antes que se haga de noche");
// ej1.mostrar();
// ej1.eliminar();
// ej1.mostrar();

// 12- Crea una clase Persona con propiedades como nombre, edad y género, y un método para presentarse (por ejemplo, "Hola, soy Juan, tengo 25 años y soy hombre").

// class Persona {
//     constructor(nombre, edad, genero) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.genero = genero;
//     }
//     presentarse() {
//         console.log(`Hola! Soy ${this.nombre}. tengo años ${this.edad} y soy ${this.genero}.`);
//     }
// }

// let ej1 = new Persona("Goncal", 24, "Hombre");
// ej1.presentarse();


// 13- Extiende la clase Estudiante del ejercicio anterior para incluir un método que determine si el estudiante está aprobado (es decir, si su promedio de notas es mayor a un valor específico).

// class Estudiante {
//     constructor(nombre, edad, notas) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.notas = notas;
//         this.promedio = 0;
//     }
//     sacarPromedio() {
//         let resultado = this.notas.reduce((a, e) => a + e);
//         this.promedio = resultado / this.notas.length;
//         console.log(`el promedio de ${this.nombre} es ${this.promedio}`);
//     }
// }

// Estudiante.prototype.estaAprobado = function() {
//     if (this.promedio >= 6) {
//         console.log(`Esta aprobado`);
//     } else {
//         console.log(`Desaprobado ${this.promedio}`);
//     }
// }


// let ej1 = new Estudiante("Goncal", 24, [10, 9, 8])
// ej1.sacarPromedio();
// ej1.estaAprobado();
// let ej2 = new Estudiante("Manuel", 18, [5, 5, 2])
// ej2.sacarPromedio();
// ej2.estaAprobado();