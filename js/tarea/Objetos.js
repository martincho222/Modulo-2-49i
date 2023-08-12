
// **Nivel básico:**

// 1. Crea una clase `Rectangulo` que tenga propiedades de ancho y alto, y métodos para calcular el área y el perímetro del rectángulo.

// class Rectangulo {
//     constructor(ancho, altura) {
//         this.ancho = ancho;
//         this.altura = altura;
//     }
//     area() {
//         return console.log( this.ancho * this.altura );
//     }
//     perimetro() {
//         return console.log( (this.ancho + this.altura) * 2 );
//     }
// }

// const rectangulo1 = new Rectangulo(50, 20);
// rectangulo1.area()
// rectangulo1.perimetro()

// ---------------------------------------------------------------

// 2. Implementa una clase `Perro` con propiedades como nombre, raza y edad, y un método para ladrar.

// class Perro {
//     constructor(nombre, raza, edad) {
//         this.nombre = nombre;
//         this.raza = raza;
//         this.edad = edad;
//     }
//     ladrar() {
//         console.log("Woof Woof");
//     }
// }
// const perro1 = new Perro("Negro", "Golden", 3);
// console.log(perro1);
// perro1.ladrar();

// ---------------------------------------------------------------

// 3. Crea una clase `Calculadora` con métodos para sumar, restar, multiplicar y dividir dos números.

// class Calculadora {
//     static sumar(a, b) {
//         return console.log( a + b );
//     }
//     static restar(a, b) {
//         return console.log( a - b );
//     }
//     static multiplicar(a, b) {
//         return console.log( a * b );
//     }
//     static dividir(a, b) {
//         return console.log( a / b );
//     }
// }
// Calculadora.sumar(10, 5);
// Calculadora.restar(10, 5);
// Calculadora.multiplicar(10, 5);
// Calculadora.dividir(10, 5);

// ---------------------------------------------------------------
// 4. Implementa una clase `Libro` con propiedades como título, autor y año de publicación, y un método para obtener la información completa del libro.

// class Libro {
//     constructor(titulo, autor, año) {
//         this.titulo = titulo;
//         this.autor = autor;
//         this.año = año;
//     }
//     info() {
//         console.log(`El titulo del libro es: ${this.titulo}, su autor es: ${this.autor} y fue publicado en el año: ${this.año}`);
//     }
// }
// const libro1 = new Libro("La ladrona de libros", "Markus Zusak", 2005);
// console.log(libro1);
// libro1.info();

// ---------------------------------------------------------------
// 5. Crea una clase `Vehiculo` con propiedades como marca, modelo y año, y un método para obtener la descripción del vehículo.

// class Vehiculo {
//     constructor(marca, modelo, año) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.año = año;
//     }
//     info() {
//         console.log(`La marca del vehiculo es: ${this.marca}, su modelo es: ${this.modelo} y el año del modelo es: ${this.año}`);
//     }
// }
// const auto1 = new Vehiculo("Fiat", "Idea attractive", 2016);
// console.log(auto1);
// auto1.info();

// ---------------------------------------------------------------

// **Nivel intermedio:**

// 6. Extiende la clase `Rectangulo` del ejercicio anterior para incluir un método que verifique si el rectángulo es cuadrado (es decir, si tiene igual ancho y alto).

// class Rectangulo {
//     constructor(ancho, altura) {
//         this.ancho = ancho;
//         this.altura = altura;
//     }
//     area() {
//         return console.log( this.ancho * this.altura );
//     }
//     perimetro() {
//         return console.log( (this.ancho + this.altura) * 2 );
//     }
// }
// class Vericar extends Rectangulo {
//     constructor(ancho, altura) {
//         super(ancho, altura);
//         this.ancho = ancho;
//         this.altura = altura;
//     }
//     iguales() {
//         return this.ancho === this.altura ? console.log("Su Rectangulo tiene mismo ancho y alto"): console.log("El alto y ancho no son iguales");
//     }
// }

// const rectangulo1 = new Vericar(50, 50);
// console.log(rectangulo1);
// rectangulo1.iguales();

// ---------------------------------------------------------------
// 7. Crea una clase `Tiempo` que represente una hora y minutos, y proporciona métodos para sumar y restar minutos a un objeto `Tiempo`.

// class Tiempo {
//     constructor(hora, minutos) {
//         this.hora = hora;
//         this.minutos = minutos;
//     }
//     sumar(n1, n2) {
//         return console.log(`Tu nueva hora es ${this.hora + n1}:${this.minutos + n2}`);
//     }
//     restar(n1, n2) {
//         return console.log(`Tu nueva hora es ${this.hora - n1}:${this.minutos - n2}`);
//     }
// }

