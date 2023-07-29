const input = document.getElementById("tarea");
const form = document.getElementById("bodyForm");
let listaTareas = JSON.parse(localStorage.getItem("tareas")) || [];

document.getElementById("formTareas").addEventListener("submit",(e)=>{
    e.preventDefault();
    agregarTarea();
})

const agregarTarea = ()=>{
    listaTareas = JSON.parse(localStorage.getItem("tareas")) || [];
    console.log(listaTareas);
    listaTareas.push({
        id: listaTareas.length+1,
        tarea: input.value,
    })
    localStorage.setItem("tareas",JSON.stringify(listaTareas))
    mostrarTareas();
    input.value=""
}

const mostrarTareas = ()=>{
    listaTareas = JSON.parse(localStorage.getItem("tareas")) || [];
    form.innerHTML="";
    listaTareas.map((elemento, indice) => {
        return form.innerHTML += `<tr class="text-center" id="${elemento.id}">
        <th scope="row" class="col-2">${indice+1}</th>
        <td class="col-8">${elemento.tarea}</td>
        <td class="col-2">
            <button onclick="eliminar(${elemento.id})" class="btn btn-danger mt-2">Eliminar</button>
        </td>
      </tr>
        `
    });
}

const eliminar= (id)=>{
    const listaFiltrada = listaTareas.filter((elemento)=>{
        return elemento.id != id;
    })
console.log(listaFiltrada);
    listaTareas = listaFiltrada;
    localStorage.setItem("tareas",JSON.stringify(listaTareas))
    mostrarTareas()
}

mostrarTareas()