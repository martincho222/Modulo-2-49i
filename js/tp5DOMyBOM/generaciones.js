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
        switch (true) {
            case (this.anio >= generaciones.generacion_z.desde && this.anio <= generaciones.generacion_z.hasta):
                document.getElementById("texto-modal").innerHTML = `eres ${generaciones.generacion_z.nombre}`;
                break;
            case (this.anio >= generaciones.generacion_y.desde && this.anio <= generaciones.generacion_y.hasta):
                document.getElementById("texto-modal").innerHTML = `eres ${generaciones.generacion_y.nombre}`;
                break;
            case (this.anio >= generaciones.generacion_x.desde && this.anio <= generaciones.generacion_x.hasta):
                document.getElementById("texto-modal").innerHTML = `eres ${generaciones.generacion_x.nombre}`;
                break;
            case (this.anio >= generaciones.babyBoom.desde && this.anio <= generaciones.babyBoom.hasta):
                document.getElementById("texto-modal").innerHTML = `eres ${generaciones.babyBoom.nombre}`;
                break;
            case (this.anio >= generaciones.silent.desde && this.anio <= generaciones.silent.hasta):
                document.getElementById("texto-modal").innerHTML = `eres ${generaciones.silent.nombre}`;
                break;
            default:
                document.getElementById("texto-modal").innerHTML = `no te encuentras en ningun rango`;
        }
    }

    esMayorDeEdad() {
        document.getElementById("tituloModal").innerHTML = "Confirmacion de Edad"
        if (this.edad >= 18) {
            document.getElementById("texto-modal").innerHTML = "Eres mayor de edad"
        } else if (this.edad < 18) {
            document.getElementById("texto-modal").innerHTML = "Eres menor de edad"
        } else {
            document.getElementById("texto-modal").innerHTML = "Edad fuera de rango"
        }
    }
    MostrarDatos() {
        document.getElementById("tituloModal").innerHTML = "Mostrar Datos"
        document.getElementById("texto-modal").innerHTML = `nombre: ${this.nombre} \nedad: ${this.edad} \nDNI: ${this.dni} \nsexo: ${this.sexo==="H" ? "Masculino" : "Femenino"} \npeso: ${this.peso} \naltura: ${this.altura} \naño de nacimiento: ${this.anio}`;
    }

}

let generaciones = {
    generacion_z: { nombre: "Generacion Z", rasgo: "Irreverencia", desde: 1994, hasta: 2010, },
    generacion_y: { nombre: "Generacion Y (Millenial)", rasgo: "Frustracion", desde: 1981, hasta: 1993, },
    generacion_x: { nombre: "Generacion X", rasgo: "Obsesion por el exito", desde: 1969, hasta: 1980, },
    babyBoom: { nombre: "Baby Boom", rasgo: "Ambicion", desde: 1949, hasta: 1968, },
    silent: { nombre: "Silent Generation", rasgo: "Austeridad", desde: 1930, hasta: 1948, }
}


let usuario;
let nombreInput = document.getElementById("nombre")
let edadInput = document.getElementById("edad");
let dniInput = document.getElementById("dni");
let sexoInput = document.getElementById("sexo");
let pesoInput = document.getElementById("peso");
let alturaInput = document.getElementById("altura");
let anioInput = document.getElementById("anio");

//BOTON REGISTRAR O ENVIAR

let enviar = document.getElementById("enviar").addEventListener("click", () => {
    event.preventDefault();
    let nombre = nombreInput.value;
    if (nombre === "") {
        nombreInput.classList.add("is-invalid")
        return;
    }
    document.getElementById("nombre").classList.remove("is-invalid")

    let edad = edadInput.value;
    if (edad === "") {
        edadInput.classList.add("is-invalid")
        return;
    }
    document.getElementById("edad").classList.remove("is-invalid")

    let dni = document.getElementById("dni").value;
    if (dni === "") {
        dniInput.classList.add("is-invalid")
        document.getElementById("dni").classList.add("is-invalid")
        return;
    }
    document.getElementById("dni").classList.remove("is-invalid")

    let sexo = document.getElementById("sexo").value;
    if (sexo === "1") {
        sexo = "H"
    } else if (sexo === "2") {
        sexo = "M"
    } else if (sexo === "") {
        sexoInput.classList.add("is-invalid")
        return;
    }
    document.getElementById("sexo").classList.remove("is-invalid")

    let peso = document.getElementById("peso").value;
    if (peso === "" || peso >= 500 || peso <= 0) {
        pesoInput.classList.add("is-invalid")
        return;
    }
    document.getElementById("peso").classList.remove("is-invalid")

    let altura = document.getElementById("altura").value;
    if (altura === "" || altura >= 250 || altura <= 0) {
        alturaInput.classList.add("is-invalid")
        return;
    }
    document.getElementById("altura").classList.remove("is-invalid")


    let anio = document.getElementById("anio").value;
    if (anio === "" || anio >= 2024 || anio <= 0 || anio.length < 4) {
        anioInput.classList.add("is-invalid")
        return;
    }
    document.getElementById("anio").classList.remove("is-invalid")


    document.getElementById("esmayor").classList.remove("disabled");
    document.getElementById("mostrar").classList.remove("disabled");
    document.getElementById("generacion").classList.remove("disabled");
    document.getElementById("enviar").classList.add("disabled");
    document.getElementById("borrar").classList.remove("d-none");

    usuario = new Persona(nombre, edad, dni, sexo, peso, altura, anio);

});

//BOTON MAYOR DE EDAD

let esmayor = document.getElementById("esmayor").addEventListener("click", () => {
    event.preventDefault();
    usuario.esMayorDeEdad();
});

//BOTON MOSTRAR DATOS

let mostrar = document.getElementById("mostrar").addEventListener("click", () => {
    event.preventDefault();
    usuario.MostrarDatos();
});

//BOTON MOSTRAR GENERACION

let generacion = document.getElementById("generacion").addEventListener("click", () => {
    event.preventDefault();
    usuario.mostrarGeneracion()
});

//BOTON CLEAR

let borrar = document.getElementById("borrar").addEventListener("click", () => {
    event.preventDefault();

    nombre.value = ""
    edad.value = ""
    dni.value = ""
    sexo.value = ""
    peso.value = ""
    altura.value = ""
    anio.value = ""

    document.getElementById("enviar").classList.remove("disabled");
    document.getElementById("esmayor").classList.add("disabled");
    document.getElementById("mostrar").classList.add("disabled");
    document.getElementById("generacion").classList.add("disabled");
    document.getElementById("borrar").classList.add("d-none");
});