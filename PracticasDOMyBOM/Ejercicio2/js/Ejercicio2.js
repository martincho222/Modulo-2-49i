/*
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

*/

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.nacimiento = nacimiento;
    }
    mostrarGeneracion() {
      if (this.nacimiento <= 1948) {
        return "Esta persona pertenece a la generación Silent Generation y el rasgo característico de esta generación es la Austeridad";
      } else if (this.nacimiento <= 1968) {
        return "Esta persona pertenece a la generación Baby Boom y el rasgo característico de esta generación es la Ambición";
      } else if (this.nacimiento <= 1980) {
        return "Esta persona pertenece a la generación Generación X y el rasgo característico de esta generación es la Obsesión por el éxito";
      } else if (this.nacimiento <= 1993) {
        return "Esta persona pertenece a la generación Y millennials y el rasgo característico de esta generación es la Frustración";
      } else if (this.nacimiento <= 2010) {
        return "Esta persona pertenece a la generación Z y el rasgo característico de esta generación es la Irreverencia";
      }
    }
    esMayorDeEdad() {
      if (this.edad >= 18) {
        return "Es mayor de edad";
      } else {
        return "Es menor de edad";
      }
    }
    mostrarDatos() {
      alert(`
      Nombre: ${this.nombre}
      Edad: ${this.edad}
      DNI: ${this.dni}
      sexo: ${this.sexo}
      peso: ${this.peso} kg
      altura: ${this.altura} cm
      Fecha de Nacimiento: ${this.nacimiento}
      `);
    }
  }

  let persona;

  document.getElementById("crearBtn").addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let dni = document.getElementById("dni").value;
    let sexo = document.getElementById("sexo").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let nacimiento = parseInt(document.getElementById("nacimiento").value);

    persona = new Persona(nombre, edad, dni, sexo, peso, altura, nacimiento);

    alert("Persona creada con éxito");
  });

  document.getElementById("mostrarGeneracionBtn").addEventListener("click", function () {
    let generacion = persona.mostrarGeneracion();
    alert(generacion);
  });

  document.getElementById("esMayorDeEdadBtn").addEventListener("click", function () {
    let mensajeMayorEdad = persona.esMayorDeEdad();
    alert(mensajeMayorEdad);
  });

  document.getElementById("mostrarDatosBtn").addEventListener("click", function () {
    persona.mostrarDatos();
  });