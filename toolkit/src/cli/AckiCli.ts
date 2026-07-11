import { AnalyzeCommand } from "./commands/AnalyzeCommand.js";
import { DoctorCommand } from "./commands/DoctorCommand.js";
import { InitCommand } from "./commands/InitCommand.js";
import { ReportCommand } from "./commands/ReportCommand.js";
import { IntelligenceCommand } from "./commands/IntelligenceCommand.js";
import { VersionCommand } from "./commands/VersionCommand.js";
import { HelpCommand } from "./commands/HelpCommand.js";
import { BuildCommand } from "./commands/BuildCommand.js";

import { Command } from "./core/Command.js";

export class AckiCli {

    private readonly commands = new Map<string, Command>();

    public constructor() {

        this.register(new AnalyzeCommand());
        this.register(new DoctorCommand());
        this.register(new InitCommand());
        this.register(new ReportCommand());
        this.register(new IntelligenceCommand());
        this.register(new VersionCommand());
        this.register(new HelpCommand());
        this.register(new BuildCommand());

    }

    private register(
        command: Command
    ): void {

        this.commands.set(
            command.name,
            command
        );

    }

    public async run(
        args: string[]
    ): Promise<number> {

        const name = args[0] ?? "help";

        const command =
            this.commands.get(name);

        if (!command) {

            console.error(
                `Unknown command: ${name}`
            );

            return 1;

        }

        return command.execute({

            args: args.slice(1),

            workingDirectory:
                process.cwd()

        });

    }

}