// const tiempo1 = new Tiempo(14, 25);
// console.log(tiempo1);
// tiempo1.sumar(1, 1)
// tiempo1.restar(2, 2)

// ---------------------------------------------------------------
// 8. Implementa una clase `Estudiante` con propiedades como nombre, edad y una lista de notas, y un método para calcular el promedio de las notas.

// class Estudiante {
//     constructor(nombre, edad, n1, n2, n3) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.notas = [n1, n2, n3];
//     }
//     promedio() {
//         let sumaNotas = 0;
//         for(let i = 0; i < this.notas.length; i++) {
//             sumaNotas += this.notas[i];
//         }
//         const promedio = sumaNotas / this.notas.length;
//         return console.log(promedio);
//     }
// }

// const estudiante1 = new Estudiante("Sergio", 20, 7, 8, 6);
// console.log(estudiante1);
// estudiante1.promedio();


// ---------------------------------------------------------------
// 9. Crea una clase `Circulo` con una propiedad de radio y métodos para calcular el área y la circunferencia del círculo.

// class Circulo {
//     constructor(radio) {
//         this.radio = radio;
//     }
//     calculo() {
//         const area = this.radio * Math.pow(Math.PI, 2);
//         const circuferencia = 2 * Math.PI * this.radio;
//         return console.log(`Radio: ${area.toFixed()} - Circuferencia: ${circuferencia.toFixed()}`);
//     }
// }

// const circulo1 = new Circulo(20);
// console.log(circulo1);
// circulo1.calculo();

// ---------------------------------------------------------------
// 10. Extiende la clase `Vehiculo` del ejercicio anterior para incluir un método que verifique si el vehículo es nuevo (es decir, si su año de fabricación es mayor a un valor específico).

// class Vehiculo {
//     constructor(marca, modelo, año) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.año = año;
//     }
//     info() {
//         console.log(`La marca del vehiculo es: ${this.marca}, su modelo es: ${this.modelo} y el año del modelo es: ${this.año}`);
//     }
// }

// class Nuevo extends Vehiculo {
//     constructor(marca, modelo, año) {
//         super(marca, modelo, año)
//         this.año = año;
//     }
//     esNuevo() {
//         if(2023 - this.año >= 9) {
//             return console.log("Su auto es viejo");
//         } else {
//             return console.log("Su auto es nuevo");
//         }
//     }
// }

// const autoNuevo = new Nuevo("Fiat", "Idea Attractive", 2016);
// autoNuevo.info();
// autoNuevo.esNuevo();

// **Nivel avanzado:**

// 11. Implementa una clase `ListaTareas` que permita agregar, eliminar y mostrar tareas. Cada tarea debe tener un título y una descripción.

// class ListaTareas {
//     constructor() {
//       this.tareas = [];
//     }
  
//     agregar(titulo, descripcion) {
//       const tarea = {
//         titulo,
//         descripcion
//       };
//       this.tareas.push(tarea);
//     }
  
//     eliminar(indice) {
//       if (indice >= 0 && indice < this.tareas.length) {
//         this.tareas.splice(indice, 1);
//       }
//     }
  
//     mostrarTareas() {
//       console.log("Lista de tareas:");
//       console.log("------------------------------------");
//       this.tareas.forEach((tarea, indice) => {
//         console.log(`Tarea ${indice + 1}: ${tarea.titulo}`);
//         console.log(`Descripción: ${tarea.descripcion}`);
//         console.log("------------------------------------");
//       });
//     }
//   }
  
//   const tareas = new ListaTareas();

//   tareas.agregar("Subir archivos a Github", "Una vez terminada la tarea, subir los archivos al repositorio de la comisión 49i");
//   tareas.agregar("Lavar platos", "Lavar los platos despues de comer");
//   tareas.agregar("Estudiar", "Estudiar minimo 1 hora por día y practicar otra hora más");
//   tareas.eliminar(2)
  
//   tareas.mostrarTareas();
  


// ---------------------------------------------------------------
// 12. Crea una clase `Persona` con propiedades como nombre, edad y género, y un método para presentarse (por ejemplo, "Hola, soy Juan, tengo 25 años y soy hombre").

// class Persona {
//     constructor(nombre, edad, genero) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.genero = genero;
//     }
//     presentarse() {
//         return console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}`);
//     }
// }

