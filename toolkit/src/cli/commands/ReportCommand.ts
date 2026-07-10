import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

export class ReportCommand implements Command {

    public readonly name = "report";

    public async execute(
        _context: CommandContext
    ): Promise<number> {

        console.log("Not implemented");

        return 0;

    }

}
