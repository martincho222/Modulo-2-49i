//Nivel básico:

//1- Crea una clase Rectangulo que tenga propiedades de ancho y alto, y métodos para calcular el área y el perímetro del rectángulo.

/*
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }
  calculoArea() {
    return this.ancho * this.alto;
  }
  calculoPerimetro() {
    return this.ancho * 2 + this.alto * 2;
  }
  area() {
    console.log(`Area del rectangulo ${this.calculoArea()} mts2`);
  }
  perimetro() {
    console.log(`Perimetro del rectangulo ${this.calculoPerimetro()} mts2`);
  }
}

const rectangulo = new Rectangulo(50, 20);

console.log(rectangulo);
rectangulo.area();
rectangulo.perimetro();
*/

//2- Implementa una clase Perro con propiedades como nombre, raza y edad, y un método para ladrar.

/*
class Perro {
    constructor(nombre, raza, edad){
        this.nombre = nombre
        this.raza = raza
        this.edad = edad
    }
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} soy un ${this.raza} y tengo ${this.edad} años`)
    }
}

const perro = new Perro ("Firulais", "Coker", 2)

console.log(perro)
perro.saludar()
*/

//3- Crea una clase Calculadora con métodos para sumar, restar, multiplicar y dividir dos números.

/*
class Calculadora {
    static sumar(a,b){
        return a + b
    }
    static restar(a,b){
        return a - b
    }
    static multiplicar(a,b){
        return a * b
    }
    static dividir(a,b){
        return a / b
    }
}

console.log(Calculadora.sumar(10,5))
console.log(Calculadora.restar(10,5))
console.log(Calculadora.multiplicar(10,5))
console.log(Calculadora.dividir(10,5))
*/

//4- Implementa una clase Libro con propiedades como título, autor y año de publicación, y un método para obtener la información completa del libro.

/*
class Libro {
    constructor(titulo, autor, publicacion){
      this.titulo = titulo
      this.autor = autor
      this.publicacion = publicacion
    }
    libro(){
        console.log(`El libro ${this.titulo}, tiene como autor a ${this.autor} y fue publicado en el año ${this.publicacion}`)
    }
}

const newBook = new Libro ("Don Quijote de la Mancha", "Miguel de Cervantes Saavedra", 1605)

console.log(newBook)
newBook.libro()
*/

//5- Crea una clase Vehiculo con propiedades como marca, modelo y año, y un método para obtener la descripción del vehículo.

/*
class Auto {
    constructor(marca, modelo, año){
      this.marca = marca
      this.modelo = modelo
      this.año = año
    }
    auto(){
        console.log(`El auto ${this.marca}, es modelo ${this.modelo} y su año de fabricacion es ${this.año}`)
    }
}

const newCar1 = new Auto ("Peugeot", "207", 2012)

console.log(newCar1)
newCar1.auto()
*/

//Nivel intermedio:

//6- Extiende la clase Rectangulo del ejercicio anterior para incluir un método que verifique si el rectángulo es cuadrado (es decir, si tiene igual ancho y alto).
/*
class Cuadrado extends Rectangulo {
  constructor(ancho, alto) {
    super(ancho, alto);
  }
  verificarCuadrado() {
    if (this.ancho === this.alto) {
      console.log(`El Rectangulo es Cuadrado`)
    }else{
        console.log(`El Rectangulo no es Cuadrado`)
    }
  }
}

const newCuadrado = new Cuadrado(10, 10);

console.log(newCuadrado);
newCuadrado.verificarCuadrado();
*/

//7- Crea una clase Tiempo que represente una hora y minutos, y proporciona métodos para sumar y restar minutos a un objeto Tiempo.

/*
class Tiempo {
    constructor(hora, minutos){
        this.hora = hora
        this.minutos = minutos
    }
    sumarMinutos(minutos){
        const minutosTotales = this.hora * 60 + this.minutos + minutos
        const nuevaHora = Math.floor(minutosTotales / 60)
        const nuevosMinutos = minutosTotales % 60
        return new Tiempo(nuevaHora, nuevosMinutos)
    }
    restarMinutos(minutos){
        const minutosTotales = this.hora * 60 + this.minutos - minutos
        const nuevaHora = Math.floor(minutosTotales / 60)
        const nuevosMinutos = minutosTotales % 60
        return new Tiempo(nuevaHora, nuevosMinutos)
    }
}

const newtiempo = new Tiempo (10, 10)

console.log(newtiempo)

const tiempoSumado = newtiempo.sumarMinutos(10)
console.log(tiempoSumado)
const tiempoRestado = newtiempo.restarMinutos(5)
console.log(tiempoRestado)
*/


//8- Implementa una clase Estudiante con propiedades como nombre, edad y una lista de notas, y un método para calcular el promedio de las notas.

/*
class Estudiante {
    constructor(nombre, edad, notas) {
        this.nombre = nombre
        this.edad = edad
        this.notas = notas
    }
    calcularPromedio() {
         const sumaNotas = this.notas.reduce((acumulador, nota) => acumulador + nota, 0)
                  const promedio = sumaNotas / this.notas.length
                  return promedio
        }
    }

const alumno1 = new Estudiante("Carlos", 16, [8, 7, 9, 8, 7])

console.log(alumno1)
const notaPromedio = alumno1.calcularPromedio()
console.log(notaPromedio)
*/

