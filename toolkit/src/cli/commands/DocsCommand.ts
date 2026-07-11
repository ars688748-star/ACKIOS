import { ProcessRunner } from "../../infrastructure/ProcessRunner.js";

import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

export class DocsCommand implements Command {

    public readonly name = "docs";

    public async execute(
        context: CommandContext
    ): Promise<number> {

        return await new ProcessRunner().run(
            "npm",
            ["run","docs"],
            context.workingDirectory
        );

    }

}