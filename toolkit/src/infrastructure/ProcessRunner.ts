import { spawn } from "node:child_process";

export class ProcessRunner {

    public async run(
        command: string,
        args: string[],
        cwd: string = process.cwd()
    ): Promise<number> {

        return await new Promise<number>((resolve) => {

            const isWindows =
                process.platform === "win32";

            const child = isWindows
                ? spawn("cmd.exe",
                    ["/c", command, ...args],
                    {
                        cwd,
                        stdio: "inherit"
                    })
                : spawn(
                    command,
                    args,
                    {
                        cwd,
                        stdio: "inherit"
                    });

            child.on(
                "close",
                code => resolve(code ?? 1)
            );

            child.on(
                "error",
                () => resolve(1)
            );

        });

    }

}