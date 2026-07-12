import { ArchitectureAnalysisEngine } from "../../architecture/ArchitectureAnalysisEngine.js";

import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

export class ArchitectureValidateCommand implements Command {

    public readonly name = "architecture";

    public async execute(
        context: CommandContext
    ): Promise<number> {

        const root =
            context.args.find(a => !a.startsWith("--"))
            ?? context.workingDirectory;

        const report =
            await new ArchitectureAnalysisEngine().analyze(root);

        console.log(report);

        return 0;

    }

}
