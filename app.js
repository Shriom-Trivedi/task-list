//define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();
//load all event listeners
function loadEventListeners() {
  //add task input
  form.addEventListener('submit', addTask);
  
  //remove task event
  taskList.addEventListener('click', removeTask);

  //clear tasks
  clearBtn.addEventListener('click', clearTasks);

  //filter tasks
  filter.addEventListener('keyup', filterTasks);
}


// Add task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // create li Element
  const li = document.createElement('li');
  //add class
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  //create delete link
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //add icon
  link.innerHTML = '<i class= "fa fa-remove">';
  //append link to li
  li.appendChild(link);

  //append li to ul
  taskList.appendChild(li);

  //clear input
  taskInput.value = '';

  e.preventDefault();
}

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You Sure ?')){
      e.target.parentElement.parentElement.remove();
    }
  }
  
  e.preventDefault();

}

function clearTasks(e) {
  // taskList.innerHTML= '';

  //faster
  if(confirm('Are You sure ?')){
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else {task.style.display = 'none';}
  });

  
  e.preventDefault();
}