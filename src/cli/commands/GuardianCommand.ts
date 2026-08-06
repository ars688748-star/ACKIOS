import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";
import { GuardianService } from "../../guardian/services/GuardianService.js";

export class GuardianCommand implements Command {

    public readonly name = "guardian";

    public async execute(
        context: CommandContext
    ): Promise<number> {

        const guardian =
            context.application.kernel.getService<GuardianService>(
                "guardian"
            );

        console.log("");
        console.log("ACKIOS Guardian");
        console.log("================");
        console.log("");

        await guardian.scan();

        await guardian.classify();

        console.log("");
        console.log("[ OK ] Guardian completed.");
        console.log("");

        return 0;

    }

}
