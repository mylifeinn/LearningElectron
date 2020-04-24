const { app, BrowserWindow, dialog } = require('electron');
const fs = require('fs');
let mainWindow = null;
//创建getFileFromUser()函数
const getFileFromUser = () => {
    const files = dialog.showOpenDialog({
        properties: ['openFile']
    });
    if (!files) { return; }
    const file = files[0];
    const content = fs.readFileSync(file).toString();
    console.log(content);
};;
app.on('ready', () => {
    mainWindow = new BrowserWindow({ show: false });
    mainWindow = new BrowserWindow({ webPreferences: { nodeIntegration: true } });
    mainWindow.loadFile('index.html');
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        //打开应用随即打开选择文件窗口
        getFileFromUser();
    });
    //代码打开开发者工具
    //mainWindow.webContents.openDevTools(); 
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});


