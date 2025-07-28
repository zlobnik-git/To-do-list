function addTask() {  
  const input = document.getElementById("taskInput");  
  const taskList = document.getElementById("taskList");  

  if (input.value.trim() !== "") {  
    const li = document.createElement("li");  
    li.textContent = input.value;  
    taskList.appendChild(li);  
    input.value = "";  
    saveTasks();  
  }  
}  

// Сохранение задач в LocalStorage  
function saveTasks() {  
  const tasks = [];  
  document.querySelectorAll("#taskList li").forEach(task => {  
    tasks.push(task.textContent);  
  });  
  localStorage.setItem("tasks", JSON.stringify(tasks));  
}  

// Загрузка задач при старте  
window.onload = () => {  
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];  
  savedTasks.forEach(task => {  
    const li = document.createElement("li");  
    li.textContent = task;  
    document.getElementById("taskList").appendChild(li);  
  });  
};  