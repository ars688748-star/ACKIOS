import { RuntimeContext } from "../context/RuntimeContext.js";
import { IRuntimeStage } from "../pipeline/IRuntimeStage.js";

import { ReasoningManager } from "../../reasoning/ReasoningManager.js";

export class ReasoningStage implements IRuntimeStage {

    public readonly name = "ReasoningStage";

    public async execute(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        const reasoning =
            context.services?.get<ReasoningManager>(
                "ReasoningManager"
            );

        if (reasoning) {

            return {

                ...context,

                reasoning

            };

        }

        return context;

    }

}
