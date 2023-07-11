// Números mágicos - Dificultad:  🟢
// 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

let respuesta;

function numeroRandom() {
    let resultado = Math.floor(Math.random() * 11);
    return resultado;
}

document.getElementById("comenzar").addEventListener("click", () => {
    respuesta = numeroRandom();
    document.getElementById("contenedorInput").style = ""
    document.getElementById("comenzar").innerHTML = "Comenzar a Jugar"
    document.getElementById("alert").innerHTML = "";
    document.getElementById("ingresoNumero").value = ""
    document.getElementById("alert").classList.remove("text-success");
    document.getElementById("alert").classList.add("text-danger");
    console.log(`la respuesta es ${respuesta}`);
})

document.getElementById("enviar").addEventListener("click", () => {
    let ingresoNumero = parseInt(document.getElementById("ingresoNumero").value);
    if (ingresoNumero >= 0 && ingresoNumero <= 10 && !isNaN(ingresoNumero)) {
        console.log("correcto");
        if (respuesta === ingresoNumero) {
            victoria();
        } else if (respuesta < ingresoNumero) {
            mostrarError(`Intenta un numero mas bajo`)
        } else if (respuesta > ingresoNumero) {
            mostrarError(`Intenta un numero mas alto`)
        }
    } else {
        mostrarError("Error⚠ Debe ingresar un numero del 1 al 10");
    }
})

function mostrarError(error) {
    document.getElementById("alert").innerHTML = error;
    document.getElementById("ingresoNumero").addEventListener("click", () => {
        document.getElementById("alert").innerHTML = ""
    });
}

function victoria() {
    document.getElementById("alert").classList.remove("text-danger");
    document.getElementById("alert").classList.add("text-success");
    document.getElementById("alert").innerHTML = "Ganaste!";
    document.getElementById("contenedorInput").style = "display:none;"
    document.getElementById("comenzar").innerHTML = "Volver a Jugar"

}

document.getElementById("borrar").addEventListener("click", () => {
    document.getElementById("ingresoNumero").value = ""
    document.getElementById("borrar").style = "display:none;"
    document.getElementById("alert").innerHTML = "";
})

document.getElementById("ingresoNumero").addEventListener("input", () => {
    let ingresoNumero = document.getElementById("ingresoNumero").value;
    let botonBorrar = document.getElementById("borrar");

    if (ingresoNumero.trim() === "") {
        botonBorrar.style.display = "none";
    } else {
        botonBorrar.style.display = "";
    }
})