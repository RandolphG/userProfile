/**
 * @description Main Electron JS init file
 * @author Randolph Gordon - randolph.gordon@poplogics.com
 * @date
 */
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";
  mainWindow = new BrowserWindow({
    width: 1000,
    minWidth: 575,
    minHeight: 900,
    maxHeight: 900,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      experimentalFeatures: true,
      webviewTag: true,
    },
  });

  const url = isDev
    ? "http://localhost:4002"
    : `file://${path.join(__dirname, "../build/index.html")}`;

  mainWindow.loadURL(url);

  mainWindow.webContents.openDevTools({
    mode: "undocked",
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", async () => {
  // Install React Dev Tools
  const {
    default: installExtension,
    REACT_DEVELOPER_TOOLS,
    REDUX_DEVTOOLS,
  } = require("electron-devtools-installer");

  await installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
    .then((extension) => console.log(`${extension} was added`))
    .catch((error) =>
      console.error(
        "An error during React Developer Tools installation occurred:",
        error
      )
    );

  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (!mainWindow) createWindow();
});
