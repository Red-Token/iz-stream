import {app, BrowserWindow, ipcMain, protocol, net, Tray, Menu, shell, session, type Extension} from 'electron';
import path from 'path';
import url from 'url';
import {stat} from 'node:fs/promises';
import electronSquirrelStartup from 'electron-squirrel-startup';

if (electronSquirrelStartup) app.quit();

// only one instance
if (!app.requestSingleInstanceLock()) {
	app.quit();
}
//path

const srcFolder = path.join(app.getAppPath(), `.vite/main_window`);
const extensionsFolder = path.join(process.resourcesPath, `extensions`);
const staticAssetsFolder = import.meta.env.DEV ? path.join(import.meta.dirname, '../../static/') : srcFolder;
const extensionsPath = import.meta.env.DEV
	? path.join(import.meta.dirname, '../../electron/extensions/')
	: extensionsFolder;

console.log('extensionPath: ', extensionsPath);
// Variables

const isDev = !app.isPackaged;
const isMac = process.platform === 'darwin';
const scheme = 'app';

let tray: Tray;
let nos2x: Extension;
let mainWindow: BrowserWindow;

// app.setPath('userData', '/tmp/bob/data');

console.log('App is packaged:', !isDev);

app.on('second-instance', () => {
	if (mainWindow) {
		if (!mainWindow.isVisible()) mainWindow.show();
		mainWindow.focus();
	}
});

protocol.registerSchemesAsPrivileged([
	{
		scheme: scheme,
		privileges: {
			standard: true,
			secure: true,
			allowServiceWorkers: true,
			supportFetchAPI: true,
			corsEnabled: false,
			stream: true, // video stream from schema
			codeCache: true
		}
	}
]);

app.on('ready', () => {
	protocol.handle(scheme, async (request) => {
		const requestPath = path.normalize(decodeURIComponent(new URL(request.url).pathname));

		async function isFile(filePath: string) {
			try {
				if ((await stat(filePath)).isFile()) return filePath;
				// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty
			} catch (e) {}
		}

		const responseFilePath =
			(await isFile(path.join(srcFolder, requestPath))) ??
			(await isFile(
				path.join(srcFolder, path.dirname(requestPath), `${path.basename(requestPath) || 'index'}.html`)
			)) ??
			path.join(srcFolder, '200.html');

		return await net.fetch(url.pathToFileURL(responseFilePath).toString());
	});
	session.defaultSession
		.loadExtension(path.join(extensionsPath, '/kpgefcfmnafjgpblomihpgmejjdanjjp/2.4.1_0'))
		.then((extension) => {
			console.log('Extension loaded:', extension.name);
			nos2x = extension;
			openOptions();
			openOptions2();
		});

	/// Remove app Menu
	// if (isMac) {
	// 	Menu.setApplicationMenu(
	// 		Menu.buildFromTemplate([{label: app.name, submenu: [{role: 'about'}, {role: 'quit'}]}]) //TODO should be the custom menu
	// 	);
	// } else {
	// 	if (!isDev) Menu.setApplicationMenu(null);
	// }
});

app.on('ready', createWindow);

app.on('ready', setupTray);

app.on('window-all-closed', () => {
	if (!isMac) app.quit();
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

ipcMain.on('toggleDevTools', (event) => event.sender.toggleDevTools());
ipcMain.on('setTitleBarColors', (event, bgColor, iconColor) => {
	const window = BrowserWindow.fromWebContents(event.sender);
	if (window === null) return;

	// MacOS title bar overlay buttons do not need styling so the function is undefined
	if (window.setTitleBarOverlay === undefined) return;

	window.setTitleBarOverlay({
		color: bgColor,
		symbolColor: iconColor,
		height: 40
	});
});

//#region Functions

function openOptions(): void {
	const optionsWindow = new BrowserWindow({
		width: 400,
		height: 300,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	});

	const extensionId = nos2x.id;
	optionsWindow.loadURL(`chrome-extension://${extensionId}/options.html`);

	optionsWindow.webContents.openDevTools({mode: 'detach'});
}

function openOptions2(): void {
	const optionsWindow = new BrowserWindow({
		width: 400,
		height: 300,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	});

	const extensionId = nos2x.id;

	optionsWindow.loadURL(
		`chrome-extension://${extensionId}/prompt.html?id=82617495493197&params=%7B%7D&type=getPublicKey&result=8dc5ce6489cdb3dc8d00e9e21db9f8da168096615560d00245cec66aafcbce2a`
	);
}

function createWindow() {
	mainWindow = new BrowserWindow({
		icon: path.join(staticAssetsFolder, '/icon.png'),
		title: `iz-stream`,
		width: 900,
		height: 700,
		minWidth: 400,
		minHeight: 200,

		// show: false,
		// titleBarStyle: 'hiddenInset',
		darkTheme: true,
		// titleBarOverlay: {
		// 	color: '#101010',
		// 	symbolColor: '#f8fafc',
		// 	height: 40,

		// },
		backgroundColor: 'black',
		webPreferences: {
			contextIsolation: true,
			devTools: true, //isDev,
			nodeIntegration: true,
			preload: path.join(import.meta.dirname, '../preload/preload.js')
		}
	});

	if (import.meta.env.DEV) {
		mainWindow.loadURL(VITE_DEV_SERVER_URLS['main_window']);

		// Open the DevTools.
		// mainWindow.webContents.openDevTools();
	} else {
		mainWindow.loadURL('app://-/');
	}

	// mainWindow.webContents.on('new-window', (event, url) => {
	// 	///TODO fix it
	// 	event.preventDefault();
	// 	shell.openExternal(url);
	// });
	mainWindow.on('ready-to-show', async () => {
		if (mainWindow) {
			mainWindow.show();
			mainWindow.focus();
		}
	});
	mainWindow.on('close', (event) => {
		// if (!app.isQuiting) {
		event.preventDefault();
		mainWindow.hide();
		// }
	});
	mainWindow.on('minimize', () => mainWindow.minimize());
}

/// Add Contect Menu
function setupTray() {
	tray = new Tray(path.join(staticAssetsFolder, '/icon.png'));
	tray.setToolTip('iz-stream');
	tray.setContextMenu(
		Menu.buildFromTemplate([
			{label: 'Show', click: () => mainWindow.show()},
			{label: 'Quit', click: () => app.exit()}
		])
	);
	tray.on('click', () => (mainWindow.isMinimized() ? mainWindow.show() : mainWindow.minimize()));
}

//#endregion
