import { ProcessRunner } from "../../infrastructure/ProcessRunner.js";

import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

export class BuildCommand implements Command {

    public readonly name = "build";

    public async execute(
        context: CommandContext
    ): Promise<number> {

        return await new ProcessRunner().run(
            "npm",
            ["run","build"],
            context.workingDirectory
        );

    }

}