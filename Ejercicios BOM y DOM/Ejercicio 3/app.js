 const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        
        const taskTextElement = document.createElement("span");
        taskTextElement.textContent = taskText;
        
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", function () {
          taskList.removeChild(listItem);
        });
        
        listItem.appendChild(taskTextElement);
        listItem.appendChild(deleteButton);
        
        taskList.appendChild(listItem);
        taskInput.value = "";
      }
    });