// const persona1 = new Persona("Sergio", 20, "Hombre");
// persona1.presentarse();

// ---------------------------------------------------------------
// 13. Extiende la clase `Estudiante` del ejercicio anterior para incluir un método que determine si el estudiante está aprobado (es decir, si su promedio de notas es mayor a un valor específico).

// class Estudiante {
//     constructor(nombre, edad, n1, n2, n3) {
//       this.nombre = nombre;
//       this.edad = edad;
//       this.notas = [n1, n2, n3];
//     }
  
//     promedio() {
//       let sumaNotas = 0;
//       for (let i = 0; i < this.notas.length; i++) {
//         sumaNotas += this.notas[i];
//       }
//       const notaPromedio = sumaNotas / this.notas.length;
//       return Math.floor(notaPromedio);
//     }
// }
  
// class Aprobado extends Estudiante {
//     aprobado() {
//         const promedio = this.promedio();
//         if (promedio >= 6 && promedio <= 10) {
//             console.log(`Tu nota es de ${promedio} por lo tanto estas aprobado`);
//         } else if (promedio >= 0 && promedio <= 5) {
//             console.log(`Tu nota es de ${promedio} por lo tanto estas desaprobado`);
//         }
//     }
// }
  
// const estudiante1 = new Aprobado("Sergio", 20, 7, 8, 6);
// console.log(estudiante1);
// estudiante1.promedio();
// estudiante1.aprobado();
  

// ---------------------------------------------------------------
// 14. Implementa una clase `CalculadoraCientifica` que herede de la clase `Calculadora` y agregue métodos para calcular funciones matemáticas como seno, coseno y logaritmo.

// class Calculadora {
//     static sumar(a, b) {
//         const suma = a + b;
//         return console.log( "Suma:", suma );
//     }
//     static restar(a, b) {
//         const resta = a - b;
//         return console.log( "Resta:", resta );
//     }
//     static multiplicar(a, b) {
//         const multiplicacion = a * b;
//         return console.log( "Multiplicación:", multiplicacion );
//     }
//     static dividir(a, b) {
//         const division = a / b;
//         return console.log( "División", division );
//     }
// }

// class CalculadoraCientifica extends Calculadora {
//     static seno(angulo) {
//         const anguloRadianes = (angulo * Math.PI) / 180;
//         const seno = Math.sin(anguloRadianes).toFixed(2);
//         return console.log("Seno:", +seno);
//     }
//     static coseno(angulo) {
//         const anguloRadianes = (angulo * Math.PI) / 180;
//         const coseno = Math.sin(anguloRadianes.toFixed(2));
//         return console.log("Coseno:", +coseno);
//     }
//     static logaritmo(a) {
//         const logaritmo = Math.log(a).toFixed(2);
//         return console.log("Logaritmo:", +logaritmo);
//     }
// }

// CalculadoraCientifica.sumar(10, 5);
// CalculadoraCientifica.restar(10, 5);
// CalculadoraCientifica.multiplicar(10, 5);
// CalculadoraCientifica.dividir(10, 5);
// CalculadoraCientifica.seno(10);
// CalculadoraCientifica.coseno(20);
// CalculadoraCientifica.logaritmo(30);

// ---------------------------------------------------------------
// 15. Crea una clase `Pelicula` con propiedades como título, director, duración y una lista de actores, y métodos para agregar y eliminar actores de la lista.


class ActoresPeliculas {
    constructor(titulo, director, duracion) {
        this.titulo = titulo;
        this.director = director;
        this.duracion = duracion;
        this.actores = [];
    }
  
    agregar(actor) {
      const actores = {
        actor
      };
      this.actores.push(actores);
    }
  
    eliminar(indice) {
      if (indice >= 0 && indice < this.actores.length) {
        this.actores.splice(indice, 1);
      }
    }
  
    mostrarTareas() {
        console.log(`Elegiste la pelicula ${this.titulo} que fue dirigida por ${this.director} y tiene una duración de ${this.duracion}`);
        console.log("------------------------------------");
        console.log("Lista de actores:");
        console.log("------------------------------------");
        this.actores.forEach((actor, indice) => {
            console.log(`Actor ${indice + 1}: ${actor.actor}`);
        });
    }
  }
  
  const actores = new ActoresPeliculas("Rocky", "John G. Avildsen", "1h 59m");

  actores.agregar("Sylvester Stallone");
  actores.agregar("Talia Shire");
  actores.agregar("Burt Young");
  actores.agregar("George O'Hanlon");
  actores.eliminar(3)
  
  actores.mostrarTareas();