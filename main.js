const { app, BrowserWindow } = require("electron");
const path = require("path");

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : screen.width,
        height: screen.height,
        fullscreenable: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile(path.join(__dirname, "index.html"));
}


app.whenReady().then(() => {

    const {screen} = require('electron')

    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize

    mainWindow = new BrowserWindow({ 
        width, 
        height,
        icon: 'favicon.ico',
    
    })
    mainWindow.loadFile(path.join(__dirname, "index.html"));


})


app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });


  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});