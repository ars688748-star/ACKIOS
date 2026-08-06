import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

import { ArchitectureInspector } from "../../inspector/services/ArchitectureInspector.js";

export class InspectCommand implements Command {

    public readonly name = "inspect";

    public async execute(
        _context: CommandContext
    ): Promise<number> {

        console.log("");
        console.log("ACKIOS Architecture Inspector");
        console.log("=============================");
        console.log("");

        const inspector =
            _context.application.runtime.context.services.resolve<ArchitectureInspector>(
                "architectureInspector"
            );

        const result =
            await inspector.inspect();

        console.table({

            services: result.services,

            files: result.files,

            directNews: result.directNews,

            infrastructure: result.infrastructureNews,

            serviceObjects: result.serviceNews,

            violations: result.violationsList.length,

            imports: result.imports

        });

        console.log("");

        for(const violation of result.violationsList){

    console.log("");

    console.log("[" + violation.severity + "] " + violation.rule);

    if(violation.file){

        console.log("File : " + violation.file);

    }

    if(violation.type){

        console.log("Type : " + violation.type);

    }

    console.log(violation.message);

}

        for(const recommendation of result.recommendations){

            console.log("[INFO] " + recommendation);

        }

        console.log("");

        return 0;

    }

}


