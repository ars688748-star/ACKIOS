import { Toolkit } from "../../Toolkit.js";

import { ReportFormat } from "../../report/ReportFormat.js";
import { ReportFormatterFactory } from "../../report/ReportFormatterFactory.js";

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

        let format = ReportFormat.Console;

        if (context.args.includes("--json"))
            format = ReportFormat.Json;

        if (context.args.includes("--markdown"))
            format = ReportFormat.Markdown;

        if (context.args.includes("--html"))
            format = ReportFormat.Html;

        const report =
            await new Toolkit().analyze(root);

        const text =
            new ReportFormatterFactory()
                .create(format)
                .format(report);

        console.log(text);

        return 0;

    }

}