import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

import { HealthEngine } from "../../health/HealthEngine.js";

export class HealthCommand
implements Command{

    public readonly name =
        "health";


    public async execute(
        _context:CommandContext
    ):Promise<number>{

        const engine =
            _context.application.runtime.context.services.resolve<HealthEngine>(
                "healthEngine"
            );

        const checks =
            await engine.execute();

        console.log("");
        console.log("ACKIOS Health");
        console.log("================");
        console.log("");

        for(const check of checks){

            const icon =
                check.status === "OK"
                    ? "[ OK ]"
                    : check.status === "WARNING"
                        ? "[WARN]"
                        : "[FAIL]";

            console.log(
                icon +
                " " +
                check.name +
                " - " +
                check.message
            );

        }

        console.log("");

        return 0;

    }

}

