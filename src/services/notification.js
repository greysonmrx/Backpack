const { ipcRenderer } = window.require("electron");

export function createNotification(message) {
  ipcRenderer.send("@notification/REQUEST", message);
}
