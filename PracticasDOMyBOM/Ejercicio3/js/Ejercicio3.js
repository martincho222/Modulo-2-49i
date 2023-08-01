/*
3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 
*/

    // Array para almacenar las tareas
    let tareas = [];

    // Función para agregar una tarea a la lista
    function agregarTarea() {
      let tareaInput = document.getElementById("tarea");
      let nuevaTarea = tareaInput.value;

      if (nuevaTarea !== "") {
        tareas.push(nuevaTarea);
        tareaInput.value = "";
        mostrarTareas();
      }
    }

    // Función para mostrar las tareas en la lista
    function mostrarTareas() {
      let listaTareas = document.getElementById("listaTareas");
      listaTareas.innerHTML = "";

      tareas.forEach(function (tarea, index) {
        let li = document.createElement("li");
        li.innerText = tarea;

        let btnEliminar = document.createElement("button");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.className = "btn btn-danger ml-5 mb-2";
        btnEliminar.addEventListener("click", function () {
          eliminarTarea(index);
        });

        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);
      });
    }

    // Función para eliminar una tarea de la lista
    function eliminarTarea(index) {
      tareas.splice(index, 1);
      mostrarTareas();
    }

    // Event listener para el botón "Agregar Tarea"
    document.getElementById("agregarBtn").addEventListener("click", agregarTarea);



    

