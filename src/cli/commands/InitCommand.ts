import fs from "node:fs/promises";
import path from "node:path";

import { DefaultAckiConfig } from "../../config/models/AckiConfig.js";

import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

export class InitCommand implements Command {

    public readonly name = "init";

    public async execute(
        context: CommandContext
    ): Promise<number> {

        const file =
            path.join(
                context.workingDirectory,
                ".acki.json"
            );

        await fs.writeFile(

            file,

            JSON.stringify(
                DefaultAckiConfig,
                null,
                4
            ),

            "utf8"

        );

        console.log(
            ".acki.json created"
        );

        return 0;

    }

}
