import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

import { PublicationCenter } from "../../publication/services/PublicationCenter.js";

export class PublishCommand implements Command {

    public readonly name = "publish";

    public async execute(
        context: CommandContext
    ): Promise<number> {

        console.log("");
        console.log("ACKIOS Publish");
        console.log("================");

        const publicationCenter =
            context.application.kernel.getService<PublicationCenter>(
                "publicationCenter"
            );

        const session =
            await publicationCenter.createSession();

        await publicationCenter.publish(
            session
        );

        console.log("");
        console.log("[ OK ] Publish completed.");
        console.log("");

        return 0;

    }

}
