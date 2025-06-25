document.getElementById('add-task').addEventListener('click', function () {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
    taskInput.focus();
  }
});

function addTask(text) {
  const taskList = document.getElementById('task-list');

  const li = document.createElement('li');
  li.className = 'task';

  const span = document.createElement('span');
  span.textContent = text;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';

  // Toggle complete
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Remove task
  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);
}
