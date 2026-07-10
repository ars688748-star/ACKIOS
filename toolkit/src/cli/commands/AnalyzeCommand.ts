import { Toolkit } from "../../Toolkit.js";

import { ConfigManager } from "../../config/ConfigManager.js";

import { ReportFormat } from "../../report/ReportFormat.js";
import { ReportFormatterFactory } from "../../report/ReportFormatterFactory.js";
import { FileReportWriter } from "../../report/writers/FileReportWriter.js";

import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

export class AnalyzeCommand implements Command {

    public readonly name = "analyze";

    public async execute(
        context: CommandContext
    ): Promise<number> {

        const root =
            context.args.find(a => !a.startsWith("--"))
            ?? context.workingDirectory;

        const config =
            new ConfigManager().load(root);

        const formatArg =
            context.args.find(a => a.startsWith("--format="));

        const outputArg =
            context.args.find(a => a.startsWith("--output="));

        const format =
            (formatArg?.split("=")[1] as ReportFormat)
            ?? config.report.format;

        const output =
            outputArg?.substring("--output=".length)
            ?? config.report.output;

        const toolkit = new Toolkit();

        const report =
            await toolkit.analyze(root);

        const content =
            new ReportFormatterFactory()
                .create(format)
                .format(report);

        if (output.length > 0) {

            await new FileReportWriter()
                .write(output, content);

            console.log(`Report saved: ${output}`);

        }
        else {

            console.log(content);

        }

        return 0;

    }

}
