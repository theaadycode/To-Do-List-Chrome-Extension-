document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todoList');
    const newTaskInput = document.getElementById('newTask');
    const addTaskButton = document.getElementById('addTask');
  
    // Load tasks from storage
    chrome.storage.sync.get('tasks', function (data) {
      const tasks = data.tasks || [];
      tasks.forEach(task => {
        addTaskToList(task);
      });
    });
  
    // Add task when the button is clicked
    addTaskButton.addEventListener('click', function () {
      const newTask = newTaskInput.value.trim();
      if (newTask !== '') {
        addTaskToList(newTask);
        saveTasks();
        newTaskInput.value = '';
      }
    });
  
    // Add task to the list and save tasks to storage
    function addTaskToList(task) {
      const li = document.createElement('li');
      li.textContent = task;
  
      // Add delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function () {
        li.remove();
        saveTasks();
      });
  
      li.appendChild(deleteButton);
      todoList.appendChild(li);
    }
  
    // Save tasks to storage
    function saveTasks() {
      const tasks = Array.from(todoList.children).map(li => li.textContent);
      chrome.storage.sync.set({ 'tasks': tasks });
    }
  });
  