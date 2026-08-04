import { RuntimeContext } from "../context/RuntimeContext.js";
import { IRuntimeStage } from "../pipeline/IRuntimeStage.js";

import { DecisionManager } from "../../decision/DecisionManager.js";

export class DecisionStage implements IRuntimeStage {

    public readonly name = "DecisionStage";

    public async execute(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        const decision =
            context.services?.get<DecisionManager>(
                "DecisionManager"
            );

        if (decision) {

            return {

                ...context,

                decision

            };

        }

        return context;

    }

}
