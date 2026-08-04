import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

export class HelpCommand implements Command {

    public readonly name = "help";

    public async execute(
        _context: CommandContext
    ): Promise<number> {

        console.log("");
        console.log("ACKI OS CLI");
        console.log("");
        console.log("Usage:");
        console.log("  acki <command>");
        console.log("");
        console.log("Commands:");
        console.log("  analyze         Analyze project");
        console.log("  doctor          Environment diagnostics");
        console.log("  init            Create .acki.json");
        console.log("  intelligence    Run intelligence analysis");
        console.log("  report          Generate report");
        console.log("  version         Show CLI version");
        console.log("  help            Show this help");
        console.log("");

        return 0;

    }

}