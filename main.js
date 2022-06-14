const { app, BrowserWindow } = require("electron");
const path = require("path");
//  Require is basically the same thing as import. It is a function from Node.js

//  These are called Arrow Functions and are essentially just shorthands for declaring anonymous
//  functions
const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : screen.width,
        height: screen.height,
        fullscreenable: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    //  __dirname is an enviroment variable that tells you the absolute path of the directory
    //  of the currently executing file.
    mainWindow.loadFile(path.join(__dirname, "index.html"));
}

//  Notes on .then(): Essentially, a promise is a returned object to which you attach callbacks, 
//  instead of passing callbacks into a function. A callback is a function passed as an argument to another function.
app.whenReady().then(() => {

    //  This variable stores information about the screen.
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