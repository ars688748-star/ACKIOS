import { spawn } from "node:child_process";

export class ProcessCapture {

    public async run(
        command: string,
        args: string[],
        cwd: string = process.cwd()
    ): Promise<string> {

        return await new Promise<string>((resolve, reject) => {

            const isWindows =
                process.platform === "win32";

            const child = isWindows
                ? spawn(
                    "cmd.exe",
                    ["/c", command, ...args],
                    {
                        cwd
                    })
                : spawn(
                    command,
                    args,
                    {
                        cwd
                    });

            let output = "";

            child.stdout?.on(
                "data",
                data => output += data.toString()
            );

            child.stderr?.on(
                "data",
                data => output += data.toString()
            );

            child.on(
                "error",
                error => reject(error)
            );

            child.on(
                "close",
                () => resolve(output.trim())
            );

        });

    }

}
