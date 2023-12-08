// ES module exporting functions
export function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText) {
    const newTask = { text: taskText, completed: false };
    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
  }
  }
  
  export function renderTasks() {
    const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    if (task.completed) {
      taskItem.classList.add("completed-task");
    }

    taskItem.innerHTML = `
      <span>${task.text}</span>
      <button class="delete-task" onclick="deleteTask(${index})">Delete</button>
      <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTaskCompletion(${index})">
    `;
    
    taskList.appendChild(taskItem);
  });
  }
  
  export function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }
  
  export function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }
  