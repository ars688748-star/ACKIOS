import { ipcMain } from "electron";

export class RuntimeIPC {

    public register(): void {

        console.log("=== RuntimeIPC.register() ===");

        ipcMain.handle(
            "runtime:ping",
            async () => {

                console.log("runtime:ping");

                return {
                    ok: true
                };

            }
        );

    }

}
