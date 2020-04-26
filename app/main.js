const { app, BrowserWindow } = require("electron");
const fs = require("fs");
let mainWindow = null;

app.on("ready", () => {
  mainWindow = new BrowserWindow({ show: false });
  mainWindow = new BrowserWindow({ webPreferences: { nodeIntegration: true } });
  //代码打开开发者工具
  //mainWindow.webContents.openDevTools();
  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  mainWindow.loadFile("index.html");
});
