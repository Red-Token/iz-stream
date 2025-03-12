import {app, BrowserWindow, Tray, Menu, shell, session} from 'electron';
import path from 'path';
import {fileURLToPath} from 'url';
import http from 'http';
//import Logger from "electron-log"
//path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Variables
const isDev = !app.isPackaged;
const isMac = process.platform === 'darwin';
const gotTheLock = app.requestSingleInstanceLock();

let tray;
let mainWindow;
let server;
let nos2x = undefined;

console.log('App is packaged:', !isDev);

// only one instance
if (!gotTheLock) {
	app.quit();
} else {
	app.on('second-instance', () => {
		if (mainWindow) {
			if (!mainWindow.isVisible()) mainWindow.show();
			mainWindow.focus();
		}
	});

	app.whenReady().then(async () => {
		try {
			server = await startServer();

			nos2x = await session.defaultSession.loadExtension(
				path.join(__dirname, 'extensions/kpgefcfmnafjgpblomihpgmejjdanjjp/2.4.1_0')
			);

			createWindow();
			setupTray();
			openOptions();
		} catch (error) {
			console.error('Server start failed:', error);
			app.quit();
		}

		/// Remove app Menu
		if (isMac) {
			Menu.setApplicationMenu(
				Menu.buildFromTemplate([{label: app.name, submenu: [{role: 'about'}, {role: 'quit'}]}]) //TODO should be the custom menu
			);
		} else {
			if (!isDev) Menu.setApplicationMenu(null);
		}
	});

	app.on('window-all-closed', () => {
		if (server && server.close) {
			server.close();
		}
		if (!isMac) app.quit();
	});

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
}

//#region Functions

function openOptions() {
	const optionsWindow = new BrowserWindow({
		width: 400,
		height: 300,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	});

	optionsWindow.loadURL(`chrome-extension://${nos2x.id}/options.html`);
	optionsWindow.focus();
}

async function createWindow() {
	mainWindow = new BrowserWindow({
		title: `iz-stream`,
		width: 900,
		height: 600,
		show: false,
		webPreferences: {
			contextIsolation: true,
			devTools: isDev,
			nodeIntegration: true
			//preload: path.join(__dirname, "preload.js"),
		}
	});

	mainWindow.loadURL('http://localhost:3000'); //TODO Should be add try catch mainWindow.loadFile("fallback.html") and replace the address to argument

	mainWindow.webContents.on('new-window', (event, url) => {
		///TODO fix it
		event.preventDefault();
		shell.openExternal(url);
	});
	mainWindow.on('ready-to-show', async () => {
		if (mainWindow) {
			mainWindow.show();
		}
	});
	mainWindow.on('close', (event) => {
		if (!app.isQuiting) {
			event.preventDefault();
			mainWindow.hide();
		}
	});
	mainWindow.on('minimize', () => mainWindow.hide());
}

async function startServer() {
	//console.log(`Starting server from: ${serverPath}`)
	const {startServer} = await import('./server.js');
	return startServer();
}

/// Add Contect Menu
function setupTray() {
	tray = new Tray(path.join(__dirname, '../build/node', 'client', 'favicon.png'));
	tray.setToolTip('iz-stream');
	tray.setContextMenu(
		Menu.buildFromTemplate([
			{label: 'Show', click: () => mainWindow.show()},
			{
				label: 'Quit',
				click: () => {
					app.isQuiting = true;
					app.quit();
				}
			}
		])
	);
	tray.on('click', () => (mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()));
}

async function waitForServer(url, timeout) {
	const startTime = Date.now();

	return new Promise((resolve, reject) => {
		const interval = setInterval(() => {
			http
				.get(url, (res) => {
					if (res.statusCode === 200) {
						clearInterval(interval);
						resolve();
					}
				})
				.on('error', () => {
					if (Date.now() - startTime > timeout) {
						clearInterval(interval);
						reject(new Error('Server did not start within timeout'));
					}
				});
		}, 500);
	});
}

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

//#endregion
