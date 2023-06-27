// ejercicio 1

class Rectangulo {
  constructor(ancho, alto) {
    this.alto = alto;
    this.ancho = ancho;
  }
  area() {
    return this.alto * this.ancho;
  }
  perimetro() {
    return 2 * (this.alto + this.ancho);
  }
}

// ejercicio 2

class Perro {
  constructor(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
  }
  ladrar() {
    console.log("¡Guau! ¡Guau! ¡Guau!");
  }
}

// ejercicio 3

class Calculadora {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sumar() {
    return this.num1 + this.num2;
  }
  restar() {
    return this.num1 - this.num2;
  }
  multiplicar() {
    return this.num1 * this.num2;
  }
  dividir() {
    return this.num1 / this.num2;
  }
}

// ejercicio 4

class Libro {
  constructor(titulo, autor, anioPublicacion) {
    this.titulo = titulo;
    this.autor = autor;
    this.anioPublicacion = anioPublicacion;
  }
  getInfo() {
    console.log(`El titulo de la publicacion es ${this.titulo}, cuyo escritor es ${this.autor} quien realizó la publicación en el año ${this.anioPublicacion}`);
  }
}

// ejercicio 5

class Auto {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }
  getInfo() {
    console.log(`El auto es un ${this.marca}, modelo ${this.modelo} año ${this.anio}`);
  }
}

// ejercicio 6

class RectanguloCuadrado extends Rectangulo {
  constructor(ancho, alto) {
    super(ancho, alto);
  }
  esCuadrado() {
    if (this.alto === this.ancho) {
      console.log(`Como ${this.alto} = ${this.ancho}, el rectangulo es cuadrado`);
    } else {
      console.log(`Como ${this.alto} =! ${this.ancho}, el rectangulo no es cuadrado`);
    }
  }
}

// ejercicio 7

class Tiempo {
  constructor(hora, minutos) {
    this.hora = hora;
    this.minutos = minutos;
  }
  sumar() {}
}

// ejercicio 8

class Estudiante {
  constructor(nombre, apellido, notas, promedio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.notas = notas;
    this.promedio = promedio;
  }
  promedioNotas() {
    let sumador = 0;
    for (let i = 0; i < this.notas.length; i++) {
      sumador += this.notas[i];
    }
    this.promedio = sumador / this.notas.length;
    console.log(`El promedio de [${this.notas}] es ${this.promedio}`);
  }
}

// ejercicio 9

class Circulo {
  constructor(radio) {
    this.radio = radio;
  }
  area() {
    console.log(`El area del circulo de radio ${this.radio} es ${Math.PI * Math.pow(this.radio, 2)}`);
  }
  circunferencia() {
    console.log(`La circunferencia del circulo de radio ${this.radio} es ${Math.PI * this.radio * 2}`);
  }
}

// ejercicio 10

class VehiculoNuevo extends Auto {
  constructor(marca, modelo, anio) {
    super(marca, modelo, anio);
  }
  esNuevo() {
    if (this.anio >= 2015) {
      console.log(`El auto es nuevo`);
    } else {
      console.log(`El auto es viejo`);
    }
  }
}

class ListaTareas {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(titulo, descripcion) {
    const tarea = {
      titulo: titulo,
      descripcion: descripcion,
    };
    this.tareas.push(tarea);
  }

  eliminarTarea(indice) {
    if (indice >= 0 && indice < this.tareas.length) {
      this.tareas.splice(indice, 1);
    }
  }

  mostrarTareas() {
    if (this.tareas.length === 0) {
      console.log("No hay tareas en la lista.");
    } else {
      console.log("Tareas:");
      this.tareas.forEach((tarea, indice) => {
        console.log(`- ${indice + 1}. ${tarea.titulo}: ${tarea.descripcion}`);
      });
    }
  }
}

// ejercicio 12

class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  presentacionPersona() {
    console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} y soy ${this.genero}`);
  }
}

// ejercicio 13

class EstudianteAprobado extends Estudiante {
  constructor(nombre, apellido, notas, promedio) {
    super(nombre, apellido, notas, promedio);
  }
  esAprobado() {
    if (this.promedio >= 6) {
      console.log(`Como el promedio es ${this.promedio}, ${this.nombre} está aprobado`);
    } else {
      console.log(`Como el promedio es ${this.promedio}, ${this.nombre} está desaprobado`);
    }
  }
}

// ejercicio 14

class CalculadoraCientifica extends Calculadora {
  constructor(num1, num2) {
    super(num1, num2);
  }
  seno() {
    console.log(`El seno de ${this.num1} es ${Math.sin(this.num1)}, el de ${this.num2} es ${Math.sin(this.num2)} `);
  }
  coseno(num) {
    console.log(`El coseno de ${this.num1} es ${Math.cos(this.num1)}, el de ${this.num2} es ${Math.cos(this.num2)} `);
  }
  logaritmo(num) {
    console.log(`El logaritmo en base 10 de ${this.num1} es ${Math.log10(this.num1)}, el de ${this.num2} es ${Math.log10(this.num2)} `);
  }
}

// ejercicio 15

class Pelicula {
  constructor(titulo, director, duracion) {
    this.titulo = titulo;
    this.director = director;
    this.duracion = duracion;
    this.actores = [];
  }

  agregarActor(actor) {
    this.actores.push(actor);
  }

  eliminarActor(actor) {
    const indice = this.actores.indexOf(actor);
    if (indice !== -1) {
      this.actores.splice(indice, 1);
    }
  }
}
