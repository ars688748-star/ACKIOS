import process from "node:process";

import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";
import { ToolDiscoveryService } from "../../platform/tools/ToolDiscoveryService.js";
import { ToolInfo } from "../../platform/tools/models/ToolInfo.js";

export class DoctorCommand implements Command {

    public readonly name = "doctor";

    public async execute(
        context: CommandContext
    ): Promise<number> {

        const discovery =
            context.application.kernel.getService<ToolDiscoveryService>(
                "toolDiscovery"
            );

        const tools =
            await discovery.detectAll();

        console.log("");
        console.log("ACKIOS Doctor");
        console.log("==============");
        console.log(`Node.js : ${process.version}`);
        console.log(`Platform: ${process.platform}`);
        console.log(`Arch    : ${process.arch}`);
        console.log(`CWD     : ${process.cwd()}`);
        console.log("");
        console.log("Tools");
        console.log("-----");

        for (const tool of tools) {

            this.printTool(tool);

        }

        console.log("");

        return 0;

    }

    private printTool(
        tool: ToolInfo
    ): void {

        const status =
            tool.available ? "[ OK ]" : "[FAIL]";

        console.log(
            `${status} ${tool.name} ${tool.version}`
        );

    }

}
