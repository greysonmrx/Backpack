import { store } from "../store";
const { ipcRenderer } = window.require("electron");

export function createNotification(message) {
  const { settings } = store.getState().setting;

  return settings[0].value
    ? ipcRenderer.send("@notification/REQUEST", message)
    : null;
}
