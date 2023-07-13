//vamos a traer los datos de localstorage y vamos a definir la memoria de nuestra app
let agenda = JSON.parse(localStorage.getItem("agenda")) || [];
let memo = 10;

let agendaFiltrada = JSON.parse(localStorage.getItem("agenda")) || [];
class Contacto {
    constructor(nombre, telefono){
        this.nombre=nombre;
        this.telefono=telefono;
    }
}

//contar registros
const contarRegistro = (array) =>{
    document.getElementById("count").innerHTML = array.length;
}

const verifyContact = (telefono) => {
    let verify = agenda.find((contacto) => {
        return contacto.telefono === telefono
    })
    if (verify){
        return true
    }
    else
    {
        return false
    }
}

//agregar contacto
const addContact = () => {
    let nombre = document.querySelector("#nombreText");
    let telefono = document.querySelector("telefText");
    let alertNombre = document.getElementById("alert-nombre");
    let alertTelefono = document.getElementById("alert-telefono");
    if(!nombre.value || !telefono.value){
        alertNombre.classList.remove("d-none")
        alertTelefono.classList.remove("d-none")
        document.querySelector("#nombreText").focus();
    }
    else{
        alertNombre.classList.add("d-none")
        alertTelefono.classList.add("d-none")
        //esta variable va a chequear que el telefono no exista ya
        let verify = verifyContact(telefono.value);
        if (verify){
            alert("El contacto ya existe");
        }
        else{
            if (memo>=0){
                agenda.push(new Contacto(nombre.value, telefono.value))
                localStorage.setItem("agenda", JSON.stringify(agenda))
                memo--
            }
            else
            {
                alert("memoria llena, elimine algunos contactos")
            }
            updateAgenda();
        }
    }
}
//actualizar data de agenda y limpiar form
const updateAgenda = () => {
    document.querySelector("#nombreText").value="";
    document.querySelector("#teleText").value="";
    document.querySelector("#nombreText").focus();
    agenda = JSON.parse(localStorage.getItem("agenda"));
    contarRegistro(agenda);
    cargarTabla(agenda);
}

const cargarTabla =(array)=>{
    document.querySelector("#cuerpoTabla").innerHTML = "";
    array.forEach((elemento, index)=>{
        let fila = document.createElement("tr");
        fila.classList.add= "text-center";
        let datos =`
        <td>${elemento.nombre}</td>
        <td>${elemento.telefono}</td>
        <td>
            <button class="btn btn-danger" onclick="deleteContact(${index}")>X</button>
        </td>
        `;
        fila.innerHTML = datos;
        let cuerpo = document.querySelector("#cuerpoTabla");
        cuerpo.appendChild(fila);
    });
    document.querySelector("#cuerpoTabla").innerHTML = "";

}

const deleteContact = (idx) => {
    agenda = JSON.parse(localStorage.getItem("agenda"));
    let index = agenda.findIndex((contacto)=> {
        return contacto.nombre === agenda[idx].nombre
    });
    let validar = confirm(`Estas seguro que deseas eliminar a ${agenda[index].nombre} de tus contactos?`);
    if (validar){
        agenda.splice(index,1);
        localStorage.setItem("agenda",JSON.stringify(agenda))
    }
}

const filterTabla = () => {
    let text = document.getElementById("textBuscar").value;
    let clear = document.querySelector("#button-clear")
    agenda = JSON.parse(localStorage.getItem("agenda"));
    agendaFiltrada = agenda.filter((contacto)=>{
        return contacto.nombre.toLowerCase().indexOf(text.toLowerCase()) > -1;
    })
    if(text.length > 0){
        clear.classList.remove("d-none")
    }
    else
    {
        clear.classList.add("d-none")
    }
    console.log(agendaFiltrada)
    contarRegistro(agendaFiltrada)
    cargarTabla(agendaFiltrada)
}

const limpiarTabla = ()=>{
    let clear = document.querySelector("#button-clear")
    clear.classList.add("d-none");
    agenda = JSON.parse(localStorage.getItem("agenda"));
    agendaFiltrada = agenda;
    document.getElementById("textBuscar").value= "";
    document.getElementById("textBuscar").focus();
    contarRegistro(agendaFiltrada)
    cargarTabla(agendaFiltrada)

}

contarRegistro(agenda)
cargarTabla(agenda)