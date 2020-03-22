const electron = require("electron");
const { app } = electron;
const { BrowserWindow } = electron;

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    minHeight: 750,
    minWidth: 1300,
    icon: path.resolve(
      __dirname,
      "..",
      "src",
      "assets",
      "logo-color-simple.png"
    ),
    webPreferences: {
      nodeIntegration: true
    }
  });
  // mainWindow.setMenu(null);
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.resolve(__dirname, "..", "build", "index.html")}`
  );

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