//9- Crea una clase Circulo con una propiedad de radio y métodos para calcular el área y la circunferencia del círculo.

/*
class Circulo {
    static area(radio) {
        const area = Math.PI * radio * radio
      console.log(`Area del circulo ${area} m^2`);
    }
    static circunferencia(radio) {
        const circunferencia = 2 * Math.PI * radio;
      console.log(`Circunferencia del circulo ${circunferencia} m`);
    }
  }
  
  Circulo.area(45);
  Circulo.circunferencia(45);
  */

//10- Extiende la clase Vehiculo del ejercicio anterior para incluir un método que verifique si el vehículo es nuevo (es decir, si su año de fabricación es mayor a un valor específico).

/*
class Nuevo extends Auto {
    constructor(marca,modelo,año){
        super(marca,modelo,año)
    }
    esNuevo(){
        if(this.año >= 2023){
            console.log(`El auto es nuevo`)
        }else{
            console.log(`El auto no es nuevo`)
        }
    }
}

const newCar2 = new Nuevo ("Toyota","Etios",2023)

console.log(newCar2)
newCar2.esNuevo()
*/

//Nivel avanzado:

//11- Implementa una clase ListaTareas que permita agregar, eliminar y mostrar tareas. Cada tarea debe tener un título y una descripción.

class Tarea {
    constructor(tarea, descripcion){
            this.tarea = tarea
            this.descripcion = descripcion
        }
        agregar(tarea, descripcion){
            const nuevaTarea = new Tarea(tarea, descripcion)
            this.tarea.push(nuevaTarea)
            console.log(this.tarea)
        }

            eliminar(tarea, descripcion) {
                const indice = this.tarea.indexOf(tarea, descripcion);
                if (indice !== -1) {
                    this.tarea.splice(indice, 1);
                }
                console.log(this.tarea);
            }
        mostrarTareas(){
            console.log(this.tarea)
        }
    }

    const listaDeTareas = new Tarea();

listaDeTareas.agregar("Lavar platos", "Lavar platos, secar y guardar");
listaDeTareas.agregar("Cocinar Pizza", "Hacer las prepizzas, ponerle salsa y queso");

listaDeTareas.eliminar("Cocinar Pizza");

//12- Crea una clase Persona con propiedades como nombre, edad y género, y un método para presentarse (por ejemplo, "Hola, soy Juan, tengo 25 años y soy hombre").

/*
class Persona {
    constructor(nombre,edad,genero){
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
    }
   presentarse(){
    console.log (`Hola soy ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}`)
   } 
}

const persona = new Persona ("Juan", 25, "Hombre")

console.log(persona)
persona.presentarse()
*/

//13- Extiende la clase Estudiante del ejercicio anterior para incluir un método que determine si el estudiante está aprobado (es decir, si su promedio de notas es mayor a un valor específico).

/*
class Aprobado extends Estudiante{
    constructor(nombre,edad,notas){
        super(nombre,edad, notas)
    }
    verificarAprobado(){
        if(this.calcularPromedio() >= 4){
            console.log("Estas aprobado")
        }else{
            console.log("No estas aprobado")
        }
    }
}

const alumno2 = new Aprobado ("Juan", 16, [1,2,4,2,10])

console.log(alumno2)
const notaPromedio2 = alumno2.calcularPromedio()
console.log(notaPromedio2)
alumno2.verificarAprobado()
*/

//14- Implementa una clase CalculadoraCientifica que herede de la clase Calculadora y agregue métodos para calcular funciones matemáticas como seno, coseno y tangente.

/*
class CalculadoraCientifica {
    static seno(angulo) {
        const seno = Math.sin(angulo * (Math.PI / 180));
        console.log("Seno:", seno);
    }
    static coseno(angulo) {
        const coseno = Math.cos(angulo * (Math.PI / 180));
        console.log("Coseno:", coseno);
    }
    static tangente(angulo) {
            const tangente = Math.tan(angulo * (Math.PI / 180));
            console.log("Tangente:", tangente);
        }
}
CalculadoraCientifica.seno(45)
CalculadoraCientifica.coseno(45)
CalculadoraCientifica.tangente(45)
*/

//15- Crea una clase Pelicula con propiedades como título, director, duración y una lista de actores, y métodos para agregar y eliminar actores de la lista.

/*
class Pelicula {
    constructor(titulo, director, duracion, actores) {
        this.titulo = titulo
        this.director = director
        this.duracion = duracion
        this.actores = actores
    }
    agregarActores(nuevoActor) {
        this.actores.push(nuevoActor);
        console.log(this.actores);
    }

    eliminarActores(actorEliminar) {
        const indice = this.actores.indexOf(actorEliminar);
        if (indice !== -1) {
            this.actores.splice(indice, 1);
        }
        console.log(this.actores);
    }
}

const pelicula = new Pelicula("Harry Potter", "Chris Columbus", "2 horas", ["Daniel Radciffe", "Rupert Grint", "Tom Felton"])

console.log(pelicula)
pelicula.agregarActores("Emma Watson");

pelicula.eliminarActores("Tom Felton");
*/