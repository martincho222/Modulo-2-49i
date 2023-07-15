// let cadena = prompt("Ingese una cadena");
// let vocales = cadena.match(/[aeiou]/gi);
// console.log(vocales);
// console.log(`La cantidad de vocales es: ${vocales ? vocales.length : 0}`);
// if(vocales) {
//     console.log(vocales.length);
// } else {
//     console.log(0);
// }

/////////////////////////////////////////////////////////////////////
//11- Implementa una clase ListaTareas que permita agregar, eliminar y mostrar tareas. Cada tarea debe tener un título y una descripción.

// class Tarea {
//     constructor(titulo, descripcion) {
//         this.titulo = titulo;
//         this.descripcion = descripcion;
//     }
// }

// class ListaTareas {
//     constructor() {
//         this.tareas = [];
//     }
//    setTarea(titulo, descripcion){
//         const tarea1 = new Tarea(titulo, descripcion);
//         // const tarea = {
//         //     titulo,
//         //     descripcion
//         // }
//         this.tareas.push(tarea1)
//     }
//     eliminarTarea(indice) {
//         this.tareas.splice(indice - 1, 1);
//     }
//     getTareas() {
//         this.tareas.forEach((tarea, indice) => {
//             console.log(`${indice}`, tarea);
//         })
//         // console.log(this.tareas);
//     }
// }
// const lista = new ListaTareas();

// lista.agregarTarea("comprar", "ir a comprar pan");
// lista.agregarTarea("comprar", "ir a comprar azucar");
// lista.agregarTarea("comprar", "ir a comprar verduras");
// lista.agregarTarea("comprar", "ir a comprar huevos");
// lista.agregarTarea("comprar", "ir a comprar tortillas");
// lista.agregarTarea("comprar", "ir a comprar facturas");
// lista.agregarTarea("comprar", "ir a comprar frutas");
// // lista.eliminarTarea(1)
// lista.mostrarTareas()

// const tareas = [
//     {
//         titulo:"comprar",
//         descripcion: "ir a comprar pan"
//     },
//     {
//         titulo:"comprar",
//         descripcion: "ir a comprar pan"
//     },
//     {
//         titulo:"comprar",
//         descripcion: "ir a comprar pan"
//     },
//     {
//         titulo:"comprar",
//         descripcion: "ir a comprar pan"
//     }
// ] 
/////////////////////////////////////////////////////////////////////
// let inputElement = document.getElementById("miInput");
// const handleChange = () => {
//     console.log("esta cambiando el valor del input");
// }

// inputElement.addEventListener("change", handleChange);

/////////////////////////////////////////////////////////////////////