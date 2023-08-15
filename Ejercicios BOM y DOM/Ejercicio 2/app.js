class Persona {
    constructor(name, age, dni, sex, weight, height, birthdate) {
        this.name = name;
        this.age = age;
        this.dni = dni;
        this.sex = sex;
        this.weight = weight;
        this.height = height;
        this.birthdate = birthdate;
  }
  mostrarGeneracion() {
    if (this.age <= 29 && this.age >= 13) {
            alert(`Pertenece a la generacion Z por su edad ${this.age} y su rasgo es la irreverencia`);
    }
    if (this.age <= 42 && this.age >= 30) {
            alert(`Pertenece a la generacion Y por su edad ${this.age} y su rasgo es la frustración`);
    }
    if (this.age <= 54 && this.age >= 43) {
            alert(`Pertenece a la generacion X por su edad ${this.age} y su rasgo es la obsesión por el éxito`);
    }
    if (this.age <= 74 && this.age >= 55) {
            alert(`Pertenece a la generacion baby boom por su edad ${this.age} y su rasgo es la ambición`);
    }
    if (this.age <= 93 && this.age >= 75) {
            alert(`Pertenece a la generacion silent por su edad ${this.age} y su rasgo es la austeridad`);
    }
  }
  esMayorDeEdad() {
    if (this.age >= 18) {
        alert(`¡${this.name} es mayor de edad!`);
    } else {
        alert(`¡${this.name} es menor de edad!`)
    }
  }
  mostrarDatos() {
    alert(`Nombre: ${this.name}\nEdad: ${this.age} años\nD.N.I. : ${this.dni}\nSexo: ${this.sex}\nPeso: ${this.weight}\nAltura: ${this.height}\nFecha de nacimiento: ${this.birthdate}`);
  }
}
 
    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("personalInfoForm");
      const muestraGeneracion = document.getElementById("muestraGeneracion");
      const esMayor = document.getElementById("esMayor");
      const mostrarDatos = document.getElementById("mostrarDatos");
      let persona = null;

      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        const name = document.getElementById("nombre").value;
        const age = parseInt(document.getElementById("edad").value);
        const dni = document.getElementById("dni").value;
        const sex = document.querySelector('input[name="sexo"]:checked').value;
        const weight = parseFloat(document.getElementById("peso").value);
        const height = parseInt(document.getElementById("altura").value);
        const birthdate = parseInt(document.getElementById("anioNacimiento").value);

        persona = new Persona(name, age, dni, sex, weight, height, birthdate);
        console.log(persona);
      });

      muestraGeneracion.addEventListener("click", function () {
        persona.mostrarGeneracion();
      });

      esMayor.addEventListener("click", function () {
        persona.esMayorDeEdad();
      });

      mostrarDatos.addEventListener("click", function () {
        persona.mostrarDatos();
      })
    })
