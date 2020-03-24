const electron = require("electron");
const { app, BrowserWindow, ipcMain, Notification, Tray, Menu } = electron;

const path = require("path");
const isDev = require("electron-is-dev");

ipcMain.on("@notification/REQUEST", async (event, message) => {
  try {
    const { title, body } = message;

    const notification = new Notification({
      title,
      body,
      icon: path.resolve(__dirname, "iconSmall.png")
    });

    notification.show();
  } catch (err) {
    event.sender.send(
      "@notification/FAILURE",
      "Houve um erro na criação da notificação"
    );
  }
});

let mainWindow;
let tray;

function createWindow() {
  mainWindow = new BrowserWindow({
    minHeight: 650,
    minWidth: 1300,
    icon: path.resolve(__dirname, "icon.png"),
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.resolve(__dirname, "..", "build", "index.html")}`
  );

  isDev ? mainWindow.webContents.openDevTools() : mainWindow.setMenu(null);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  tray = new Tray(path.resolve(__dirname, "iconSmall.png"));

  const contextMenu = Menu.buildFromTemplate([
    { label: "Abrir", type: "normal", click: () => mainWindow.focus() },
    { label: "Sair", type: "normal", click: () => mainWindow.close() }
  ]);

  tray.setToolTip("Backpack");
  tray.setContextMenu(contextMenu);
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
