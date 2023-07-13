// Generaciones - Dificultad:  🟢🟡
// 2- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// ----
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anio) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anio = anio;
    }
    mostrarGeneracion() {
        if (this.anio >= generaciones.generacion_z.desde && this.anio <= generaciones.generacion_z.hasta) {
            console.log(`eres ${generaciones.generacion_z.nombre}`);
        } else if (this.anio >= generaciones.generacion_y.desde && this.anio <= generaciones.generacion_y.hasta) {
            console.log(`eres ${generaciones.generacion_y.nombre}`);
        } else if (this.anio >= generaciones.generacion_x.desde && this.anio <= generaciones.generacion_x.hasta) {
            console.log(`eres ${generaciones.generacion_x.nombre}`);
        } else if (this.anio >= generaciones.babyBoom.desde && this.anio <= generaciones.babyBoom.hasta) {
            console.log(`eres ${generaciones.babyBoom.nombre}`);
        } else if (this.anio >= generaciones.silent.desde && this.anio <= generaciones.silent.hasta) {
            console.log(`eres ${generaciones.silent.nombre}`);
        } else {
            console.log(`no te encuentras en ningun rango`);
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            console.log(`eres mayor de edad`);
        } else if (this.edad < 18) {
            console.log(`eres menor de edad`);
        } else { console.log(`edad fuera de rango`); }
    }
    MostrarDatos() {
        console.log(`nombre: ${this.nombre} \nedad: ${this.edad} \nDNI: ${this.dni} \nsexo: ${this.sexo==="H" ? "Masculino" : "Femenino"} \npeso: ${this.peso} \naltura: ${this.altura} \naño de nacimiento: ${this.anio}`);
    }

}

let generaciones = {
    generacion_z: { nombre: "Generacion Z", rasgo: "Irreverencia", desde: 1994, hasta: 2010, },
    generacion_y: { nombre: "Generacion Y", rasgo: "Frustracion", desde: 1981, hasta: 1993, },
    generacion_x: { nombre: "Generacion X", rasgo: "Obsesion por el exito", desde: 1969, hasta: 1980, },
    babyBoom: { nombre: "Baby Boom", rasgo: "Ambicion", desde: 1949, hasta: 1968, },
    silent: { nombre: "Silent Generation", rasgo: "Austeridad", desde: 1930, hasta: 1948, }
}


let usuario;

let enviar = document.getElementById("enviar").addEventListener("click", () => {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let dni = document.getElementById("dni").value;
    let sexo = document.getElementById("sexo").value;
    if (sexo === "1") {
        sexo = "H"
    } else if (sexo === "2") {
        sexo = "M"
    }
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let anio = document.getElementById("anio").value;


    document.getElementById("esmayor").classList.remove("disabled");
    document.getElementById("mostrar").classList.remove("disabled");
    document.getElementById("generacion").classList.remove("disabled");

    usuario = new Persona(nombre, edad, dni, sexo, peso, altura, anio);

});

let esmayor = document.getElementById("esmayor").addEventListener("click", () => {
    event.preventDefault();
    usuario.esMayorDeEdad();
});

let mostrar = document.getElementById("mostrar").addEventListener("click", () => {
    event.preventDefault();
    usuario.MostrarDatos();
});

let generacion = document.getElementById("generacion").addEventListener("click", () => {
    event.preventDefault();
    usuario.mostrarGeneracion()
});