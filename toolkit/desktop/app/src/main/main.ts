import { app, BrowserWindow } from "electron";
import { join } from "node:path";
import { DesktopApplication } from "./DesktopApplication.js";
import { RuntimeIPC } from "./ipc/RuntimeIPC.js";
import { WorkspaceIPC } from "./ipc/workspace/WorkspaceIPC.js";

let mainWindow: BrowserWindow | null = null;

const runtime = new DesktopApplication();
const runtimeIPC = new RuntimeIPC();
const workspaceIPC = new WorkspaceIPC();

async function createMainWindow(): Promise<void> {

    mainWindow = new BrowserWindow({

        width: 1440,
        height: 900,
        minWidth: 1100,
        minHeight: 700,

        title: "ACKIOS",

        autoHideMenuBar: true,

        show: false,

        webPreferences: {

            preload: join(__dirname, "../preload/preload.cjs"),

            contextIsolation: true,

            nodeIntegration: false

        }

    });

    const devUrl =
        process.env.ELECTRON_RENDERER_URL;

    console.log("Renderer URL =", devUrl);

    if (devUrl) {

        await mainWindow.loadURL(devUrl);

    }
    else {

        await mainWindow.loadFile(
            join(__dirname, "../renderer/index.html")
        );

    }

    mainWindow.once("ready-to-show", () => {

        mainWindow?.show();

    });

    mainWindow.on("closed", () => {

        mainWindow = null;

    });

}

app.whenReady().then(async () => {

    await runtime.initialize();

    await runtime.start();

    runtimeIPC.register();
    workspaceIPC.register();

    await createMainWindow();

    app.on("activate", async () => {

        if (BrowserWindow.getAllWindows().length === 0) {

            await createMainWindow();

        }

    });

});

app.on("window-all-closed", () => {

    if (process.platform !== "darwin") {

        app.quit();

    }

});
