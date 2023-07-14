// Seleccionar Elementos del DOM

//getElementById
// console.log(document.getElementById("titulo").textContent);

//getElementByClassName
// console.log(document.getElementsByClassName("titulo2")[0]);

//getElementByTagName
// console.log(document.getElementsByTagName("button")[0]);

//getElementByName
// console.log(document.getElementsByName("enviar")[0]);

//querySelector
// console.log(document.querySelector("#titulo"));

//querySelectorAll
// console.log(document.querySelectorAll("h1"));

// let titulo = document.getElementById("titulo");
// titulo.innerHTML = "<div> nuevo titutlo</div>";
// titulo.style.color = "red"
// console.log(titulo);

//Agregar Nodos o elementos
// let contenedor = document.querySelector(".contenedor");
// let nuevoParrafo = document.createElement("p");
// nuevoParrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, adipisci!";
// contenedor.appendChild(nuevoParrafo);
// console.log(contenedor)


//Clonar Nodos

// let litaOriginal = document.getElementById("miLista");
// let listaClonada = litaOriginal.cloneNode(true);

// document.body.appendChild(listaClonada)

// console.log(litaOriginal);
// console.log(listaClonada);

//agregar un Nodo
// let contenedor = document.getElementById("contenedor");
// let parrafo = document.createElement('p');
// parrafo.innerHTML = "este el nuevo parrafo el cual agregaremos";

// contenedor.insertAdjacentElement("afterbegin", parrafo)


//remover y reemplazar un Nodo
// let lista = document.getElementById("miLista");
// let elemento2 = document.getElementById("element2");
// let nuevoLI = document.createElement("li");
// nuevoLI.innerText ="Nuevo Elemento 2";

// // lista.removeChild(elemento2)
// lista.replaceChild(nuevoLI, lista.childNodes[3])
// console.log(lista.childNodes);