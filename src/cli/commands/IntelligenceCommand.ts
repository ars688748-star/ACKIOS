import { ProjectIntelligenceBuilder } from "../../intelligence/ProjectIntelligenceBuilder.js";

import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

export class IntelligenceCommand implements Command {

    public readonly name = "intelligence";

    public async execute(
        context: CommandContext
    ): Promise<number> {

        const root =
            context.args.find(a => !a.startsWith("--"))
            ?? context.workingDirectory;

        const report =
            await new ProjectIntelligenceBuilder()
                .build()
                .analyze(root);

        console.log("");

        console.log("=== Project Intelligence ===");

        console.log("");

        console.log("Architecture :", report.architecture.architecture);
        console.log("Architecture Score :", report.architecture.score);
        console.log("Risk Score :", report.risks.score);
        console.log("Dependencies :", report.dependencies.total);
        console.log("Technologies :", report.summary.technologies);
        console.log("Overall Score :", report.summary.overallScore);

        console.log("");

        return 0;

    }

}
