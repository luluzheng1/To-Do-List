//Allows electron to access html tags
const electron = require('electron');
const {ipcRenderer} = electron;

const form = document.querySelector('form');
//Listens for add task
form.addEventListener('submit', submitForm);

//Passes in an event object
function submitForm(e){
	// Stop object from submitting to file
	e.preventDefault();
	const task = document.querySelector('#task').value;
	//Sends task to main.js
	ipcRenderer.send('task:add', task);
}
