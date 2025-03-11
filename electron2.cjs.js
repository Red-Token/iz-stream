const {app, BrowserWindow} = require('electron');

let mainWindow;

app.whenReady().then(() => {
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 768,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true
		}
	});

	// Load the SvelteKit server (must be running)
	mainWindow.loadURL('https://stream.pre-alfa.iz-stream.com');

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
