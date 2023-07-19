let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let datemsg = document.getElementById("dateMsg");
let textmsg = document.getElementById("textMsg");
let add = document.getElementById("add");
let tasks = document.getElementById("tasks");

let data = JSON.parse(localStorage.getItem("tasks")) || [];

//esta funcion genera un id random y verifica que no exista uno igual
// const objeto = [{
//     id: idRandom(),
//     text: "alksjlakjdslakjdlkajd",
//     date: "12/07/2023",
//     description:'alkdjlkajdoqiu2eoi,zmxchveksurpo'
// }]
// console.log(objeto[0].id);
const idRandom = () => {
    if(data.length > 0) {
        return data[data.length - 1].id + Math.round(Math.random() * 100);
    } else {
        return Math.round(Math.random() * 100);
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation()
})

let formValidation = () => {
    if(textInput.value === "" || dateInput.value === "" || textarea.value === ""){
        msg.innerHTML = "La tarea no puede estar en blanco";
        datemsg.innerHTML = "La fecha es requerida";
        textmsg.innerHTML = 'La descripción es requerida';
    } else {
        msg.innerHTML = "";
        datemsg.innerHTML = "";
        textmsg.innerHTML = '';
        data.push({
            id: idRandom(),
            text: textInput.value,
            date: dateInput.value,
            description:textarea.value
        })
        localStorage.setItem('tasks',JSON.stringify(data))
        createTasks()
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();
        (() => {
            add.setAttribute("data-bs-dismiss", "");
        })()

    }
}

const createTasks = () => {
    tasks.innerHTML = "";
    data.map((task, idx) => {
        return tasks.innerHTML += `
            <div id="${idx}">
              <span class="fw-bold">${task.text}</span>
              <span class="small text-secondary">${task.date}</span>  
              <p>${task.description}</p>
              <span class="options">
              <i onclick="updateTask(${task.id})" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit" ></i>
              <i onclick="deleteTask(${task.id})" class="fas fa-trash-alt"></i>
              </span>
            </div>
        
        `
    })
}

const updateTask = (id) => {
    console.log(id)
    const tareaBuscada = data.find((task) => {
        return task.id === id
    })
    textInput.value = tareaBuscada.text;
    dateInput.value = tareaBuscada.date;
    textarea.value=  tareaBuscada.description;
    const filter = data.filter((task) => {
        return task.id !== id
    })
    data = filter;
    localStorage.setItem("tasks", JSON.stringify(data))
    console.log(tareaBuscada);
    createTasks()
}

const deleteTask = (id) => {
    const confirmar = confirm("desea eliminar esta tarea")
  if(confirmar){
    console.log("clicked");
    const tareaFiltrada = data.filter((tarea)=>{
        return tarea.id !== id;
    });
    data = tareaFiltrada;
    localStorage.setItem("tasks", JSON.stringify(data));
    createTasks()
  } else {
    alert('Cancelado')
  }
}

createTasks()