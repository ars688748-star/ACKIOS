import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { Command } from "../core/Command.js";

export class VersionCommand implements Command {

    public readonly name = "version";

    public async execute(): Promise<number> {

        const packageJsonPath = join(
            process.cwd(),
            "package.json"
        );

        const raw = await readFile(
            packageJsonPath,
            "utf8"
        );

        const packageJson = JSON.parse(
            raw.replace(/^\uFEFF/, "")
        );

        console.log(
            `ACKI OS CLI v${packageJson.version}`
        );

        return 0;

    }

}