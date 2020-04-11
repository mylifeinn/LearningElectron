const { app, BrowserWindow } = require('electron');
let mainWindow = null;
app.on('ready', () => {
    mainWindow = new BrowserWindow({ show: false });
    mainWindow = new BrowserWindow({ webPreferences: { nodeIntegration: true } });
    mainWindow.loadFile('index.html');
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});