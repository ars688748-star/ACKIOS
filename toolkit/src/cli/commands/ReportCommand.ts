import { Toolkit } from "../../Toolkit.js";

import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

export class ReportCommand implements Command {

    public readonly name = "report";

    public async execute(
        context: CommandContext
    ): Promise<number> {

        const root =
            context.args.find(a => !a.startsWith("--"))
            ?? context.workingDirectory;

        const report =
            await new Toolkit().analyze(root);

        console.log("");

        console.log("=== ACKI Report ===");

        console.log("");

        console.log("Score :", report.score);
        console.log("Issues :", report.issues.length);
        console.log("Recommendations :", report.recommendations.length);

        console.log("");

        return 0;

    }

}