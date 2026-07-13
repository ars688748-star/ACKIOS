import { ProcessRunner } from "../../infrastructure/ProcessRunner.js";

import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

export class BuildCommand implements Command {

    public readonly name = "build";

    public async execute(
        context: CommandContext
    ): Promise<number> {

        const runner =
            context.application.runtime.context.services.resolve<ProcessRunner>(
                "processRunner"
            );

        return await runner.run(
            "npm",
            ["run", "build"],
            context.workingDirectory
        );

    }

}
