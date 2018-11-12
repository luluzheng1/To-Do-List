
const electron = require('electron');
const {ipcRenderer} = electron;
const ul = document.querySelector('ul');
// Add task
ipcRenderer.on('task:add', function(e, task){
//styling
ul.className = 'collection';
const li = document.createElement('li');
li.className = 'collection-item';
const taskText = document.createTextNode(task);
li.appendChild(taskText);
ul.appendChild(li);
});

// Clear tasks
ipcRenderer.on('task:clear', function(){
	ul.innerHTML = "";
	ul.className = '';
});

// Remove task
ul.addEventListener('dblclick', removeTask);

function removeTask(e){
	e.target.remove();
	if(ul.children.length == 0){
		ul.className = '';
	}
}