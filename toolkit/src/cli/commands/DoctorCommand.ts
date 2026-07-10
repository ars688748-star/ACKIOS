import process from "node:process";

import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

export class DoctorCommand implements Command {

    public readonly name = "doctor";

    public async execute(
        _context: CommandContext
    ): Promise<number> {

        console.log("");
        console.log("ACKI Doctor");
        console.log("============");
        console.log(`Node.js : ${process.version}`);
        console.log(`Platform: ${process.platform}`);
        console.log(`Arch    : ${process.arch}`);
        console.log(`CWD     : ${process.cwd()}`);
        console.log("");

        return 0;

    }

}
