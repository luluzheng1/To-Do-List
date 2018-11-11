const electron = require('electron');
const url = require('url');
const path = require('path');

//gets objects from electron
const {app, BrowserWindow, Menu} = electron;

let mainWindow;
let addWindow;

// Listen for app to be ready 
app.on('ready', function(){
	// Create new window
	mainWindow = new BrowserWindow({});
	// Load html into window
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'mainWindow.html'),
		protocol:'file:', 
		slashes: true
	}));

	// Build menu from template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	// Insert menu
	Menu.setApplicationMenu(mainMenu);
});

// Create add window
function createAddWindow(){
	// Create new window
	addWindow = new BrowserWindow({
		width: 300,
		height: 200,
		title: 'Add Task to To Do List'
	});
	// Load html into window
	addWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'addWindow.html'),
		protocol:'file:', 
		slashes: true
	}));
}

// Create menu template
const mainMenuTemplate = [
	{
		label: 'File',
		submenu:[
			{
				label: 'Add Task',
				click(){
					createAddWindow();
				}
			},
			{
				label: 'Clear Task'
			},
			{
				label: 'Quit',
				accelerator: process.platform == 'darwin' ? 'Command+Q' :
				'Ctrl+Q',  
				click(){
					app.quit();
				}
			}
		]
	}

];