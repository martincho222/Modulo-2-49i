document.getElementById('crearPersona').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const edad = +document.getElementById('edad').value;
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = +document.getElementById('altura').value;
    const anioNacimiento = +document.getElementById('anioNacimiento').value;

    nuevaPersona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);

    alert(nuevaPersona.mostrarDatos());

    document.getElementById('mostrarGeneracion').removeAttribute('disabled');
    document.getElementById('esMayorDeEdad').removeAttribute('disabled');
});

document.getElementById('mostrarGeneracion').addEventListener('click', function() {
  nuevaPersona.mostrarGeneracion();
});

document.getElementById('esMayorDeEdad').addEventListener('click', function() {
  const esMayor = nuevaPersona.esMayorDeEdad();

  if (esMayor) {
    alert('Es mayor de edad.');
  } else {
    alert('No es mayor de edad.');
  }
});

class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }
  mostrarGeneracion() {
    const generacion = this.calcularGeneracion();
    let mensaje = "Generación desconocida";
    
    switch (generacion) {
      case "Baby Boomer":
        mensaje = "Perteneces a la generación Baby Boomer. Rasgo característico: Posguerra y cambios culturales.";
        break;
      case "Generación X":
        mensaje = "Perteneces a la generación X. Rasgo característico: Desarrollo tecnológico y globalización.";
        break;
      case "Millennials":
        mensaje = "Perteneces a la generación Millennials. Rasgo característico: Era digital y cambio en la forma de comunicarse.";
        break;
      case "Generación Z":
        mensaje = "Perteneces a la generación Z. Rasgo característico: Nativos digitales y conectividad total.";
        break;
    }
    
    alert(mensaje);
  }
  calcularGeneracion() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.anioNacimiento;
    
    if (age >= 76) {
      return "Baby Boomer";
    } else if (age >= 57) {
      return "Generación X";
    } else if (age >= 41) {
      return "Millennials";
    } else {
      return "Generación Z";
    }
  }
  esMayorDeEdad() {
    return this.edad >= 18;
  }
  mostrarDatos() {
    return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.DNI}\nSexo: ${this.sexo}\nPeso: ${this.peso} kg\nAltura: ${this.altura} cm\nAño de Nacimiento: ${this.anioNacimiento}`;
  }
}