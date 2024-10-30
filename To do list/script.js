// Sound effect for button clicks
const clickSound = new Audio('mouse-click-sound-233951.mp3');

// Function to play sound
function playSound() {
    clickSound.currentTime = 0; // Rewind to start
    clickSound.play();
}

let tasks = [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
    playSound(); // Play sound on add
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
    playSound(); // Play sound on delete
}

// Function to edit a task
function editTask(index) {
    const newTask = prompt("Edit your task:", tasks[index]);
    if (newTask) {
        tasks[index] = newTask;
        renderTasks();
        playSound(); // Play sound on edit
    }
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear existing tasks
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        
        // Create edit and delete buttons
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-button';
        editButton.onclick = () => editTask(index);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = () => deleteTask(index);
        
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Event listener for the Add Task button
document.getElementById('addTaskButton').onclick = addTask;

// Allow Enter key to add tasks
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
