import { ipcMain } from "electron";

export abstract class BaseIPC {

    public abstract register(): void;

    protected handle(
        channel: string,
        handler: (...args: any[]) => any
    ): void {

        ipcMain.handle(channel, handler);

    }

}
